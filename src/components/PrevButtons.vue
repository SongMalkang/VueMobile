<template>
  <button class="flex flex-row rounded-2xl bg-sky-600 w-[20vw] text-white font-bold h-[4vh] justify-center items-center text-center">
    <ChevronLeftIcon class="w-[5vw]" />
    <span>Prev</span>
  </button>
</template>


<script>
import { ChevronLeftIcon } from '@heroicons/vue/24/solid'
  export default {
    components: {
      ChevronLeftIcon
    },
  }
</script>

<style lang="scss" scoped>

</style>