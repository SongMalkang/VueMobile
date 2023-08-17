<template>
  <div class="container bg-sky-600 text-white font-bold text-left">
    <div class="text-xs text-sky-600"> / </div>
    <button
      v-for="item in menuList"
      :key="item.id"
      :class="[ 'py-2 bg-sky-600 text-sm font-bold w-[60vw] text-left rounded-none', item.id === 'M1' || item.id === 'M2' ? `px-2 bg-sky-700` : 'px-6' ]"
      :disabled="item.id === 'M1' || item.id === 'M2'"
      @click="goToRoute(item.routeUrl)"
    >
      {{ item.routeUrl === '/' ? item.title : '> ' + item.title }}
    </button>

  </div>
</template>

<script>

export default {
  data() {
    return {
      menuList: [
        { id : 'M1', title : '복합 가스 원격 모니터링', routeUrl : '/' },
        { id : 'S1', title : '실시간 가스 현황 조회', routeUrl : '/gas/monitoring' },
        { id : 'S2', title : '가스 알람 및 이력 조회', routeUrl : '/gas/eventlog' },
        { id : 'S3', title : '가스 감지기 설치/철거 등록', routeUrl : '/gas/device' },
        { id : 'S4', title : '가스 감지기 상태 확인', routeUrl : '/gas/status' },

        { id : 'M2', title : '매니폴드 밸브 원격 모니터링', routeUrl : '/' },
        { id : 'S5', title : '실시간 밸브 장치 상태 조회', routeUrl : '/valve/monitoring' },
        { id : 'S6', title : '밸브 제어 이력 조회', routeUrl : '/valve/history' },
        { id : 'S7', title : '밸브 원격 제어', routeUrl : '/valve/control' },
      ]
    };
  },
  mounted() {
  },
  methods: {
    goToRoute(routeUrl) {
      this.$router.push(routeUrl);
    },
  }
};
</script>

<style lang="scss" scoped>
.container {
  position: absolute;
  width: 60vw;
  left: 0;
  height: 95vh;
  color: white;
  transition: left 2s;
}
</style>
