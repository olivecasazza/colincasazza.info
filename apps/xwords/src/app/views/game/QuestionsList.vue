<script lang="ts">
import { vxm } from '@app/store';
import { Question, QuestionDirection } from '@app/utils/game/question';
import { Vue } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

export default class QuestionsList extends Vue {
  @Prop({ required: true, type: Object }) questions!: Question[];
  @Prop({ required: true, type: String }) direction!: QuestionDirection;

  get vxm() {
    return vxm;
  }

  selectQuestion(selectedQuestion: Question) {
    vxm.activeGame.selectedQuestions = [selectedQuestion];
  }

  isQuestionSelected(question: Question) {
    if (!vxm.activeGame.selectedQuestions.length) return false;
    return vxm.activeGame.selectedQuestions.some((q) => q.id === question.id);
  }
}
</script>

<template>
  <div class="app-view-port">
    <div class="text-white text-lg">
      {{ direction }}
    </div>
    <div
      v-for="question of questions"
      :key="question.number"
      class=""
      @click="selectQuestion(question)"
    >
      <!-- selected question -->
      <div
        v-if="isQuestionSelected(question)"
        class="flex flex-row question hover:link"
      >
        <div class="max-w-min p-1 border border-primary-500">
          {{ question.number }}
        </div>
        <div class="flex-grow">
          <div class="flex-col w-full">
            <div>{{ question.question }}</div>
            <div class="flex-row">
              <input
                v-for="qi of question.answerMap.size"
                :key="qi"
                maxlength="1"
                name=""
                class="text-black w-6 h-6 border border-r-0 border-black"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- unselected question -->
      <div v-else class="flex flex-row question hover:link">
        <div class="max-w-min p-1 border border-primary-500">
          {{ question.number }}
        </div>
        <div class="flex-grow">
          {{ question.question }}
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.question {
  @apply text-white border border-white;
}

.selected {
  @apply bg-red-400;
}
</style>
