<script lang="ts">
import { vxm } from '@app/store';
import { QuestionDirection } from '@app/utils/game/question';
import { Options, Vue } from 'vue-class-component';
import { useRoute } from 'vue-router';
import GameBoard from './GameBoard.vue';
import QuestionsList from './QuestionsList.vue';
@Options({
  components: {
    GameBoard,
    QuestionsList,
  },
})
export default class GameWrapper extends Vue {
  route = useRoute()

  get vxm() {
    return vxm;
  }

  get activeGameId(): string {
    return this.$route.params.id as string;
  }

  async mounted(): Promise<void> {
    const activeGameId = this.route.params.id as string;
    await vxm.activeGame.load({
      activeGameId,
      ownerId: "DefaultUser"
    });
  }
  
  async beforeUnmount(): Promise<void> {
    await vxm.activeGame.unload();
  }
}
</script>

<template>
  <div v-if="vxm.activeGame.isLoaded" class="w-full h-full">
    <GameBoard />
    <QuestionsList :questions="vxm.activeGame.downQuestions" :direction="'ACROSS'" />
    <QuestionsList :questions="vxm.activeGame.acrossQuestions" :direction="'DOWN'" />
  </div>
</template>
