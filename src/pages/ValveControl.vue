<template>
  <div class="w-[100vw] h-[100vh] flex flex-col">
    <AppHeader>
      <span>밸브 원격 제어</span>
    </AppHeader>

    <div class="flex flex-row justify-between mx-[5vw] py-[2vh]">
      <PrevButtons @click="goBack" />
      <HalfSelectBox>
        <option>전체 Dock</option>
        <option>1도크</option>
        <option>2도크</option>
        <option>3도크</option>
        <option>4도크</option>
        <option>5도크</option>
        <option>8도크</option>
        <option>9도크</option>
        <option>H도크</option>
      </HalfSelectBox>
      <div class="bg-sky-600 text-white font-bold text-[4vw] rounded-xl grid place-items-center">
        <span class="px-[4vw]">조회</span>
      </div>
    </div>

    <div class="overflow-y-scroll h-[85vh] overflow-x-hidden">
      <table class="table table-auto mx-[4vw] w-[92vw] bg-black">
        <thead>
          <tr class="w-full text-white font-bold">
            <td class="w-3/24 bg-sky-600 border-[1px] border-sky-700 py-2">장치</td>
            <td class="w-9/24 bg-sky-600 border-[1px] border-sky-700 py-2">위치정보<br />(수신 시각)</td>
            <td class="w-4/24 bg-sky-600 border-[1px] border-sky-700 py-2">산소<br />상태</td>
            <td class="w-4/24 bg-sky-600 border-[1px] border-sky-700 py-2">에틸렌<br />상태</td>
            <td class="w-4/24 bg-red-600 border-[1px] border-red-700 py-2">밸브<br />제어</td>
          </tr>
        </thead>
        <tbody>
          <tr class="">
            <td class="py-[1vh] border-[1px] bg-zinc-50">N0001</td>
            <td class="py-[1vh] border-[1px] bg-zinc-50">8도크 - E37<br />23.08.22 14:00</td>
            <td class="py-[1vh] border-[1px] bg-zinc-50 font-bold">열림</td>
            <td class="py-[1vh] border-[1px] bg-zinc-50 font-bold">닫힘</td>
            <td class="py-[1vh] border-[1px] bg-zinc-200 font-bold">클릭</td>
          </tr>
          <tr class="">
            <td class="py-[1vh] border-[1px] bg-zinc-50">N0001</td>
            <td class="py-[1vh] border-[1px] bg-zinc-50">8도크 - E37<br />23.08.22 14:00</td>
            <td class="py-[1vh] border-[1px] bg-zinc-50 font-bold">열림</td>
            <td class="py-[1vh] border-[1px] bg-zinc-50 font-bold">닫힘</td>
            <td class="py-[1vh] border-[1px] bg-zinc-50 font-bold">클릭</td>
          </tr>
          <tr class="">
            <td class="py-[1vh] border-[1px] bg-zinc-50">N0001</td>
            <td class="py-[1vh] border-[1px] bg-zinc-50">8도크 - E37<br />23.08.22 14:00</td>
            <td class="py-[1vh] border-[1px] bg-zinc-50 font-bold">열림</td>
            <td class="py-[1vh] border-[1px] bg-zinc-50 font-bold">닫힘</td>
            <td class="py-[1vh] border-[1px] bg-zinc-50 font-bold">클릭</td>
          </tr>
          <tr class="">
            <td class="py-[1vh] border-[1px] bg-zinc-50">N0001</td>
            <td class="py-[1vh] border-[1px] bg-zinc-50">8도크 - E37<br />23.08.22 14:00</td>
            <td class="py-[1vh] border-[1px] bg-zinc-50 font-bold">열림</td>
            <td class="py-[1vh] border-[1px] bg-zinc-50 font-bold">닫힘</td>
            <td class="py-[1vh] border-[1px] bg-zinc-50 font-bold">클릭</td>
          </tr>
          <tr class="">
            <td class="py-[1vh] border-[1px] bg-zinc-50">N0001</td>
            <td class="py-[1vh] border-[1px] bg-zinc-50">8도크 - E37<br />23.08.22 14:00</td>
            <td class="py-[1vh] border-[1px] bg-zinc-50 font-bold">열림</td>
            <td class="py-[1vh] border-[1px] bg-zinc-50 font-bold">닫힘</td>
            <td class="py-[1vh] border-[1px] bg-zinc-50 font-bold">클릭</td>
          </tr>
          <tr class="">
            <td class="py-[1vh] border-[1px] bg-zinc-50">N0001</td>
            <td class="py-[1vh] border-[1px] bg-zinc-50">8도크 - E37<br />23.08.22 14:00</td>
            <td class="py-[1vh] border-[1px] bg-zinc-50 font-bold">열림</td>
            <td class="py-[1vh] border-[1px] bg-zinc-50 font-bold">닫힘</td>
            <td class="py-[1vh] border-[1px] bg-zinc-50 font-bold">클릭</td>
          </tr>
          <tr class="">
            <td class="py-[1vh] border-[1px] bg-zinc-50">N0001</td>
            <td class="py-[1vh] border-[1px] bg-zinc-50">8도크 - E37<br />23.08.22 14:00</td>
            <td class="py-[1vh] border-[1px] bg-zinc-50 font-bold">열림</td>
            <td class="py-[1vh] border-[1px] bg-zinc-50 font-bold">닫힘</td>
            <td class="py-[1vh] border-[1px] bg-zinc-50 font-bold">클릭</td>
          </tr>
          <tr class="">
            <td class="py-[1vh] border-[1px] bg-zinc-50">N0001</td>
            <td class="py-[1vh] border-[1px] bg-zinc-50">8도크 - E37<br />23.08.22 14:00</td>
            <td class="py-[1vh] border-[1px] bg-zinc-50 font-bold">열림</td>
            <td class="py-[1vh] border-[1px] bg-zinc-50 font-bold">닫힘</td>
            <td class="py-[1vh] border-[1px] bg-zinc-50 font-bold">클릭</td>
          </tr>
          <tr class="">
            <td class="py-[1vh] border-[1px] bg-zinc-50">N0001</td>
            <td class="py-[1vh] border-[1px] bg-zinc-50">8도크 - E37<br />23.08.22 14:00</td>
            <td class="py-[1vh] border-[1px] bg-zinc-50 font-bold">열림</td>
            <td class="py-[1vh] border-[1px] bg-zinc-50 font-bold">닫힘</td>
            <td class="py-[1vh] border-[1px] bg-zinc-50 font-bold">클릭</td>
          </tr>
          <tr class="">
            <td class="py-[1vh] border-[1px] bg-zinc-50">N0001</td>
            <td class="py-[1vh] border-[1px] bg-zinc-50">8도크 - E37<br />23.08.22 14:00</td>
            <td class="py-[1vh] border-[1px] bg-zinc-50 font-bold">열림</td>
            <td class="py-[1vh] border-[1px] bg-zinc-50 font-bold">닫힘</td>
            <td class="py-[1vh] border-[1px] bg-zinc-50 font-bold">클릭</td>
          </tr>
          <tr class="">
            <td class="py-[1vh] border-[1px] bg-zinc-50">N0001</td>
            <td class="py-[1vh] border-[1px] bg-zinc-50">8도크 - E37<br />23.08.22 14:00</td>
            <td class="py-[1vh] border-[1px] bg-zinc-50 font-bold">열림</td>
            <td class="py-[1vh] border-[1px] bg-zinc-50 font-bold">닫힘</td>
            <td class="py-[1vh] border-[1px] bg-zinc-50 font-bold">클릭</td>
          </tr>
          <tr class="">
            <td class="py-[1vh] border-[1px] bg-zinc-50">N0001</td>
            <td class="py-[1vh] border-[1px] bg-zinc-50">8도크 - E37<br />23.08.22 14:00</td>
            <td class="py-[1vh] border-[1px] bg-zinc-50 font-bold">열림</td>
            <td class="py-[1vh] border-[1px] bg-zinc-50 font-bold">닫힘</td>
            <td class="py-[1vh] border-[1px] bg-zinc-50 font-bold">클릭</td>
          </tr>
          <tr class="">
            <td class="py-[1vh] border-[1px] bg-zinc-50">N0001</td>
            <td class="py-[1vh] border-[1px] bg-zinc-50">8도크 - E37<br />23.08.22 14:00</td>
            <td class="py-[1vh] border-[1px] bg-zinc-50 font-bold">열림</td>
            <td class="py-[1vh] border-[1px] bg-zinc-50 font-bold">닫힘</td>
            <td class="py-[1vh] border-[1px] bg-zinc-50 font-bold">클릭</td>
          </tr>
          <tr class="">
            <td class="py-[1vh] border-[1px] bg-zinc-50">N0001</td>
            <td class="py-[1vh] border-[1px] bg-zinc-50">8도크 - E37<br />23.08.22 14:00</td>
            <td class="py-[1vh] border-[1px] bg-zinc-50 font-bold">열림</td>
            <td class="py-[1vh] border-[1px] bg-zinc-50 font-bold">닫힘</td>
            <td class="py-[1vh] border-[1px] bg-zinc-50 font-bold">클릭</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import AppHeader from '../components/AppHeader.vue';
import HalfSelectBox from '../components/HalfSelectBox.vue'
import PrevButtons from '../components/PrevButtons.vue';
import ValveStatusCard from '../components/ValveStatusCard.vue';

  export default {
    components: { AppHeader, HalfSelectBox, ValveStatusCard, PrevButtons },
    data() {
      return {

      }
    },
    methods: {
      goBack() {
        this.$router.go(-1)
      },

    },
    mounted() {

    },
  }
</script>

<style lang="scss" scoped>
.Container {
  overflow : hidden;
}

.Control {
  display: flex;
}

.ValveCard {
  display: flex;
  justify-content: center;
}
</style>