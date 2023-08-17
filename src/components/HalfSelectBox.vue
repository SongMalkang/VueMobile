<template>
  <select class="half-select-box text-xs text-zinc-800">
    <slot></slot>
  </select>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
.half-select-box {
  display: flex;
  width: 42vw;
  border-radius: 0.75rem;
}
</style>