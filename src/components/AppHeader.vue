<template>
  <div id="appHeader" class="header bg-sky-600 w-screen h-[5vh] text-center items-center text-white text-[5.5vw] font-bold px-2">
    <Bars3Icon class="menu-icon text-sky-900 w-7 overflow-hidden rounded-lg" @click="showSidebar = !showSidebar" />
    <slot></slot>
    <HomeIcon class="text-sky-900 w-7 overflow-hidden rounded-lg" @click="goToHome">Home</HomeIcon>
  </div>
  <SideBarNavigate @click="showSidebar=CSSFontFeatureValuesRule" v-show="showSidebar" class="fixed z-50"></SideBarNavigate>
</template>

<script>
import { Bars3Icon, HomeIcon } from '@heroicons/vue/24/solid'
import SideBarNavigate from './SideBarNavigate.vue'

export default {
  components: {
    SideBarNavigate,
    Bars3Icon,
    HomeIcon
  },
  data() {
    return {
      showSidebar: false
    }
  },
  methods: {
    goToHome() {
      this.$router.push('/');
    },
  }
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
}

.menu-icon {
  position: relative;
  cursor: pointer;
}
</style>
