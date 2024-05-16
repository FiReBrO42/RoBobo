<template>
  <header class="header-container">
    
    <div class="header-content-container">
      <h1 class="header-logo">
        仙境啵啵
      </h1>
      <label class="header-search-container">
        <input type="text" class="header-search-input" placeholder="請輸入服飾名稱....">
        <span class="header-search-icon">
          <i class="icon ion-md-search"></i>
        </span>
      </label>
    </div>
  </header>
</template>
<script setup>
// import { ref } from 'vue'


</script>
<style lang="scss" scoped>
.header-container {
  background: var(--bg-color) !important;
  position: fixed;
  z-index: 99;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;

  background: var(--bg-color);
  padding: 1.25rem 0;

  display: flex;
  justify-content: center;

}

.header-content-container {
  display: flex;
  align-items: center;
  gap: 2rem;
  width: 80%;
}

// LOGO圖
.header-logo {
  width: 165px;
  height: 3.25rem;
  background-image: url('@/assets/img/logo.png');
  background-repeat: no-repeat;
  background-size: contain;
  text-indent: 101%;
  overflow: hidden;
  white-space: nowrap;
}

// 輸入欄位
.header-search-container {
  position: relative;
  width: clamp(20%, 35%, 100%);
  height: 3rem;

  .header-search-input {
    width: 100%;
    height: 100%;
    padding: 1rem 2rem;
    background-color: var(--third-color);

    border: none;
    border-radius: 50px;

    font-size: 1rem;
    color: var(--font-color);

    &::placeholder {
      font-size: 1rem;
    }
  }

  .header-search-icon {
    position: absolute;
    right: 2rem;
    top: 50%;
    transform: translate(0, -50%);
    font-size: 1.25rem;
  }
}


</style>