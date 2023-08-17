<template>
  <div class="text-black h-[100vh]">
    <AppHeader />
    <div class="w-[90vw] justify-between flex flex-row mt-[2vh] ml-[5vw]">
      <HalfSelectBox>
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
      <HalfSelectBox>
        <option value="8">감지기 : 전체</option>
        <option value="9">흡입식</option>
        <option value="H">확산식</option>
      </HalfSelectBox>
    </div>
    <div class="h-[80vh] w-[90vw] mt-[2vh] ml-[5vw] overflow-scroll">
      <table class="table table-fixed text-sm w-full">
          <thead>
              <tr class="">
                  <td class="py-2 w-2/12 border-2 border-sky-700 bg-sky-600 text-white font-bold">장치ID</td>
                  <td class="py-2 w-3/12 border-2 border-sky-700 bg-sky-600 text-white font-bold">장치 상태</td>
                  <td class="py-2 w-5/12 border-2 border-sky-700 bg-sky-600 text-white font-bold">최신 데이터 <br /> 수신시각</td>
                  <td class="py-2 w-2/12 border-2 border-sky-700 bg-sky-600 text-white font-bold">장치<br />정보</td>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td class="py-2 border-[1px] border-sky-700">F0001</td>
                  <td class="py-2 border-[1px] border-sky-700 text-yellow-600 font-bold">배터리 부족</td>
                  <td class="py-2 border-[1px] border-sky-700">23-08-18 17:31:00</td>
                  <td class="py-2 border-[1px] border-sky-700 text-sky-600 font-bold">조회</td>
              </tr>
              <tr>
                  <td class="py-2 border-[1px] border-sky-700">F0002</td>
                  <td class="py-2 border-[1px] border-sky-700">정상</td>
                  <td class="py-2 border-[1px] border-sky-700">23-08-18 17:31:00</td>
                  <td class="py-2 border-[1px] border-sky-700 text-sky-600 font-bold">조회</td>
              </tr>
              <tr>
                  <td class="py-2 border-[1px] border-sky-700">F0003</td>
                  <td class="py-2 border-[1px] border-sky-700">정상</td>
                  <td class="py-2 border-[1px] border-sky-700">23-08-18 17:31:00</td>
                  <td class="py-2 border-[1px] border-sky-700 text-sky-600 font-bold">조회</td>
              </tr>
              <tr>
                  <td class="py-2 border-[1px] border-sky-700">F0004</td>
                  <td class="py-2 border-[1px] border-sky-700 text-yellow-600 font-bold">배터리 부족</td>
                  <td class="py-2 border-[1px] border-sky-700">23-08-18 17:31:00</td>
                  <td class="py-2 border-[1px] border-sky-700 text-sky-600 font-bold">조회</td>
              </tr>
              <tr>
                  <td class="py-2 border-[1px] border-sky-700">F0005</td>
                  <td class="py-2 border-[1px] border-sky-700">정상</td>
                  <td class="py-2 border-[1px] border-sky-700">23-08-18 17:31:00</td>
                  <td class="py-2 border-[1px] border-sky-700 text-sky-600 font-bold">조회</td>
              </tr>
              <tr>
                  <td class="py-2 border-[1px] border-sky-700">F0006</td>
                  <td class="py-2 border-[1px] border-sky-700 text-yellow-600 font-bold">배터리 부족</td>
                  <td class="py-2 border-[1px] border-sky-700">23-08-18 17:31:00</td>
                  <td class="py-2 border-[1px] border-sky-700 text-sky-600 font-bold">조회</td>
              </tr>
              <tr>
                  <td class="py-2 border-[1px] border-sky-700">F0007</td>
                  <td class="py-2 border-[1px] border-sky-700">정상</td>
                  <td class="py-2 border-[1px] border-sky-700">23-08-18 17:31:00</td>
                  <td class="py-2 border-[1px] border-sky-700 text-sky-600 font-bold">조회</td>
              </tr>
              <tr>
                  <td class="py-2 border-[1px] border-sky-700">F0008</td>
                  <td class="py-2 border-[1px] border-sky-700">정상</td>
                  <td class="py-2 border-[1px] border-sky-700">23-08-18 17:31:00</td>
                  <td class="py-2 border-[1px] border-sky-700 text-sky-600 font-bold">조회</td>
              </tr>
              <tr>
                  <td class="py-2 border-[1px] border-sky-700">F0009</td>
                  <td class="py-2 border-[1px] border-sky-700 text-yellow-600 font-bold">배터리 부족</td>
                  <td class="py-2 border-[1px] border-sky-700">23-08-18 17:31:00</td>
                  <td class="py-2 border-[1px] border-sky-700 text-sky-600 font-bold">조회</td>
              </tr>
              <tr>
                  <td class="py-2 border-[1px] border-sky-700">F0010</td>
                  <td class="py-2 border-[1px] border-sky-700">정상</td>
                  <td class="py-2 border-[1px] border-sky-700">23-08-18 17:31:00</td>
                  <td class="py-2 border-[1px] border-sky-700 text-sky-600 font-bold">조회</td>
              </tr>
              <tr>
                  <td class="py-2 border-[1px] border-sky-700">F0011</td>
                  <td class="py-2 border-[1px] border-sky-700 text-yellow-600 font-bold">배터리 부족</td>
                  <td class="py-2 border-[1px] border-sky-700">23-08-18 17:31:00</td>
                  <td class="py-2 border-[1px] border-sky-700 text-sky-600 font-bold">조회</td>
              </tr>
              <tr>
                  <td class="py-2 border-[1px] border-sky-700">F0012</td>
                  <td class="py-2 border-[1px] border-sky-700">정상</td>
                  <td class="py-2 border-[1px] border-sky-700">23-08-18 17:31:00</td>
                  <td class="py-2 border-[1px] border-sky-700 text-sky-600 font-bold">조회</td>
              </tr>
              <tr>
                  <td class="py-2 border-[1px] border-sky-700">F0013</td>
                  <td class="py-2 border-[1px] border-sky-700">정상</td>
                  <td class="py-2 border-[1px] border-sky-700">23-08-18 17:31:00</td>
                  <td class="py-2 border-[1px] border-sky-700 text-sky-600 font-bold">조회</td>
              </tr>
              <tr>
                  <td class="py-2 border-[1px] border-sky-700">F0014</td>
                  <td class="py-2 border-[1px] border-sky-700 text-yellow-600 font-bold">배터리 부족</td>
                  <td class="py-2 border-[1px] border-sky-700">23-08-18 17:31:00</td>
                  <td class="py-2 border-[1px] border-sky-700 text-sky-600 font-bold">조회</td>
              </tr>
              <tr>
                  <td class="py-2 border-[1px] border-sky-700">F0015</td>
                  <td class="py-2 border-[1px] border-sky-700">정상</td>
                  <td class="py-2 border-[1px] border-sky-700">23-08-18 17:31:00</td>
                  <td class="py-2 border-[1px] border-sky-700 text-sky-600 font-bold">조회</td>
              </tr>
              <tr>
                  <td class="py-2 border-[1px] border-sky-700">F0016</td>
                  <td class="py-2 border-[1px] border-sky-700 text-yellow-600 font-bold">배터리 부족</td>
                  <td class="py-2 border-[1px] border-sky-700">23-08-18 17:31:00</td>
                  <td class="py-2 border-[1px] border-sky-700 text-sky-600 font-bold">조회</td>
              </tr>
              <tr>
                  <td class="py-2 border-[1px] border-sky-700">F0017</td>
                  <td class="py-2 border-[1px] border-sky-700">정상</td>
                  <td class="py-2 border-[1px] border-sky-700">23-08-18 17:31:00</td>
                  <td class="py-2 border-[1px] border-sky-700 text-sky-600 font-bold">조회</td>
              </tr>
              <tr>
                  <td class="py-2 border-[1px] border-sky-700">F0018</td>
                  <td class="py-2 border-[1px] border-sky-700">정상</td>
                  <td class="py-2 border-[1px] border-sky-700">23-08-18 17:31:00</td>
                  <td class="py-2 border-[1px] border-sky-700 text-sky-600 font-bold">조회</td>
              </tr>
              <tr>
                  <td class="py-2 border-[1px] border-sky-700">F0019</td>
                  <td class="py-2 border-[1px] border-sky-700 text-yellow-600 font-bold">배터리 부족</td>
                  <td class="py-2 border-[1px] border-sky-700">23-08-18 17:31:00</td>
                  <td class="py-2 border-[1px] border-sky-700 text-sky-600 font-bold">조회</td>
              </tr>
              <tr>
                  <td class="py-2 border-[1px] border-sky-700">F0020</td>
                  <td class="py-2 border-[1px] border-sky-700">정상</td>
                  <td class="py-2 border-[1px] border-sky-700">23-08-18 17:31:00</td>
                  <td class="py-2 border-[1px] border-sky-700 text-sky-600 font-bold">조회</td>
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
    components: { AppHeader, HalfSelectBox }
}
</script>

<style lang="scss" scoped>

</style>