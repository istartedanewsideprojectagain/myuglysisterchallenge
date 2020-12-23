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
  </article>
</template>

<script>
export default {
  name: "Question",
  props: ['question','color'],
  methods: {
    answer(value){
      if(value === this.question.correctAnswer){
        console.log('ok')
      }else{
        console.log('pas ok')
      }

      this.$parent.nextQuestion();
    },
  },
}
</script>

<style scoped>
.question-label{
  @apply text-4xl font-bold;
}
.question-buttons{
  @apply bottom-0 w-full bg-elevation-3 py-10 px-5;
}

</style>
