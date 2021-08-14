<template>
<main class="min-h-screen bg-gray-900 flex">
  <p class="text-white text-center text-lg m-auto">Word count is <span class="block text-5xl my-4">{{ wc }}</span> out of a total of <span class="block text-5xl my-4">{{ totalWords }}</span></p>
</main>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      wc: '¯\\_(ツ)_/¯',
      totalWords: '¯\\_(ツ)_/¯',
    };
  },
  async created() {
    let res;
    try {
      res = await axios.get("https://wonderful-progress-ahead.netlify.app/.netlify/functions/progress");
    } catch (err) {
      // handle error
      return;
    }
    this.wc = res.data.wc.toLocaleString();
    this.totalWords = res.data.totalWords.toLocaleString();
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap');
</style>