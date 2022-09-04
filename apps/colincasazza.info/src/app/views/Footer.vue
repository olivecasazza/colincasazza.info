<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { vxm } from "../store";

@Options({
  inheritAttrs: false,
})
export default class Footer extends Vue {
  mounted() {
    vxm.renderer.initStats({
      container: document.getElementById("stats-container") as HTMLElement,
    });
  }
}
</script>

<template>
  <div class="app-view-port w-full flex flex-row whitespace-nowrap text-xs">
    <div class="self-center max-w-sm app-view-port">
      <div class="scroll-text text-white">
        <span v-if="$route.name === 'HomeView'">
          like the background? click
          <router-link to="/projects/three/flock" class="link">
            <span class="rainbow-text-animated">here</span></router-link
          >.
        </span>
        <span v-else>
          source code to projects can be found at
          <span
            class="link"
            href="https://github.com/colanzio5/colincasazza.info"
          >
            <a class="rainbow-text-animated">
              https://github.com/colanzio5/colincasazza.info
            </a>
          </span>
        </span>
      </div>
    </div>
    <div class="flex-grow"></div>
    <div class="justify-end min-w-fit overflow-clip" id="stats-container"></div>
  </div>
</template>
