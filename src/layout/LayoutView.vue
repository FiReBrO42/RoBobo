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
  margin-top: 91.98px;
  max-width: calc(99vw - 9rem);
  margin-left: auto;
  padding-top: 1rem;


}
</style>
<style lang="scss">
body {
  background: var(--third-color) !important;
}
</style>