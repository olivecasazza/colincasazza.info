<script lang="ts">
import { vxm } from '@app/store';
import { Options, Vue } from 'vue-class-component';

@Options({
  inheritAttrs: false,
})
export default class GameBoard extends Vue {
  get boardColumns(): number[] {
    return [...Array(vxm.activeGame.boardSize.y).keys()];
  }

  get boardRows(): number[] {
    return [...Array(vxm.activeGame.boardSize.x).keys()];
  }

  get vxm() {
    return vxm;
  }

  getClass(x: number, y: number): string {
    let c = 'box';
    if (this.isLetter(x, y)) c = 'letter-box';
    return c;
  }

  isLetter(x: number, y: number): boolean {
    return this.vxm.activeGame.gameBoard[y][x] != 'none';
  }

  async onClick(x: number, y: number) {
    await vxm.activeGame.selectCoordinates({
      coordinates: { x, y },
    });
  }
}
</script>

<template>
  <div class="flex flex-col">
    <div v-for="y of boardColumns" :key="y" class="flex flex-row m-1">
      <div
        v-for="x of boardRows"
        :key="x"
        :class="getClass(x, y)"
        @click="onClick(x, y)"
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
