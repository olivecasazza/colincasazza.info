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
  <div class="border border-white p-1">
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
        <div class="w-5 border border-white">
          {{ question.number }}
        </div>
        <div class="flex-grow border border-white">
          <div class="flex-col w-full">
            <div>{{ question.question }}</div>
            <div class="flex-row">
              <input
                v-for="qi of question.answerMap.size"
                :key="qi"
                :autofocus="qi === 0 ? 'true' : 'false'"
                maxlength="1"
                name=""
                class="text-black w-20 h-20 border border-r-0 border-black"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- unselected question -->
      <div v-else class="flex flex-row question hover:link">
        <div class="w-5 border border-white">
          {{ question.number }}
        </div>
        <div class="flex-grow border border-white">
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
