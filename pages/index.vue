<template>
  <h1>Word count is {{ wc }} out of a total of {{ totalWords }}</h1>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      wc: 0,
      totalWords: 0,
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
    this.wc = res.data.wc;
    this.totalWords = res.data.totalWords;
  }
}
</script>
