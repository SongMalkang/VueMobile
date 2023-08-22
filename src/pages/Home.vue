<template>
  <div id="home" class="container">
    <div class="logoContainer">
      <img :src="logo" alt="logo"/>
    </div>

    <span class="title">외업 가스 안전 관리 시스템</span>
    
    <button
      v-for="item in menuList"
      :key="item.id"
      :class="[ 'py-2 bg-sky-600 text-[4vw] font-bold w-[60vw]', item.id === 'M1' || item.id === 'M2' ? 'box' : 'buttons' ]"
      :disabled="item.id === 'M1' || item.id === 'M2'"
      @click="goToRoute(item.routeUrl)"
    >
      {{ item.title }}
    </button>
  </div>
</template>

<script>
import logo from '../assets/logo.png'

export default {
  name: 'Home',
  data() {
    return {
      logo: logo,
      menuList: [
        { id : 'M1', title : '복합 가스 원격 모니터링', routeUrl : '/' },
        { id : 'S1', title : 'ㄴ 실시간 가스 현황 조회', routeUrl : '/gas/monitoring' },
        { id : 'S2', title : 'ㄴ 가스 알람 및 이력 조회', routeUrl : '/gas/eventlog' },
        { id : 'S3', title : 'ㄴ 가스 감지기 설치/철거 등록', routeUrl : '/gas/device' },
        { id : 'S4', title : 'ㄴ 가스 감지기 상태 확인', routeUrl : '/gas/status' },

        { id : 'M2', title : '매니폴드 밸브 원격 모니터링', routeUrl : '/' },
        { id : 'S5', title : 'ㄴ 장치 상태 조회 및 제어', routeUrl : '/valve/monitoring' },
        { id : 'S6', title : 'ㄴ 제어 이력 조회', routeUrl : '/valve/history' },
        // { id : 'S7', title : 'ㄴ 밸브 원격 제어', routeUrl : '/valve/control' },
      ],
    };
  },
  methods: {
    goToRoute(routeUrl) {
      this.$router.push(routeUrl);
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: hidden;
}

.logoContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75vw;
}

.title {
  text-align: center;
  font-size: 6vw;
  font-weight: bold;
}

.group {
  width: 80vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  vertical-align: center;
}

.box {
  display: flex;
  width: 90vw;
  height: 5.5vh;
  font-weight: bold;
  margin-top: 2vh;
  color: white;

  border-radius: 10px;

  font-size: 6vw;
  
  text-align: center;
  justify-content: center;
  align-items: center; 
}

.buttons {
  display: flex;
  width: 90vw;
  height: 5vh;
  font-weight: bold;
  text-align: left;

  padding-left: 5vw;
  margin-top: 1vh;
  color: black;
  background-color: #d5d5d5;

  font-size: 5vw;

  align-items: center;
  vertical-align: center;
}

.content {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
}
</style>
