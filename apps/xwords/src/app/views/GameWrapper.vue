<script lang="ts">
import { vxm } from '@app/store';
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
  get vxm() { return vxm }
}
</script>

<template>
  <div v-if="vxm.activeGame.isLoaded" class="w-full h-full">
    <GameBoard />
    <QuestionsList />
  </div>
</template>
