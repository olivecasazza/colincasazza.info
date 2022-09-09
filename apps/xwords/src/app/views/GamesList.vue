<script lang="ts">
import { vxm } from '@app/store';
import { GameStatus } from '@app/utils/game';
import { IGameTemplateDbo } from '@app/utils/gameTemplate';
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {},
})
export default class GamesList extends Vue {
  get vxm() {
    return vxm;
  }

  get availableGameTemplates(): IGameTemplateDbo[] {
    return vxm.gamesList.gameTemplates.filter((gt) =>
      vxm.gamesList.activeGames.map((ag) => ag.id).includes(gt.id)
    );
  }

  get inProgressGames() {
    return vxm.gamesList.activeGames.filter(
      (g) => g.status == GameStatus.IN_PROGRESS
    );
  }

  get completedGames() {
    return vxm.gamesList.activeGames.filter(
      (g) => g.status == GameStatus.COMPLETED
    );
  }

  get isLoaded(): boolean {
    return (
      !!vxm.gamesList.gameTemplates.length && !!vxm.gamesList.activeGames.length
    );
  }

  created() {
    console.log(vxm.gamesList.gameTemplates);
    console.log(vxm.gamesList.activeGames);
  }

  async beginUnstartedGame(gameTemplateId: string) {
    await vxm.gamesList.beginUnstartedGame({
      gameTemplateId,
      liveGameOwnerId: 'DefaultUser',
    });
  }

  async openInProgressGame(liveGameId: string) {
    await vxm.gamesList.openInProgressGame({ liveGameId });
  }
}
</script>

<template>
  <div class="w-full h-full">
    <!-- not started -->
    <div v-if="isLoaded">
      <div class="underline text-white">start new game</div>
      <div
        v-for="gameTemplate in availableGameTemplates"
        :key="gameTemplate.id"
        class="border border-white w-full p-2"
        @click="beginUnstartedGame(gameTemplate.id)"
      >
        <div class="link">{{ gameTemplate.id }}</div>
      </div>
    </div>

    <!-- in progress -->
    <div v-if="isLoaded">
      <div class="underline text-white">continue playing</div>
      <div
        v-for="liveGame in vxm.gamesList.activeGames"
        :key="liveGame.id"
        class="border border-white w-full p-2"
        @click="openInProgressGame(liveGame.id)"
      >
        <div class="link">{{ liveGame }}</div>
      </div>
    </div>

    <!-- complete -->
    <div v-if="isLoaded">
      <div class="underline text-white">completed games</div>
      <div
        v-for="gameTemplate in completedGames"
        :key="gameTemplate.id"
        class="border border-white w-full p-2"
      >
        <div>{{ gameTemplate.id }}</div>
      </div>
    </div>
  </div>
</template>
