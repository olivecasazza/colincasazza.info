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
    const activeGameIds = vxm.gamesList.activeGames.map((ag) => ag.id);
    return vxm.gamesList.gameTemplates.filter((gt) =>
      activeGameIds.includes(gt.id)
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

  async created() {
    await vxm.gamesList.load();
  }

  async beginUnstartedGame(gameTemplateId: string) {
    const newActiveGame = await vxm.gamesList.beginUnstartedGame({
      gameTemplateId,
      liveGameOwnerId: 'DefaultUser',
    });
    await this.$router.push({ name: 'game', params: { id: newActiveGame.id } });
  }

  async openInProgressGame(activeGameId: string) {
    await vxm.activeGame.load({
      ownerId: 'DefaultUser',
      activeGameId,
    });
    await this.$router.push({ name: 'game', params: { id: activeGameId } });
  }
}
</script>

<template>
  <div v-if="vxm.gamesList.isLoaded" class="w-full h-full">
    <!-- not started -->
    <div v-if="availableGameTemplates.length">
      <div class="underline text-white">start new game</div>
      <div
        v-for="gameTemplate in availableGameTemplates"
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
    <div v-if="completedGames.length">
      <div class="underline text-white">completed games</div>
      <div
        v-for="gameTemplate in completedGames"
        :key="gameTemplate.id"
        class="text-white border border-white hover:link w-full p-2"
      >
        <div>{{ gameTemplate.id }}</div>
      </div>
    </div>
  </div>
</template>
