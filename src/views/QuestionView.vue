<template>
  <main class="flex flex-col flex-wrap">
    <Question class="absolute top-0" :question="currentQuestion" :color="colorList[getRandomColor()]"/>
  </main>
</template>

<script>

import Question from "@/components/Question";

const colorList = ['red','yellow','blue','orange','green'];
export default {
  name: 'Home',
  components: {Question},
  data: () => {
    return {
      currentQuestionIndex: 0,
      colorList : ['red','yellow','orange','green'],
      questions: [{
        label: 'Oui ou non ?',
        choices: ['oui','non','oui','non'],
        correctAnswer : 'oui',
      },
      {
        label: 'Question 2 ?',
        choices: ['oui','non'],
        correctAnswer : 'oui',
      }],
    }
  },
  methods: {
    getRandomColor(){
      return Math.floor(Math.random() * colorList.length);
    },
    nextQuestion(){
      this.currentQuestionIndex += 1;
    },
  },
  computed: {
    currentQuestion() {
      return this.questions[this.currentQuestionIndex];
    }
  }
};
</script>

<style>
</style>
