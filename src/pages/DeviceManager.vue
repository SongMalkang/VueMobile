<template>
  <div class="justify-center">
    <AppHeader>
      가스 감지기 설치 & 철거
    </AppHeader>
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

    <div class="w-[94vw] h-[89vh] ml-[3vw] overflow-y-scroll">
      <table class="table-auto mt-[2vh] text-[3.5vw] text-black overflow-scroll">
          <thead class="">
            <th class="border-[1px] border-sky-700 py-2 bg-sky-600 text-white text-[3.8vw] w-2/12">장치ID</th>
            <th class="border-[1px] border-sky-700 py-2 bg-sky-600 text-white text-[3.8vw] w-1/12">상태</th>
            <th class="border-[1px] border-sky-700 py-2 bg-sky-600 text-white text-[3.8vw] w-1/12">위치</th>
            <th class="border-[1px] border-sky-700 py-2 bg-sky-600 text-white text-[3.8vw] w-1/12">호선</th>
            <th class="border-[1px] border-sky-700 py-2 bg-sky-600 text-white text-[3.8vw] w-5/12">상세위치</th>
            <th class="border-[1px] border-sky-700 py-2 bg-sky-600 text-white text-[3.8vw] w-1/12">정보</th>
          </thead>
          <tbody>
            <tr class="border-[1px] border-sky-700 h-[4vh]">
              <td class="py-2">F0001</td>
              <td class="py-2">설치</td>
              <td class="py-2">D8</td>
              <td class="py-2">3294</td>
              <td class="py-2">E/R M/E L.O.WUMP TK <br /> No.1 LFO S.V.T</td>
              <td @click="this.popup = true" class="py-2 text-sky-600 font-bold">조회</td>
            </tr>
            <tr class="border-[1px] border-sky-700 h-[4vh]">
              <td class="py-2">F0002</td>
              <td class="py-2 text-yellow-600 font-bold text-ellipsis whitespace-nowrap">미설치</td>
              <td class="py-2">D7</td>
              <td class="py-2">3291</td>
              <td class="py-2">E/R M/E L.O.WUMP TK No.3 LFO S.V.T</td>
              <td @click="this.popup = true" class="py-2 text-sky-600 font-bold">조회</td>
            </tr>
            <tr class="border-[1px] border-sky-700 h-[4vh]">
              <td class="py-2">F0003</td>
              <td class="py-2">설치</td>
              <td class="py-2">D8</td>
              <td class="py-2">3291</td>
              <td class="py-2">E/R M/E L.O.WUMP TK <br /> No.3 LFO S.V.T</td>
              <td @click="this.popup = true" class="py-2 text-sky-600 font-bold">조회</td>
            </tr>
            <tr class="border-[1px] border-sky-700">
              <td class="py-2">F0004</td>
              <td class="py-2">설치</td>
              <td class="py-2">D8</td>
              <td class="py-2">3291</td>
              <td class="py-2">E/R M/E L.O.WUMP TK No.1 LFO S.V.T</td>
              <td @click="this.popup = true" class="py-2 text-sky-600 font-bold">조회</td>
            </tr>
            <tr class="border-[1px] border-sky-700 h-[4vh]">
              <td class="py-2">F0001</td>
              <td class="py-2">설치</td>
              <td class="py-2">D8</td>
              <td class="py-2">3294</td>
              <td class="py-2">E/R M/E L.O.WUMP TK <br /> No.1 LFO S.V.T</td>
              <td @click="this.popup = true" class="py-2 text-sky-600 font-bold">조회</td>
            </tr>
            <tr class="border-[1px] border-sky-700 h-[4vh]">
              <td class="py-2">F0002</td>
              <td class="py-2">설치</td>
              <td class="py-2">D8</td>
              <td class="py-2">3291</td>
              <td class="py-2">E/R M/E L.O.WUMP TK <br /> No.3 LFO S.V.T</td>
              <td @click="this.popup = true" class="py-2 text-sky-600 font-bold">조회</td>
            </tr>
            <tr class="border-[1px] border-sky-700 h-[4vh]">
              <td class="py-2">F0002</td>
              <td class="py-2">설치</td>
              <td class="py-2">D8</td>
              <td class="py-2">3291</td>
              <td class="py-2">E/R M/E L.O.WUMP TK <br /> No.3 LFO S.V.T</td>
              <td @click="this.popup = true" class="py-2 text-sky-600 font-bold">조회</td>
            </tr>
            <tr class="border-[1px] border-sky-700">
              <td class="py-2">F0002</td>
              <td class="py-2">설치</td>
              <td class="py-2">D8</td>
              <td class="py-2">3291</td>
              <td class="py-2">E/R M/E L.O.WUMP TK <br /> No.3 LFO S.V.T</td>
              <td @click="this.popup = true" class="py-2 text-sky-600 font-bold">조회</td>
            </tr>
          </tbody>
        </table>          
      </div>

      <div v-if="popup" class="absolute left-[5vw] top-[40vh] w-[90vw] h-[60vh] rounded-xl text-black overflow-hidden border-[1px] border-sky-600">
        <div class="flex flex-col h-full justify-center items-center">
          <span class="flex flex-row text-white justify-between px-4 align-middle items-center bg-sky-600 h-[5vh] w-full text-[3.8vw]">
            E/R M/E L.O.WUMP TK No.1 LFO S.V.T
          <span @click="this.popup = false" class="text-white text-[5vw]">X</span>
          </span>
          <div class="flex flex-col h-[55vh] bg-slate-50 w-full">

            <div class="flex flex-col text-left mt-[1vh] ml-[8vw] w-[50vw] h-[10vh] text-[3.5vw] font-bold py-3">
              <span class="border-y-[1px]">장비번호: F0001</span>
              <span class="border-y-[1px]">설치 일자: 23.08.18</span>
              <span class="border-y-[1px]">철거 예정: 23.08.30</span>
            </div>


            <div class="overflow-y-hidden mt-[2vh] px-8">
              <table class="table table-auto w-full py-2">
                <thead>
                  <tr>
                    <td class="border-[1px] border-sky-700 text-white bg-sky-600 font-bold text-[4vw] py-2">구분</td>
                    <td class="border-[1px] border-sky-700 text-white bg-sky-600 font-bold text-[4vw] py-2">내용</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="w-3/12 py-2 border-sky-600 border-[1px]">성명</td>
                    <td class="w-9/12 py-2 border-sky-600 border-[1px]">허재석<br /><span class="text-sm font-bold text-sky-400">(로그인 정보 자동기입)</span></td>
                  </tr>
                  <tr>
                    <td class="w-3/12 py-2 border-sky-600 border-[1px]">사번</td>
                    <td class="w-9/12 py-2 border-sky-600 border-[1px]">BP28602<br /><span class="text-sm font-bold text-sky-400">(로그인 정보 자동기입)</span></td>
                  </tr>
                  <tr>
                    <td class="w-3/12 py-2 border-sky-600 border-[1px]">소속</td>
                    <td class="w-9/12 py-2 border-sky-600 border-[1px]">협력사<br /><span class="text-sm font-bold text-sky-400">(로그인 정보 자동기입)</span></td>
                  </tr>
                  <tr>
                    <td class="w-3/12 py-2 border-sky-600 border-[1px]">철거 일자</td>
                    <td class="w-9/12 py-2 border-sky-600 border-[1px]">
                      <input class="bg-white text-center w-full" placeholder="23.08.18" />
                    </td>
                  </tr>
                </tbody>
              </table>

              <button @click="showAlert()" class="mt-[2vh] bg-red-600 text-white font-bold w-full h-[4vh]">설치 / 철거 등록</button>
            </div>
          </div>
        </div>
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
    },
    data() {
      return {
        popup: false,
      }
    },
    methods: {
      showAlert() {
        window.alert('설치 / 철거 정보가 등록되었습니다.');
        this.popup = false;
      }
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