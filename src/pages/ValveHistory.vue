<template>
  <div class="h-[100vh] bg-white text-black">
    <AppHeader />
    <div class="flex flex-row relative mt-[3vh] ml-[6vw]">
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
        <option>장치 구분</option>
        <option>상태: 정상</option>
        <option>상태: 경고</option>
        <option>상태: 위험</option>
      </HalfSelectBox>
    </div>

    <HalfSelectBox class="px-4 ml-[6vw] my-[2vh]">
      <option @click="popup=true">기간 설정</option>
    </HalfSelectBox>

    <div class="overflow-y-scroll">
      <table class="w-[96vw] mt-2 ml-[2vw] bg-zinc-200 border-[1px] border-zinc-400 mb-10">
        <thead class="text-white">
          <th class="px-1 py-1 border-[1px] border-sky-700 font-bold bg-sky-600 w-[18vw]">일시</th>
          <th class="px-1 py-1 border-[1px] border-sky-700 font-bold bg-sky-600 ">장비<br />번호</th>
          <th class="px-1 py-1 border-[1px] border-sky-700 font-bold bg-sky-600 ">도크</th>
          <th class="px-1 py-1 border-[1px] border-sky-700 font-bold bg-sky-600 ">구역</th>
          <th class="px-1 py-1 border-[1px] border-sky-700 font-bold bg-sky-600 ">지번</th>
          <th class="px-1 py-1 border-[1px] border-sky-700 font-bold bg-sky-600 ">제어<br />구분</th>
          <th class="px-1 py-1 border-[1px] border-sky-700 font-bold bg-sky-600 ">이력</th>
          <th class="px-1 py-1 border-[1px] border-sky-700 font-bold bg-sky-600 ">제어자</th>
        </thead>
        <tbody class="bg-zinc-100">
          <tr class="border-y-2">
            <td class="text-[3.5vw] py-2 border-[1px] border-zinc-300">23.06.20 <br /> 13:20:00</td>
            <td class="text-[3.5vw] py-2 border-[1px] border-zinc-300">E0001</td>
            <td class="text-[3.5vw] py-2 border-[1px] border-zinc-300">8D</td>
            <td class="text-[3.5vw] py-2 border-[1px] border-zinc-300">서편</td>
            <td class="text-[3.5vw] py-2 border-[1px] border-zinc-300">45</td>
            <td class="text-[3.5vw] py-2 border-[1px] border-zinc-300">예약</td>
            <td class="text-[3.5vw] py-2 border-[1px] border-zinc-300">산소 <br />열림</td>
            <td class="text-[3.5vw] py-2 border-[1px] border-zinc-300">건조3부 <br />홍길동</td>
          </tr>
          <tr class="border-y-2">
            <td class="text-[3.5vw] py-2 border-[1px] border-zinc-300">23.06.20 <br /> 13:21:00</td>
            <td class="text-[3.5vw] py-2 border-[1px] border-zinc-300">E0002</td>
            <td class="text-[3.5vw] py-2 border-[1px] border-zinc-300">8D</td>
            <td class="text-[3.5vw] py-2 border-[1px] border-zinc-300">서편</td>
            <td class="text-[3.5vw] py-2 border-[1px] border-zinc-300">45</td>
            <td class="text-[3.5vw] py-2 border-[1px] border-zinc-300 font-bold text-yellow-600">원격</td>
            <td class="text-[3.5vw] py-2 border-[1px] border-zinc-300">에틸렌 <br />열림</td>
            <td class="text-[3.5vw] py-2 border-[1px] border-zinc-300">건조3부 <br />홍길동</td>
          </tr>
          <tr class="border-y-2">
            <td class="text-[3.5vw] py-2 border-[1px] border-zinc-300">23.06.20 <br /> 13:21:00</td>
            <td class="text-[3.5vw] py-2 border-[1px] border-zinc-300">E0003</td>
            <td class="text-[3.5vw] py-2 border-[1px] border-zinc-300">8D</td>
            <td class="text-[3.5vw] py-2 border-[1px] border-zinc-300">서편</td>
            <td class="text-[3.5vw] py-2 border-[1px] border-zinc-300">45</td>
            <td class="text-[3.5vw] py-2 border-[1px] border-zinc-300 font-bold text-red-600">수동</td>
            <td class="text-[3.5vw] py-2 border-[1px] border-zinc-300">산소 <br />열림</td>
            <td class="text-[3.5vw] py-2 border-[1px] border-zinc-300">건조3부 <br />홍길동</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import AppHeader from '../components/AppHeader.vue';
import HalfSelectBox from '../components/HalfSelectBox.vue';

  export default {
    components: { AppHeader, HalfSelectBox },
    data() {
      return {
        popup: true,
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>