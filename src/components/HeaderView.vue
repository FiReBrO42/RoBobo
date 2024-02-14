<template>
  <header class="header-container">
    <!-- aside menu btn -->
    <div class="asideMenu-btn-container">
      <button type="button" class="asideMenu-btn" :class="{ hide: asideStatus }" aria-label="MenuButton"
        @click="switchAsideMenu()">
        <svg aria-hidden="true" class="icon">
          <use xlink:href="#btn-arrow-left"></use>
        </svg>
      </button>
    </div>
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
    <AsideView :asideStatus="asideStatus" />
  </header>
</template>
<script setup>
import AsideView from '@/components/AsideView.vue'
import { ref } from 'vue'

const asideStatus = ref(true)

const switchAsideMenu = () => {
  asideStatus.value = !asideStatus.value
}
</script>
<style lang="scss" >
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

.asideMenu-btn-container {
  position: absolute;
  left: 1.25rem;
  top: 50%;
  transform: translate(0, -50%);


  .asideMenu-btn {
    border: none;
    border-radius: 5px;
    background-color: var(--btn-bg-color);
    width: 2.5rem;
    aspect-ratio: 1/1;

    &>svg {
      width: 10px;
      fill: none;
      stroke: var(--font-color);
      transition: all 0.3s ease;
    }

    &:hover {
      &>svg {
        stroke: var(--primary-color)
      }
    }

    &.hide {
      &>svg {
        transform: rotate(180deg);
      }
    }
  }
}
</style>