<script lang="ts">
import RendererRootViewPortComponent from '@app/components/renderer/RendererRootViewPortComponent.vue';
import NavBar from '@app/views/NavBar.vue';
import Footer from '@app/views/Footer.vue';
import { Options, Vue } from 'vue-class-component';
import { vxm } from '@app/store';
import FlockView from '@app/views/flock/FlockView.vue';

@Options({
  components: {
    FlockView,
    RendererRootViewPortComponent,
    NavBar,
    Footer,
  },
})
export default class App extends Vue {
  get vxm() {
    return vxm;
  }
  mounted() {
    vxm.renderer.start();
    vxm.flock.constructFlock();
  }
}
</script>

<template>
  <div class="app-wrapper">
    <div class="w-full h-full relative">
      <RendererRootViewPortComponent class="z-10" />
      <div v-if="vxm.renderer.rendererRootViewPort.isMounted">
        <FlockView v-if="vxm.flock.isMounted" class="absolute w-full h-full" />
        <div
          v-if="vxm.flock.isMounted"
          class="absolute w-full h-full flex flex-col z-30 p-4"
        >
          <NavBar />
          <router-view />
          <Footer></Footer>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss">
html,
body {
  background: black;
}

.app-wrapper {
  @apply w-screen h-screen overflow-hidden;
}
</style>
