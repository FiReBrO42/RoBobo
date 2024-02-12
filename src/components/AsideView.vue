<template>
  <aside class="aside-container">
      <!-- name,iconName,linkName -->
      <template  v-for="(menu, index) in menuList" :key="index">
        <router-link :to="{ name:menu.linkName }" class=" aside-list ">
          <div class="icon-container">
            <svg aria-hidden="true" class="icon">
              <use :xlink:href="'#'+menu.iconName"></use>
            </svg>
          </div>
          <p class="aside-list-content-name">
          {{ menu.name }}
          </p>
        </router-link>
      </template>
      <!-- <li class="aside-list">
        <router-link :to="{ name: 'ClothingList' }" class="aside-list-content">
          <div class="icon-container">
            <svg aria-hidden="true" class="icon">
              <use xlink:href="#icon-cloth"></use>
            </svg>
          </div>
          <p class="aside-list-content-name">
            cloth
          </p>
        </router-link>
      </li> -->
  </aside>
</template>
<script setup>
const menuList = [
  {
    name:'cloth',
    iconName:'icon-cloth',
    linkName:'ClothingList',
  },
  {
    name:'OutfitIdea',
    iconName:'icon-group',
    linkName:'OutfitIdea',
  },
]
</script>
<style lang="scss" scoped>
.aside-container {
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 5rem;
  height: 100vh;
  width: fit-content;
  transition: all 0.3s ease;

  display: flex;
  flex-direction: column;
  gap: 1rem;
  &.hide {
    width: 0;
  }
}

.aside-list {
  position: relative;
  width: 100%;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  .icon-container {
    width: 1rem;
    aspect-ratio: 1/1;

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
  &.active {

    .icon-container{
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