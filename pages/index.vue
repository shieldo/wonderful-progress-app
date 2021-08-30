<template>
<main class="min-h-screen bg-gray-900 flex flex-col">
  <p v-if="loaded" class="text-white text-center text-lg m-auto"><span class="block my-3 text-5xl">{{ percentComplete }}%</span> complete with <span class="block my-3 text-4xl">{{ wordsUntilNextPercent }} words</span> until the next whole percent</p>
  <p v-else class="text-white text-5xl m-auto">{{ shruggie() }}</p>
  <p class="text-white text-center text-sm m-auto">Word count is <span class="block text-2xl my-2">{{ format(wc) }}</span> out of an estimated total of <span class="block text-2xl my-2">{{ format(totalWords) }}</span></p>
</main>
</template>

<script>
import axios from 'axios';

const SHRUGGIE = '¯\\_(ツ)_/¯';

export default {
  data() {
    return {
      wc: SHRUGGIE,
      totalWords: SHRUGGIE,
    };
  },
  computed: {
    percentComplete() {
      if (!this.loaded) {
        return SHRUGGIE;
      }
      return (this.wc * 100 / this.totalWords).toFixed(1);
    },
    wordsUntilNextPercent() {
      if (!this.loaded) {
        return SHRUGGIE;
      }
      return Math.trunc(Math.ceil(this.percentComplete) / 100 * this.totalWords) - this.wc;
    },
    loaded() {
      return Number.isInteger(this.wc);
    },
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
  },
  methods: {
    shruggie: () => SHRUGGIE,
    format: (number) => number !== SHRUGGIE ? number.toLocaleString() : number,
  },
}
</script>
