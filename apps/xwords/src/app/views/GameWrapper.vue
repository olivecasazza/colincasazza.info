<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import GameBoard from './GameBoard.vue';
import QuestionsList from './QuestionsList.vue';
@Options({
  components: {
    GameBoard,
    QuestionsList,
  },
})
export default class GameWrapper extends Vue {}
</script>

<template>
  <div class="w-full h-full">
    <GameBoard />
    <QuestionsList />
  </div>
</template>
