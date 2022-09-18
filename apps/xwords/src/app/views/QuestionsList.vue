<script lang="ts">
import { vxm } from '@app/store';
import { IQuestion, QuestionDirection } from '@app/utils/question';
import { Vue } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

export default class QuestionsList extends Vue {
  @Prop({ required: true, type: Object }) questions!: IQuestion[];
  @Prop({ required: true, type: String }) direction!: QuestionDirection;

  get vxm() {
    return vxm;
  }

  selectQuestion(selectedQuestion: IQuestion) {
    console.log(selectedQuestion);
  }
}
</script>

<template>
  <div class="border border-white p-1">
    <div class="text-white text-lg">{{ direction }}</div>
    <div
      v-for="question of questions"
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
