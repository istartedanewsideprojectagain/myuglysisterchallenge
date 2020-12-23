<template>
  <article :class="'bg-' + color + ' w-full h-screen grid grid-cols-1 grid-rows-3 gap-5'">
    <div class="question-label center-center row-start-1 row-end-3">
      <p>{{ question.label }}</p>
    </div>
    <div class="question-buttons row-start-3 grid grid-cols-2 gap-5">
      <button class="btn btn-choice hover:bg-darkBlue" v-for="(choice,i) in question.choices" :key="i" @click.prevent="answer(choice)">
        {{ choice }}
      </button>
    </div>
    <transition name="fade">
      <CorrectAnswer v-show="isCorrect !== null && isCorrect"/>
    </transition>
    <transition name="fade">
      <WrongAnswer v-show="isCorrect !== null && !isCorrect"/>
    </transition>
  </article>
</template>

<script>
import CorrectAnswer from "@/components/CorrectAnswer";
import WrongAnswer from "@/components/WrongAnswer";
export default {
  name: "Question",
  components: {WrongAnswer, CorrectAnswer},
  props: ['question','color'],
  data() {
    return {
      isCorrect : null,
    }
  },
  methods: {
    answer(value){
      this.isCorrect = (value === this.question.correctAnswer);
      setTimeout(() => {
        this.isCorrect=null;
        this.$parent.nextQuestion();
      }, 2000)
    },
  },
}
</script>

<style scoped>
.question-label{
  @apply text-4xl font-bold;
}
.question-buttons{
  @apply bottom-0 w-full bg-elevation-2 py-10 px-5;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
