<template>
  <ViewPortComponent :view="view" />
</template>

<script lang="ts">
import ViewPortComponent from '@app/components/renderer/ViewPortComponent.vue';
import { vxm } from '@app/store';
import { View } from '@app/utils/renderer/view';
import {
  BufferAttribute,
  BufferGeometry,
  Color,
  LineBasicMaterial,
  LineSegments,
  Vector3,
} from 'three';
import { lerp } from 'three/src/math/MathUtils';
import { Options, Vue } from 'vue-class-component';
import throttle from '@app/utils/lodash/throttle';

@Options({
  components: {
    ViewPortComponent: ViewPortComponent,
  },
})
export default class FlockView extends Vue {
  addBirdsToFlockInterval!: NodeJS.Timer | number;
  // variables for rendering flock
  view!: View;

  get vxm() {
    return vxm;
  }

  created() {
    this.view = new View({
      cameraOptions: {
        fov: 75,
        near: 0.1,
        far: 1200,
        startingPosition: new Vector3(0, 0, 1000),
      },
      controlsOptions: {
        startDirection: new Vector3(0, 0, 0),
        enabled: false,
      },
      id: 'BACKGROUND_VIEW',
      background: new Color('black'),
      renderTickCallback: (_: View) => {
        if (!vxm.flock.isMounted) return;
        vxm.flock.updateFlock({
          sceneWidth: this.view.visibleWidthAtZDepth,
          sceneHeight: this.view.visibleHeightAtZDepth,
          timeStep: vxm.flock.timeStep,
          updateFlockGeometryCallback: this.updateFlockGeometry,
        });
      },
      objects: {
        line: new LineSegments(
          new BufferGeometry(),
          new LineBasicMaterial({
            vertexColors: true,
          })
        ),
      },
    });
  }

  mounted() {
    window.addEventListener('touchstart', throttle(this.touchDrag, 10), false);
    window.addEventListener('touchmove', throttle(this.touchDrag, 10), false);
    window.addEventListener(
      'mousedown',
      () => (vxm.flock.isDragging = true),
      false
    );
    window.addEventListener('mousemove', throttle(this.mouseDrag, 10), false);
    window.addEventListener(
      'mouseup',
      () => (vxm.flock.isDragging = false),
      false
    );
    // add all the birds, but throttle it
    this.addBirdsToFlockInterval = setInterval(() => {
      if (vxm.flock.currentFlockSize > vxm.flock.maxFlockSize) {
        clearInterval(this.addBirdsToFlockInterval as NodeJS.Timer);
      }
      vxm.flock.addBirdAtRandomPosition({
        viewWidth: this.view.visibleWidthAtZDepth,
        viewHeight: this.view.visibleHeightAtZDepth,
      });
    }, 25);
  }

  unmounted() {
    /** remove all the random event listeners weve added */
    window.addEventListener('touchstart', throttle(this.touchDrag, 10), false);
    window.addEventListener('touchmove', throttle(this.touchDrag, 10), false);
    window.addEventListener(
      'mousedown',
      () => (vxm.flock.isDragging = true),
      false
    );
    window.addEventListener('mousemove', throttle(this.mouseDrag, 10), false);
    window.addEventListener(
      'mouseup',
      () => (vxm.flock.isDragging = false),
      false
    );
    clearInterval(this.addBirdsToFlockInterval as NodeJS.Timer);
    /** make sure we clean up the wasm resources
    can we write this into the flock free function */
    // for (const config of vxm.flock.birdConfigs) config.free();
    vxm.flock.unmounted();
  }

  updateFlockGeometry(vertices: Float32Array, colors: Float32Array) {
    this.view.objects.line.geometry.setAttribute(
      'position',
      new BufferAttribute(vertices, 3)
    );
    this.view.objects.line.geometry.setAttribute(
      'color',
      new BufferAttribute(colors, 3)
    );
  }

  renderTickCallback(_: View) {
    if (!vxm.flock.isMounted) return;
    vxm.flock.updateFlock({
      sceneWidth: this.view.visibleWidthAtZDepth,
      sceneHeight: this.view.visibleHeightAtZDepth,
      timeStep: vxm.flock.timeStep,
      updateFlockGeometryCallback: this.updateFlockGeometry,
    });
  }

  touchDrag(event: TouchEvent) {
    const touch = event.touches.item(event.touches.length - 1);
    if (!touch) return;
    this.addBirdFromEvent(touch.clientX, touch.clientY);
  }

  mouseDrag(event: MouseEvent) {
    if (!vxm.flock.isDragging || vxm.flock.updating) return;
    this.addBirdFromEvent(event.x, event.y);
  }

  addBirdFromEvent(eventX: number, eventY: number) {
    const normClickX = eventX / this.view.viewPort.width;
    const normClickY = eventY / this.view.viewPort.height;
    const halfSceneWidth = this.view.visibleWidthAtZDepth / 2;
    const halfSceneHeight = this.view.visibleHeightAtZDepth / 2;
    const x = lerp(-halfSceneWidth, halfSceneWidth, normClickX);
    const y = -lerp(-halfSceneHeight, halfSceneHeight, normClickY);
    vxm.flock.addBirdAtPosition({ x, y });
  }
}
</script>
