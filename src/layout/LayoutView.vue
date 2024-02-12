<template>
  <SvgSave />
  <HeaderView />
  <div class="content">
    <router-view></router-view>
  </div>
</template>
<script setup>
import SvgSave from '@/components/SvgSave.vue'
import HeaderView from '@/components/HeaderView.vue'
</script>
<style lang="scss" scoped>
.content {
  background: var(--third-color) !important;
}
</style>