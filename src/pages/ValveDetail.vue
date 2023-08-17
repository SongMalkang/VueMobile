<template lang="">
  <div>
    <AppHeader />
    <div class="flex flex-col h-[95vh]">
      <PrevButtons class="flex ml-[3vw] my-[1.5vh]" @click="goBack"/>
      <HalfSelectBox class="ml-[3vw] mb-[2vh]">
        <option value="A" selected>전체 도크</option>
        <option value="1">1도크</option>
        <option value="2">2도크</option>
        <option value="3">3도크</option>
        <option value="4">4도크</option>
        <option value="5">5도크</option>
        <option value="8">8도크</option>
        <option value="9">9도크</option>
        <option value="H">H도크</option>
      </HalfSelectBox>

      <div class="overflow-y-scroll">
        <table class="table-auto w-[96vw] ml-[2vw] overflow-y-scroll mt-3 text-[3vw] text-black">
          <thead class="h-[4vh]">
            <th class="px-1 border-y-2 border-sky-900 bg-zinc-200 text-[3.5vw] w-3/24">장비번호</th>
            <th class="px-1 border-y-2 border-sky-900 bg-zinc-200 text-[3.5vw] w-1/12">도크</th>
            <th class="px-1 border-y-2 border-sky-900 bg-zinc-200 text-[3.5vw] w-1/12">구역</th>
            <th class="px-1 border-y-2 border-sky-900 bg-zinc-200 text-[3.5vw] w-1/12">지번</th>
            <th class="px-1 border-y-2 border-sky-900 bg-zinc-200 text-[3.5vw] w-1/12">산소</th>
            <th class="px-1 border-y-2 border-sky-900 bg-zinc-200 text-[3.5vw] w-3/24">에틸렌</th>
            <th class="px-1 border-y-2 border-sky-900 bg-zinc-200 text-[3.5vw] w-1/12">상태</th>
            <th class="px-1 border-y-2 border-sky-900 bg-zinc-200 text-[3.5vw] w-6/24">수신 시각</th>
          </thead>
          <tbody class="border-y-2">
            <tr>
              <td class="py-3 border-y-2">N0002</td>
              <td class="py-3 border-y-2">D8</td>
              <td class="py-3 border-y-2">서편</td>
              <td class="py-3 border-y-2">45</td>
              <td class="py-3 border-y-2">열림</td>
              <td class="py-3 border-y-2">닫힘</td>
              <td class="py-3 border-y-2">정상</td>
              <td class="py-3 border-y-2">23-08-09 09:09:09</td>
            </tr>
            <tr>
              <td class="py-3 border-y-2">N0002</td>
              <td class="py-3 border-y-2">D8</td>
              <td class="py-3 border-y-2">서편</td>
              <td class="py-3 border-y-2">45</td>
              <td class="py-3 border-y-2">열림</td>
              <td class="py-3 border-y-2">닫힘</td>
              <td class="py-3 border-y-2">정상</td>
              <td class="py-3 border-y-2">23-08-09 09:09:09</td>
            </tr>
            <tr>
              <td class="py-3 border-y-2">N0002</td>
              <td class="py-3 border-y-2">D8</td>
              <td class="py-3 border-y-2">서편</td>
              <td class="py-3 border-y-2">45</td>
              <td class="py-3 border-y-2">열림</td>
              <td class="py-3 border-y-2">닫힘</td>
              <td class="py-3 border-y-2">정상</td>
              <td class="py-3 border-y-2">23-08-09 09:09:09</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from '../components/AppHeader.vue';
import HalfSelectBox from '../components/HalfSelectBox.vue';
import PrevButtons from '../components/PrevButtons.vue';

export default {
  components: {
    AppHeader,
    PrevButtons,
    HalfSelectBox,
  },
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
  beforeDestroy() {
    
  },
}
</script>

<style lang="">
  
</style>