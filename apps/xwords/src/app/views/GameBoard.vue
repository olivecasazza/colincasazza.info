<script lang="ts">
import { vxm } from '@app/store';
import { Question } from '@app/utils/question';
import { ICoordinates } from '@app/utils/utils';
import { Options, Vue } from 'vue-class-component';

@Options({
  inheritAttrs: false,
})
export default class GameBoard extends Vue {

  get vxm() {
    return vxm;
  }

  get boardSize(): ICoordinates {
    return vxm.activeGame.game.boardSize || { x: 0, y: 0 };
  }

  getClass(coordinates: ICoordinates): string {
    const selectedQuestions = vxm.activeGame.selectedQuestions;
    if (!this.isLetter(coordinates)) return 'box';
    else {
      if (selectedQuestions.length == 0) return 'letter-box';
      else {
        const correspondingQuestions = vxm.activeGame.game.questions.filter(
          (q: Question) => q.containsCoordinates(coordinates)
        );
        console.log(correspondingQuestions);
        return 'letter-box';
      }
    }
  }

  isLetter(coordinates: ICoordinates): boolean {
    const { x, y } = coordinates;
    return this.vxm.activeGame.gameBoard[y][x] != 'none';
  }

  async onClick(coordinates: ICoordinates) {
    await vxm.activeGame.selectCoordinates({
      coordinates,
    });
  }
}
</script>

<template>
  <div v-if="vxm.activeGame.isLoaded" class="flex flex-col">
    <div v-for="y of boardSize.y" :key="y" class="flex flex-row m-1">
      <div
        v-for="x of boardSize.x"
        :key="x"
        :class="getClass({ x, y })"
        @click="onClick({ x, y })"
      ></div>
    </div>
  </div>
</template>

<style>
.box {
  @apply pl-1 pr-1 bg-black w-20 h-20 border border-white;
}

.letter-box {
  @apply pl-1 pr-1 bg-white w-20 h-20 border border-black hover:border-red-500;
}
.letter-box::hover {
  @apply border border-red-400;
}
</style>
