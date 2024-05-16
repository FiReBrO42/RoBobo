<template>
  <SvgSave />
  <div class="layout">
    <div class="AsideView-container">
      <AsideView />
    </div>
    <div class="content">
      <HeaderView />
      <router-view></router-view>
    </div>

  </div>
</template>
<script setup>
import SvgSave from '@/components/SvgSave.vue'
/* 組件 */
import HeaderView from '@/components/HeaderView.vue'
import AsideView from '@/components/AsideView.vue'

</script>
<style lang="scss" scoped>
.content {
  margin-top: 91.98px;
  margin-left: auto;
  padding-top: 1rem;
  margin-right: auto;

  width: 80vw;
}
</style>
<style lang="scss">
body {
  background: var(--third-color) !important;
}
</style>
<style lang="scss" scoped>
.layout {
  display: flex;
}

.AsideView-container {
  display: block;
  width: 9rem;
  height: 100vh;
}
</style>