<template>
  <div>

    <div id="gascard" class="bg-zinc-100 w-[90vw] h-[20vh] my-4 rounded-xl flex flex-row drop-shadow-xl overflow-hidden justify-between">

      <div class="ml-4 flex flex-col w-[20vw] h-[20vh] justify-center">
        <span class="flex align-middle justify-center font-bold text-2xl" :class="title === '정상' ? 'text-green-600' : title === '경고' ? 'text-yellow-600' : 'text-red-600'">{{ title }}</span>
        <HandThumbUpIcon v-show="title === '정상'" :class="themeColor" />
        <ExclamationTriangleIcon v-show="title === '경고'" :class="themeColor" />
        <ExclamationCircleIcon v-show="title === '위험'" :class="themeColor" />
      </div>

      <div class="flex flex-col ml-4 h-[20vh] align-middle justify-center">
        <span class="flex flex-col w-[20vw] h-[9vh] rounded-2xl px-3 font-bold text-2xl text-white align-middle justify-center" 
              :class="title === '정상' ? 'bg-green-600' : title === '경고' ? 'bg-yellow-600' : 'bg-red-600'">{{ total }}</span>
      </div>

      <div class="ml-4 flex flex-col w-[30vw] text-left px-4 font-bold text-lg align-middle justify-center">
        <span class="py-2 text-zinc-600 text-[2vh]">흡입식: {{ calPump }}</span>
        <span class="py-2 text-zinc-600 text-[2vh]">확산식: {{ calAir }}</span>
      </div>
      
    </div>

  </div>
</template>

<script>

import { HandThumbUpIcon, ExclamationTriangleIcon, ExclamationCircleIcon } from '@heroicons/vue/24/solid'

  export default {
    components: { HandThumbUpIcon, ExclamationTriangleIcon, ExclamationCircleIcon },
    props: ['title', 'total', 'calAir', 'calPump', 'themeColor'],
    data() {
      return {
      }
    },
  }

</script>

<style lang="scss" scoped>

</style>
