<template>
  <SvgSave />
  <div class="layout">
    <HeaderView />
    <FloatView v-draggable />
    <div class="AsideView-container">
      <AsideView />
    </div>
    <div class="content">
      <router-view></router-view>
    </div>

  </div>
</template>
<script setup>
import SvgSave from '@/components/SvgSave.vue'
import vDraggable from '@/directives/draggable';
/* 組件 */
import HeaderView from '@/components/HeaderView.vue'
import FloatView from '@/components/FloatView.vue'
import AsideView from '@/components/AsideView.vue'

</script>
<style lang="scss">
body {
  background: var(--third-color) !important;
}
</style>
<style lang="scss" scoped>
.content {
  margin-top: 91.98px;
  padding-top: 4rem;
  width: 85vw;

}

.layout {
  display: flex;
}

.AsideView-container {
  display: block;
  width: 9rem;
  height: 100vh;
}
</style>
