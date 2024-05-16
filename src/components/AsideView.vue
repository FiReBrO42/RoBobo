<template>
  <aside class="aside-container" :class="{ hide: asideStatus }">
    <!-- aside menu btn -->
    <div class="asideMenu-btn-container">
      <button type="button" class="asideMenu-btn" :class="{ hide: asideStatus }" aria-label="MenuButton"
        @click="switchAsideMenu()">
        <svg aria-hidden="true" class="icon">
          <use xlink:href="#btn-arrow-left"></use>
        </svg>
      </button>
    </div>
    <!-- name,iconName,linkName -->
    <template v-for="(menu, index) in menuList" :key="index">
      <router-link :to="{ name: menu.linkName }" class=" aside-list ">
        <div class="icon-container">
          <svg aria-hidden="true" class="icon">
            <use :xlink:href="'#' + menu.iconName"></use>
          </svg>
        </div>
        <p class="aside-list-content-name" :class="{ hide: asideStatus }">
          {{ menu.name }}
        </p>
      </router-link>
    </template>
  </aside>
</template>
<script setup>
import { ref } from 'vue'

const menuList = [
  {
    name: 'cloth',
    iconName: 'icon-cloth',
    linkName: 'ClothingList',
  },
  {
    name: 'OutfitIdea',
    iconName: 'icon-group',
    linkName: 'OutfitIdea',
  },
]

const asideStatus = ref(true)

const switchAsideMenu = () => {
  asideStatus.value = !asideStatus.value
}
</script>
<style lang="scss" scoped>
.aside-container {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;

  max-width: 9rem;
  height: 100vh;
  /* width: 100vw; */
  overflow: hidden;
  transition: all 0.5s ease;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: var(--bg-color);
  box-shadow: 0px 0 6px 0px #00000059;;
  padding: 1.25rem 0;

  &.hide {
    max-width: 3.5rem;
  }
}

// 按鈕
.asideMenu-btn-container {
  position: relative;
  padding-left: 0.5rem;

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

// 列表
.aside-list {
  position: relative;
  width: 100%;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  ;

  .icon-container {
    width: fit-content;
    height: fit-content;
    margin-right: 1rem;

    &>svg {
      width: 1rem;
      aspect-ratio: 1/1;
    }
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0px;
    background-color: var(--primary-color);
    transition: all 0.3s ease;
  }

  .aside-list-content-name {
    opacity: 1;
    &.hide {
      transition: all 0.3s ease;
      opacity: 0;
    }
  }

  &.active {

    .icon-container {
      &>svg {
        fill: var(--primary-color);
      }
    }

    .aside-list-content-name {
      color: var(--primary-color);
    }

    &::after {
      content: '';
      width: 4px;
    }
  }
}
</style>