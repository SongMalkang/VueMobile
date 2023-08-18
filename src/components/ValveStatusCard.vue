<template>
  <div>
    <div class="Container align-middle bg-zinc-100 w-[90vw] rounded-xl my-[2vh] overflow-hidden border-2" :class="title === '전체' ? 'h-[18vh]': 'h-[22vh]'">

      <div class="Title text-white text-lg font-bold bg-sky-600 w-[90vw] h-[5vh]">{{ title }} V/V 제어</div>

      <div v-if="title !== '전체'" class="Status mt-4 ml-[6vw] bg-zinc-300 w-[75vw] h-[6vh] rounded-full overflow-hidden">

        <div class="flex flex-row">
          <div class="flex w-[40vw] h-[8vh] bg-green-600 text-xl font-bold justify-center align-middle text-white" :class="status === '열림' ? 'bg-green-600' : 'bg-orange-600'">
            <span class="flex mt-[2.2vh] ml-[4vw] justify-center align-middle">V/V 상태</span>
          </div>
          <div class="w-[40vw] text-2xl mt-[2.0vh] font-bold" :class="status === '열림' ? 'text-green-600' : 'text-orange-600'">{{ status }}</div>
        </div>

      </div>

      <div class="flex flex-row justify-between align-middle ml-[6vw] rounded-xl w-[75vw] mt-[2vh] h-[6vh]overflow-hidden text-white font-bold text-xl" v-if="title !== '전체'" >
          <button @click="showConfirmDialog()" class="px-[13.5vw] justify-center rounded-xl align-middle flex flex-row bg-green-500">
            <span class="mt-1 font-bold">열기</span>
          </button>
          <button @click="showConfirmDialog()" class="px-[13.5vw] justify-center rounded-xl align-middle flex flex-row bg-orange-500">
            <span class="mt-1 font-bold">닫기</span>
          </button>
      </div>

      <div v-if="title === '전체'" class="flex flex-col justify-center h-[18vh] align-middle text-2xl font-bold">
        <button @click="showConfirmDialog()" class="py-2 bg-green-500 text-white font-bold">열기</button>
        <button @click="showConfirmDialog()" class="py-2 mt-[1vh] bg-orange-600 text-white font-bold">닫기</button>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  props:['title', 'status'],
  data() {
    return {
    };
  },
  method: {
    showConfirmDialog() {
      const confirmation = window.confirm('밸브를 제어하시겠습니까?');
      console.log('haha')

      if (confirmation) {
        this.registerDemolition();
          window.alert('밸브 제어신호가 정상 송신 되었습니다.');
      } else {
      }
    },
    registerDemolition() {
      console.log('Demolition registered');
    }
  }
};
</script>

<style lang="scss" scoped>
.Container {
  display: flex;
  flex-direction: column;
  position: relative;

}

.Title {
  display: flex;
  justify-content: center;
  align-items: center;
}

.Status {
  display: flex;
  flex-direction: column;
  
  justify-content: center;
  align-items: center;
}
</style>
