<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { vxm } from './store';

@Options({
  components: {},
})
export default class App extends Vue {
  isLoaded = false;
  async created() {
    await vxm.gamesList.loadGameTemplates();
    await vxm.gamesList.loadLiveGames();
    this.isLoaded = true;
  }
}
</script>

<template>
  <div class="bg-black w-screen h-screen p-2">
    <div v-if="isLoaded" class="app-view-port flex flex-col w-full h-full">
      <div class="app-view-port w-full h-12 text-lg text-highlight-200">xwords</div>
      <router-view class="flex-grow" />
    </div>
  </div>
</template>
