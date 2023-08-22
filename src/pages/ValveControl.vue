<template>
  <div class="h-[100vh]">
    <AppHeader>
      <span>밸브 원격 제어</span>
    </AppHeader>
    <div class="Container">
      <div class="flex flex-row relative mt-[3vh] justify-center">
        <HalfSelectBox class="px-4 mr-[2vw]">
          <option>도크 구분</option>
          <option>1도크</option>
          <option>2도크</option>
          <option>3도크</option>
          <option>4도크</option>
          <option>5도크</option>
          <option>8도크</option>
          <option>9도크</option>
          <option>H도크</option>
        </HalfSelectBox>

        <HalfSelectBox class="px-4 ml-[2vw]">
          <option>장치 구분</option>
          <option>상태: 정상</option>
          <option>상태: 경고</option>
          <option>상태: 위험</option>
        </HalfSelectBox>
      </div>

      <div class="Control flex flex-col text-left ml-7 mt-4 font-bold text-sky-950">
        <span>장비번호: N0001</span>
        <span>설치위치: 8D 서편 28</span>
        <span>최신 데이터 수신일자: 23.06.20 14:20:01</span>
      </div>

      <ValveStatusCard class="ValveCard" title="산소" status="열림"/>
      <ValveStatusCard class="ValveCard" title="에틸렌" status="닫힘"/>
      <ValveStatusCard class="ValveCard" title="전체"/>


    </div>
  </div>
</template>

<script>
import AppHeader from '../components/AppHeader.vue';
import HalfSelectBox from '../components/HalfSelectBox.vue'
import ValveStatusCard from '../components/ValveStatusCard.vue';

  export default {
    components: { AppHeader, HalfSelectBox, ValveStatusCard },
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