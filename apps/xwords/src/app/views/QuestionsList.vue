<script lang="ts">
import { vxm } from '@app/store';
import { IQuestion, IQuestionDirectionEnum } from '@app/utils/question';
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {},
})
export default class QuestionsList extends Vue {
  get vxm() {
    return vxm;
  }

  get acrossQuestions(): IQuestion[] {
    return vxm.activeGame.game.questions.filter(
      (q) => q.direction == IQuestionDirectionEnum.ACROSS
    );
  }

  get downQuestions(): IQuestion[] {
    return vxm.activeGame.game.questions.filter(
      (q) => q.direction == IQuestionDirectionEnum.ACROSS
    );
  }

  selectQuestion(selectedQuestion: IQuestion) {
    console.log(selectedQuestion);
  }
}
</script>

<template>
  <div class="w-full h-full">
    <div class="text-white text-lg">down</div>
    <div
      v-for="question in vxm.activeGame.acrossQuestions"
      :key="question.number"
      class="question hover:link"
      @click="selectQuestion(question)"
    >
      <div class="flex flex-row">
        <div class="w-5 border border-white">{{ question.number }}</div>
        <div class="flex-grow border border-white">{{ question.question }}</div>
      </div>
    </div>

    <div class="text-white text-lg">across</div>
    <div
      v-for="question in vxm.activeGame.downQuestions"
      :key="question.number"
      class="question hover:link"
      @click="selectQuestion(question)"
    >
      <div class="flex flex-row">
        <div class="w-5 border border-white">{{ question.number }}</div>
        <div class="flex-grow border border-white">{{ question.question }}</div>
      </div>
    </div>
  </div>
</template>

<style>
.question {
  @apply text-white border border-white;
}
</style>
