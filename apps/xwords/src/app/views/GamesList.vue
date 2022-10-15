<script lang="ts">
import { vxm } from '@app/store';
import {  Vue } from 'vue-class-component';
import { useRouter } from 'vue-router';

export default class GamesList extends Vue {
  router = useRouter();

  get vxm() {
    return vxm;
  }

  async created() {
    await vxm.gamesList.load();
  }

  async beginUnstartedGame(gameTemplateId: string) {
    const { id } = await vxm.gamesList.createGameFromTemplate({
      gameTemplateId
    });
    await this.router.push({ name: 'game', params: { gameId: id } });
  }

  async openInProgressGame(activeGameId: string) {
    await this.router.push({ name: 'game', params: { gameId: activeGameId } });
  }
}
</script>

<template>
  <div v-if="vxm.gamesList.isLoaded" class="w-full h-full">
    
    <!-- not started -->
    <div v-if="vxm.gamesList.gameTemplates.length">
      <div class="underline text-white">start new game</div>
      <div
        v-for="gameTemplate in vxm.gamesList.gameTemplates"
        :key="gameTemplate.id"
        class="text-white border border-white hover:link w-full p-2"
        @click="beginUnstartedGame(gameTemplate.id)"
      >
        <div class="link">{{ gameTemplate.id }}</div>
      </div>
    </div>

    <!-- in progress -->
    <div v-if="vxm.gamesList.activeGames.length">
      <div class="underline text-white">continue playing</div>
      <div
        v-for="liveGame in vxm.gamesList.activeGames"
        :key="liveGame.id"
        class="text-white border border-white hover:link w-full p-2"
        @click="openInProgressGame(liveGame.id)"
      >
        <div>{{ liveGame }}</div>
      </div>
    </div>

    <!-- complete -->
    <div v-if="vxm.gamesList.completedGames.length">
      <div class="underline text-white">completed games</div>
      <div
        v-for="gameTemplate in vxm.gamesList.activeGames"
        :key="gameTemplate.id"
        class="text-white border border-white hover:link w-full p-2"
      >
        <div>{{ gameTemplate.id }}</div>
      </div>
    </div>
  </div>
</template>
