<template>
  <div id="app" class="flex justify-center items-center text-center bg-white">
    <p v-if="loading" class="text-center text-blue w-screen h-screen flex flex-col items-center">
      <span class="animate-spin inline-block mt-[40vh] w-6 h-6 border-[3px] border-current border-t-transparent text-blue rounded-full" role="status" aria-label="loading" />
      <span class="text-zinc-700 mt-4 text-xl">로딩 중...</span>
    </p>
    <router-view v-else />
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      loading: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  },
};
</script>

<style>
</style>
