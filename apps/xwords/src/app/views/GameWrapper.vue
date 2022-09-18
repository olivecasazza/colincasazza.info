<script lang="ts">
import { vxm } from '@app/store';
import { QuestionDirection } from '@app/utils/question';
import { Options, Vue } from 'vue-class-component';
import GameBoard from './GameBoard.vue';
import QuestionsList from './QuestionsList.vue';
@Options({
  components: {
    GameBoard,
    QuestionsList,
  },
})
export default class GameWrapper extends Vue {
  get vxm() {
    return vxm;
  }

  get activeGameId(): string {
    return this.$route.params.id as string;
  }

  created(): void {
    console.log(vxm.activeGame.game);
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
