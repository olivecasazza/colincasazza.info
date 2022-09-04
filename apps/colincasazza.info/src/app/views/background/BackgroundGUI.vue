<template>
  <div class="app-view-port h-full w-full">
    <div ref="gui-container"></div>
  </div>
</template>

<script lang="ts">
import useEmitter from "@app/emitter";
import {
  generateRandomColor,
  randomFromRange,
  randomIntFromRange,
} from "@app/utils/random";
import { vxm } from "@app/store";
import { GUI } from "dat.gui";
import { Vue } from "vue-class-component";
import { DEFAULT_BIRD_ID, generateBirdId } from "./background";
import type { IBirdConfig } from "./background";

export default class BackgroundGUI extends Vue {
  gui: GUI = new GUI({ autoPlace: false, closeOnTop: true });
  emitter = useEmitter();

  get container(): HTMLElement {
    return this.$refs["gui-container"] as HTMLElement;
  }

  get birdsFolder(): GUI {
    return this.gui.__folders["birds"];
  }

  get globalsFloder(): GUI {
    return this.gui.__folders["globals"];
  }

  async mounted() {
    await vxm.background.$subscribeAction("initFlock", {
      before: () => null,
      after: () => null,
    });
    this.container.appendChild(this.gui.domElement);
    this.gui.domElement.id = "gui";
    this.gui.domElement.style.overflowY = "scroll";
    this.gui.domElement.style.position = "relative";
    this.gui.domElement.style.maxHeight = "40%";
    this.gui.domElement.style.maxWidth = "60%";
    this.gui.domElement.style.left = "0px";
    this.gui.domElement.style.bottom = "0px";
    this.gui.domElement.style.zIndex = "9999";
    this.gui.addFolder("globals");
    this.gui.addFolder("birds");
    this.gui
      .add({ "+": () => this.generateRandomBirdConfig() }, "+")
      .name("(+) add new bird species");

    this.gui.add({ export: () => this.exportBirdsConfigAsJSON() }, "export");
    this.globalsFloder
      .add(vxm.background, "maxFlockSize")
      .min(1)
      .max(2000)
      .name("max flock size");
    this.globalsFloder.open();
    await vxm.background.birdConfigs.forEach(this.addBirdConfigToGui);
  }

  unmounted() {
    this.gui?.destroy();
    while (this.container?.lastChild)
      this.container.removeChild(this.container.lastChild);
  }

  async generateRandomBirdConfig() {
    console.log("#" + generateRandomColor().getHexString());
    const newBirdConfig = await vxm.background.addBirdConfig({
      id: generateBirdId(),
      weight: randomIntFromRange(25, 75),
      neighborDistance: randomIntFromRange(0, 50),
      desiredSeparation: randomIntFromRange(50, 250),
      separationMultiplier: randomFromRange(0.001, 1),
      alignmentMultiplier: randomFromRange(0.001, 1),
      cohesionMultiplier: randomFromRange(0.001, 1),
      maxForce: randomFromRange(0.0001, 1),
      maxSpeed: randomFromRange(0.001, 3),
      birdColor: "#" + generateRandomColor().getHexString(),
      birdSize: randomFromRange(3, 15),
    } as IBirdConfig);
    this.addBirdConfigToGui(newBirdConfig);
  }

  async removeBirdConfigFromGui(birdConfigIdToRemove: string) {
    await vxm.background.removeBirdConfig(birdConfigIdToRemove);
    this.birdsFolder.removeFolder(
      this.birdsFolder.__folders[birdConfigIdToRemove]
    );
  }

  addBirdConfigToGui(configToAdd: IBirdConfig) {
    const birdFolder = this.birdsFolder.addFolder(configToAdd.id);
    birdFolder
      .addColor(configToAdd, "birdColor")
      .setValue(configToAdd.birdColor)
      .onFinishChange(async (updatedColor) => {
        await vxm.background.updateBirdConfig({
          ...configToAdd,
          birdColor: updatedColor,
        });
      }).domElement.inputMode = "none"; // disable keyboard inputs
    // attributes w/o options
    [
      "weight",
      "neighborDistance",
      "desiredSeparation",
      "separationMultiplier",
      "alignmentMultiplier",
      "cohesionMultiplier",
      "maxSpeed",
      "maxForce",
      "birdSize",
    ].forEach((attr) => {
      birdFolder.add(configToAdd, attr).onFinishChange(async (updatedValue) => {
        await vxm.background.updateBirdConfig({
          ...configToAdd,
          [attr]: updatedValue,
        });
      });
    });

    this.birdsFolder.open();
    if (configToAdd.id !== DEFAULT_BIRD_ID) {
      birdFolder
        .add(
          {
            "-": () => this.removeBirdConfigFromGui(configToAdd.id),
          },
          "-"
        )
        .name("(-) remove species");
    }
  }

  exportBirdsConfigAsJSON(): void {
    const data = [...vxm.background.birdConfigs].map((c) => {
      return Object.fromEntries(Object.entries(c));
    });
    console.log(JSON.stringify(data));
  }
}
</script>
