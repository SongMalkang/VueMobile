<template>
  <div class="justify-center">
    <AppHeader />
    <div class="Container">
      <div class="flex flex-row relative mt-[2vh]">
        <HalfSelectBox class="px-4 mr-[1.5vw]">
          <option>전체 도크</option>
          <option>1도크</option>
          <option>2도크</option>
          <option>3도크</option>
          <option>4도크</option>
          <option>5도크</option>
          <option>8도크</option>
          <option>9도크</option>
          <option>H도크</option>
        </HalfSelectBox>

        <HalfSelectBox class="px-4 ml-[1.5vw]">
          <option>전체: 설치 & 미설치</option>
          <option>설치</option>
          <option>철거</option>
          <option>고장</option>
        </HalfSelectBox>
      </div>
    </div>

    <div class="w-[94vw] h-[87vh] ml-[3vw] overflow-y-scroll">
      <table class="table-auto mt-[2vh] text-[3vw] text-black overflow-scroll">
          <thead class="">
            <th class="border-[1px] border-sky-700 py-2 bg-sky-600 text-white text-[3.5vw] w-2/12">장치ID</th>
            <th class="border-[1px] border-sky-700 py-2 bg-sky-600 text-white text-[3.5vw] w-1/12">상태</th>
            <th class="border-[1px] border-sky-700 py-2 bg-sky-600 text-white text-[3.5vw] w-1/12">위치</th>
            <th class="border-[1px] border-sky-700 py-2 bg-sky-600 text-white text-[3.5vw] w-1/12">호선</th>
            <th class="border-[1px] border-sky-700 py-2 bg-sky-600 text-white text-[3.5vw] w-5/12">상세위치</th>
            <th class="border-[1px] border-sky-700 py-2 bg-sky-600 text-white text-[3.5vw] w-1/12">정보</th>
          </thead>
          <tbody>
            <tr class="border-[1px] border-sky-700 h-[4vh]">
              <td class="py-2">F0001</td>
              <td class="py-2">설치</td>
              <td class="py-2">D8</td>
              <td class="py-2">3294</td>
              <td class="py-2">E/R M/E L.O.WUMP TK <br /> No.1 LFO S.V.T</td>
              <td class="py-2 bg-sky-600 font-bold text-white">조회</td>
            </tr>
            <tr class="border-[1px] border-sky-700 h-[4vh]">
              <td class="py-2">F0002</td>
              <td class="py-2 text-yellow-600 font-bold text-ellipsis whitespace-nowrap">미설치</td>
              <td class="py-2">D7</td>
              <td class="py-2">3291</td>
              <td class="py-2">E/R M/E L.O.WUMP TK No.3 LFO S.V.T</td>
              <td class="py-2 bg-sky-600 font-bold text-white">조회</td>
            </tr>
            <tr class="border-[1px] border-sky-700 h-[4vh]">
              <td class="py-2">F0003</td>
              <td class="py-2">설치</td>
              <td class="py-2">D8</td>
              <td class="py-2">3291</td>
              <td class="py-2">E/R M/E L.O.WUMP TK <br /> No.3 LFO S.V.T</td>
              <td class="py-2 bg-sky-600 font-bold text-white">조회</td>
            </tr>
            <tr class="border-[1px] border-sky-700">
              <td class="py-2">F0004</td>
              <td class="py-2">설치</td>
              <td class="py-2">D8</td>
              <td class="py-2">3291</td>
              <td class="py-2">E/R M/E L.O.WUMP TK No.1 LFO S.V.T</td>
              <td class="py-2 bg-sky-600 font-bold text-white">조회</td>
            </tr>
            <tr class="border-[1px] border-sky-700 h-[4vh]">
              <td class="py-2">F0001</td>
              <td class="py-2">설치</td>
              <td class="py-2">D8</td>
              <td class="py-2">3294</td>
              <td class="py-2">E/R M/E L.O.WUMP TK <br /> No.1 LFO S.V.T</td>
              <td class="py-2 bg-sky-600 font-bold text-white">조회</td>
            </tr>
            <tr class="border-[1px] border-sky-700 h-[4vh]">
              <td class="py-2">F0002</td>
              <td class="py-2">설치</td>
              <td class="py-2">D8</td>
              <td class="py-2">3291</td>
              <td class="py-2">E/R M/E L.O.WUMP TK <br /> No.3 LFO S.V.T</td>
              <td class="py-2 bg-sky-600 font-bold text-white">조회</td>
            </tr>
            <tr class="border-[1px] border-sky-700 h-[4vh]">
              <td class="py-2">F0002</td>
              <td class="py-2">설치</td>
              <td class="py-2">D8</td>
              <td class="py-2">3291</td>
              <td class="py-2">E/R M/E L.O.WUMP TK <br /> No.3 LFO S.V.T</td>
              <td class="py-2 bg-sky-600 font-bold text-white">조회</td>
            </tr>
            <tr class="border-[1px] border-sky-700">
              <td class="py-2">F0002</td>
              <td class="py-2">설치</td>
              <td class="py-2">D8</td>
              <td class="py-2">3291</td>
              <td class="py-2">E/R M/E L.O.WUMP TK <br /> No.3 LFO S.V.T</td>
              <td class="py-2 bg-sky-600 font-bold text-white">조회</td>
            </tr>
          </tbody>
        </table>
      </div>
  </div>
</template>

<script>
import HalfSelectBox from '../components/HalfSelectBox.vue';
import AppHeader from '../components/AppHeader.vue';

  export default {
    components: {
    HalfSelectBox,
    AppHeader
}
    
  }
</script>
<style lang="scss" scoped>
.Container {
  display: flex;
  justify-content: center;

  background-color: white;
}
</style>