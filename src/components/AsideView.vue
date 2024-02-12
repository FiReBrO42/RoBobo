<template>
  <aside class="aside-container" :class="{ hide: props.asideStatus }">
    <!-- name,iconName,linkName -->
    <template v-for="(menu, index) in menuList" :key="index">
      <router-link :to="{ name: menu.linkName }" class=" aside-list ">
        <div class="icon-container">
          <svg aria-hidden="true" class="icon">
            <use :xlink:href="'#' + menu.iconName"></use>
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
const props = defineProps({
  asideStatus: { type: Boolean },
})
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
</script>
<style lang="scss" scoped>
.aside-container {
  position: absolute;
  top: 100%;
  left: 0;
  max-width: 9rem;
  padding-top: 4.5rem;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  transition: all 0.5s ease;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  background-color: var(--bg-color);

  &.hide {
    max-width: 3.5rem;
  }
}

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
}</style>