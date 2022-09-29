<script lang="ts">
import { vxm } from '@app/store';
import { Question } from '@app/utils/game/question';
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
    const { x, y } = vxm.activeGame.boardSize;
    return { x, y };
  }

  isLetter(coordinates: ICoordinates): boolean {
    const { x, y } = coordinates;
    return this.vxm.activeGame.boardState[y][x] != 'none';
  }

  async onClick(coordinates: ICoordinates) {
    await vxm.activeGame.selectCoordinates({
      coordinates,
    });
  }

  getClass(coordinates: ICoordinates): string {
    const selectedQuestions = vxm.activeGame.selectedQuestions;
    if (!this.isLetter(coordinates)) return 'box empty';
    else {
      if (selectedQuestions.length == 0) return 'box letter';
      else {
        if (selectedQuestions.some((q) => q.containsCoordinates(coordinates)))
          return 'box selected-letter';
        return 'box letter';
      }
    }
  }
}
</script>

<template>
  <div v-if="vxm.activeGame.isLoaded" class="flex flex-col">
    <div v-for="(y, yi) of boardSize.y" :key="yi" class="flex flex-row m-1">
      <div
        v-for="(x, xi) of boardSize.x"
        :key="xi"
        :class="getClass({ x: xi, y: yi })"
        @click="onClick({ x: xi, y: yi })"
      >
        {{ vxm.activeGame.boardState[yi][xi] }}
      </div>
    </div>
  </div>
</template>

<style>
.box {
  @apply pl-1 pr-1 w-20 h-20 border;
}

.empty {
  @apply bg-black border-white;
}

.letter {
  @apply bg-white border-black hover:border-red-500;
}

.letter::hover {
  @apply border border-red-400;
}

.selected-letter {
  @apply bg-red-400;
}
</style>
