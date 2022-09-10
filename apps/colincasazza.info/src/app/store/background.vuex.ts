import themeColors from '@theme/src/lib/colors.cjs';
import {
  DEFAULT_BIRD_ID,
  generateBirdId,
  MAX_FLOCK_SIZE,
  type IBirdConfig,
} from '@app/views/background/background';
import { Color } from 'three';
import { action, createModule } from 'vuex-class-component';
import { BirdConfig, Flock } from '@wasm';
import init from '@wasm';
import * as WeightedArray from 'weighted-array';

const { select } = WeightedArray;

const VuexModule = createModule({
  namespaced: 'background',
  strict: false,
});

export class BackgroundStore extends VuexModule {
  public birdConfigs: Map<string, IBirdConfig> = new Map<string, IBirdConfig>();
  public isDragging = false;
  public isLoaded = false;
  public updating = false;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public $subscribeAction: any;
  private _maxFlockSize: number = MAX_FLOCK_SIZE;
  private _flock?: Flock;

  get maxFlockSize(): number {
    return this._maxFlockSize;
  }
  set maxFlockSize(_maxFlockSize: number) {
    if (this._flock) this._flock.set_max_flock_size(_maxFlockSize);
    this._maxFlockSize = _maxFlockSize;
  }
  get currentFlockSize(): number {
    return this._flock?.get_current_flock_size() || 0;
  }

  @action async unmounted() {
    if (!this._flock) return;
    this.birdConfigs.forEach((birdConfig) => {
      if (birdConfig.wasmObject) birdConfig.wasmObject.free();
    });
    this._flock.free();
  }

  @action async initFlock(): Promise<void> {
    await init();
    this._flock = Flock.new(
      // todo: determine number birds to add based on screen size and performance
      // const n = (this.view.viewPort.width * this.view.viewPort.height) / 500;
      MAX_FLOCK_SIZE,
      BigInt(new Date().getUTCMilliseconds())
    );
    // add configs for flock
    await Promise.all(
      [
        {
          id: generateBirdId(),
          weight: 1,
          neighborDistance: 200,
          desiredSeparation: 50,
          separationMultiplier: 1.7,
          alignmentMultiplier: 0.3,
          cohesionMultiplier: 0.01,
          maxSpeed: 2,
          maxForce: 0.01,
          birdSize: 12,
          birdColor: themeColors.highlight[200],
        } as IBirdConfig,
        {
          id: DEFAULT_BIRD_ID,
          weight: 80,
          neighborDistance: 200,
          desiredSeparation: 50,
          separationMultiplier: 1.7,
          alignmentMultiplier: 0.3,
          cohesionMultiplier: 0.01,
          maxSpeed: 2,
          maxForce: 0.01,
          birdSize: 6,
          birdColor: themeColors.compliment[500],
        } as IBirdConfig,
      ].map(this.addBirdConfig)
    );
    this.isLoaded = true;
  }

  @action async addBirdConfig(configParams: IBirdConfig): Promise<IBirdConfig> {
    if (!this._flock)
      throw new Error(
        "[background.vuex] cannot add config, flock doesn't exist."
      );
    const birdConfig = await this.generateBirdConfig(configParams);
    this._flock.add_bird_config(birdConfig.id, birdConfig.wasmObject);
    this.birdConfigs.set(birdConfig.id, birdConfig);
    return birdConfig;
  }

  @action async updateBirdConfig(
    updatedBirdConfig: IBirdConfig
  ): Promise<void> {
    if (!this._flock)
      throw new Error(
        "[background.vuex] cannot update bird config, flock doesn't exist."
      );
    const newBirdConfig = await this.generateBirdConfig(updatedBirdConfig);
    this._flock.update_bird_config(
      updatedBirdConfig.id,
      newBirdConfig.wasmObject
    );
  }

  @action async removeBirdConfig(configIdToRemove: string) {
    if (!this._flock)
      throw new Error(
        "[background.vuex] cannot remove config, flock doesn't exist."
      );
    const config = this.birdConfigs.get(configIdToRemove);
    if (!config)
      throw new Error(
        '[background.vuex] cannot remove config, cannot find matching config.'
      );
    this._flock.remove_bird_config(configIdToRemove);
    this.birdConfigs.delete(configIdToRemove);
  }
  @action async updateFlock(props: {
    sceneWidth: number;
    sceneHeight: number;
    timeStep: number;
    updateFlockGeometryCallback: (
      vertices: Float32Array,
      colors: Float32Array
    ) => void;
  }) {
    if (!this._flock) return;
    this._flock.update(
      props.sceneWidth,
      props.sceneHeight,
      props.timeStep,
      props.updateFlockGeometryCallback
    );
  }

  @action async addBirdAtRandomPosition(props: {
    viewWidth: number;
    viewHeight: number;
  }): Promise<void> {
    if (!this._flock) return;
    const config = select([...this.birdConfigs.values()]);
    this._flock.add_bird_at_random_position(
      config.id,
      props.viewWidth,
      props.viewHeight
    );
  }

  @action async addBirdAtPosition(props: {
    x: number;
    y: number;
  }): Promise<void> {
    if (!this._flock) return;
    const config = select([...this.birdConfigs.values()]);
    this._flock.add_bird(config.id, props.x, props.y);
  }

  /** generates the wasm bird config
   * and attaches the wasm object to
   * IBirdConfig object */
  @action async generateBirdConfig(params: IBirdConfig): Promise<IBirdConfig> {
    const color = new Color(params.birdColor);
    const wasmConfig = BirdConfig.new(
      params.id,
      params.weight,
      params.neighborDistance,
      params.desiredSeparation,
      params.separationMultiplier,
      params.alignmentMultiplier,
      params.cohesionMultiplier,
      params.maxSpeed,
      params.maxForce,
      params.birdSize,
      color.r,
      color.g,
      color.b
    );
    params.wasmObject = wasmConfig;
    return params;
  }
}
