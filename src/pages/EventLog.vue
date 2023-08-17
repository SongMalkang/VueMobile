<template>
  <div>
    <AppHeader />
    <div class="Container">
      <PrevButtons class="absolute left-2 top-14" @click="goBack"/>
      <div class="flex flex-row mt-14 bg-sky-600 text-white w-[96vw] h-[4vh] text-lg font-bold justify-center items-center text-center rounded-xl">알람 내용</div>
      <table class="w-[96vw] mt-2 bg-zinc-200 border-[1px] text-black border-zinc-400 mb-10 text-[3.5vw]">
        <thead>
          <th class="px-1 border-[2px] border-zinc-300 bg-zinc-200 w-[18vw]">발생 시각</th>
          <th class="px-1 border-[2px] border-zinc-300 bg-zinc-200 ">장비</th>
          <th class="px-1 border-[2px] border-zinc-300 bg-zinc-200 ">호선</th>
          <th class="px-1 border-[2px] border-zinc-300 bg-zinc-200 w-[35vw]">위치</th>
          <th class="px-1 border-[2px] border-zinc-300 bg-zinc-200 ">가스</th>
          <th class="px-1 border-[2px] border-zinc-300 bg-zinc-200 ">조치</th>
        </thead>
        <tbody class="bg-zinc-100">
          <tr class="border-y-2 text-[3vw]">
            <td class="py-2 border-2 border-zinc-300">23.06.20 <br /> 13:20</td>
            <td class="py-2 border-2 border-zinc-300">E0001</td>
            <td class="py-2 border-2 border-zinc-300">3291</td>
            <td class="py-2 border-2 border-zinc-300">E/R M/E L.O.WUMP TK <br /> No.1 LFO S.V.T</td>
            <td class="py-2 border-2 border-zinc-300">OK</td>
            <td class="py-2 border-2 border-zinc-300">( O )</td>
          </tr>
          <tr class="border-y-2 text-red-600 font-bold text-[3vw]">
            <td class="py-2 border-2 border-zinc-300">23.06.20 <br /> 13:20</td>
            <td class="py-2 border-2 border-zinc-300">E0001</td>
            <td class="py-2 border-2 border-zinc-300">3291</td>
            <td class="py-2 border-2 border-zinc-300">E/R M/E L.O.WUMP TK <br /> No.1 LFO S.V.T</td>
            <td class="py-2 border-2 border-zinc-300">OK</td>
            <td class="py-2 border-2 border-zinc-300">( X )</td>
          </tr>
          <tr class="border-y-2 text-[3vw]">
            <td class="py-2 border-2 border-zinc-300">23.06.20 <br /> 13:20</td>
            <td class="py-2 border-2 border-zinc-300">E0001</td>
            <td class="py-2 border-2 border-zinc-300">3291</td>
            <td class="py-2 border-2 border-zinc-300">E/R M/E L.O.WUMP TK <br /> No.1 LFO S.V.T</td>
            <td class="py-2 border-2 border-zinc-300">OK</td>
            <td class="py-2 border-2 border-zinc-300">( O )</td>
          </tr>
          <tr class="border-y-2 text-[3vw]">
            <td class="py-2 border-2 border-zinc-300">23.06.20 <br /> 13:20</td>
            <td class="py-2 border-2 border-zinc-300">E0001</td>
            <td class="py-2 border-2 border-zinc-300">3291</td>
            <td class="py-2 border-2 border-zinc-300">E/R M/E L.O.WUMP TK <br /> No.1 LFO S.V.T</td>
            <td class="py-2 border-2 border-zinc-300">OK</td>
            <td class="py-2 border-2 border-zinc-300">( O )</td>
          </tr>
        </tbody>
      </table>

      <div class="">
        <div class="flex flex-row justify-items-center bg-sky-600 text-white w-[96vw] h-[4vh] text-lg font-bold justify-center text-center rounded-xl">조치 내용</div>
        <table class="w-[96vw] mt-2 bg-sky-600 border-[1px] border-zinc-400">
          <thead>
            <th class="py-2">구분</th>
            <th class="py-2">내용</th>
          </thead>
          <tbody class="bg-zinc-100 text-black">
            <tr>
              <td class="h-[5vh] border-2 border-zinc-300">성명</td>
              <td class="h-[5vh] border-2 border-zinc-300">홍길동</td>
            </tr>
            <tr>
              <td class="h-[5vh] border-2 border-zinc-300">사번</td>
              <td class="h-[5vh] border-2 border-zinc-300">BP20000</td>
            </tr>
            <tr>
              <td class="h-[5vh] border-2 border-zinc-300">소속</td>
              <td class="h-[5vh] border-2 border-zinc-300">건조1부</td>
            </tr>
            <tr>
              <td class="h-[5vh] border-2 border-zinc-300">조치 사항</td>
              <td class="h-[5vh] w-[75vw] text-sm border-2 border-zinc-300">현장 환기 수행 및 재 측정 후 작업자 진입</td>
            </tr>
          </tbody>
        </table>

        <FullButtons>
          <span>현장 조치 등록</span>
        </FullButtons>
      </div>

    </div>
  </div>
</template>

<script>
import AppHeader from '../components/AppHeader.vue';
import PrevButtons from '../components/PrevButtons.vue';
import FullButtons from '../components/FullButtons.vue';

  export default {
    components: { AppHeader, PrevButtons, FullButtons },
    methods: {
      goBack() {
        this.$router.go(-1)
      },
    },
  }

</script>

<style lang="scss" scoped>
.Container {
  display: flex;
  flex-direction: column;
  
  width: 100vw;
  height: 95vh;

  justify-items: center;
  align-items: center;
}

</style>