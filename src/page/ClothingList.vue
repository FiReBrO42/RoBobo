<template>
  <div class="top">
    <h2 class="title">服飾</h2>
    <div class="type-container">
      <ul class="type-list-container">
        <li class="type-list" @click="clickAll()" :class="{ active: allType.status }">
          {{ allType.name }}
        </li>
        <li class="type-list" v-for="(type, index) in typeList" :key="index" @click="clickType(index)"
          :class="{ active: type.status }">
          {{ type.name }}
        </li>
        <li class="type-list type-list-icon-click-container" @click="clickOtherType"
          :class="{ active: otherType.status }">
          <div class="type-list-icon-click">
            <svg aria-hidden="true" class="icon">
              <use xlink:href="#icon-click"></use>
            </svg>
          </div>
          {{ otherType.name }}
        </li>
      </ul>
    </div>
  </div>
  <div class="content-container">
    <ul class="list-container">
      <li class="list">
        <figure class="list-img">
          <img src="@/assets/img/clothingList/clothingList-1.png" alt="">
          <figcaption class="list-name"> 小棉被帽子是多餘的</figcaption>
        </figure>
      </li>
      <li class="list">
        <figure class="list-img">
          <img src="@/assets/img/clothingList/clothingList-1.png" alt="">
          <figcaption class="list-name"> 小棉被帽子是多餘的</figcaption>
        </figure>
      </li>
      <li class="list">
        <figure class="list-img">
          <img src="@/assets/img/clothingList/clothingList-1.png" alt="">
          <figcaption class="list-name"> 小棉被帽子是多餘的</figcaption>
        </figure>
      </li>
      <li class="list">
        <figure class="list-img">
          <img src="@/assets/img/clothingList/clothingList-1.png" alt="">
          <figcaption class="list-name"> 小棉被帽子是多餘的</figcaption>
        </figure>
      </li>
      <li class="list">
        <figure class="list-img">
          <img src="@/assets/img/clothingList/clothingList-1.png" alt="">
          <figcaption class="list-name"> 小棉被帽子是多餘的</figcaption>
        </figure>
      </li>
      <li class="list">
        <figure class="list-img">
          <img src="@/assets/img/clothingList/clothingList-1.png" alt="">
          <figcaption class="list-name"> 小棉被帽子是多餘的</figcaption>
        </figure>
      </li>
      <li class="list">
        <figure class="list-img">
          <img src="@/assets/img/clothingList/clothingList-1.png" alt="">
          <figcaption class="list-name"> 小棉被帽子是多餘的</figcaption>
        </figure>
      </li>
      <li class="list">
        <figure class="list-img">
          <img src="@/assets/img/clothingList/clothingList-1.png" alt="">
          <figcaption class="list-name"> 小棉被帽子是多餘的</figcaption>
        </figure>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { ref } from "vue";
const allType = ref({
  name: '全部',
  status: false,
})
const clickAll = () => {
  allType.value.status = true
  if (allType.value.status) {
    typeList.value.forEach(item => {
      item.status = false
    });
  }
}

const typeList = ref([
  {
    name: '頭上',
    status: false,
  },
  {
    name: '頭中',
    status: false,
  },
  {
    name: '頭下',
    status: false,
  },
  {
    name: '頭上中下',
    status: false,
  },
  {
    name: '披肩',
    status: false,
  },
])
const clickType = (index) => {
  allType.value.status = false
  typeList.value[index].status = !typeList.value[index].status
}

const otherType = ref({
  name: '可附魔',
  status: false,
})
const clickOtherType = () => {
  otherType.value.status = !otherType.value.status
}

</script>
<style lang="scss" scoped>
.top {
  margin-bottom: 2.5rem;
  padding-left: 5rem;
  display: flex;
  align-items: center;
}

.title {
  color: var(--font-color);
  margin-right: 2.5rem;
  margin-bottom: 0.5rem;
}

.type-container {
  flex: 1;
}

.type-list-container {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.type-list {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.25rem 1.5rem;
  text-align: center;
  border: 1px solid rgba(58, 58, 58, 0.2);
  border-radius: 5px;
  color: rgba(58, 58, 58, 0.2);
  gap: 0.5rem;
  width: fit-content;

  &:hover {
    cursor: pointer;
  }

  &.active {
    color: var(--bg-color);
    border-color: var(--primary-color);
    background-color: var(--primary-color);
  }

}

.type-list-icon-click-container {
  &.active {
    color: var(--primary-color);
    border-color: var(--primary-color);
    background-color: unset;
    border: 1px solid var(--primary-color);
  }

  .type-list-icon-click {
    display: grid;
    place-items: center;
    width: 19px;
    height: 19px;
    border-radius: 100%;
    background: var(--secondary-color);

    &>svg {
      width: 9px;
      height: 12px;
      fill: var(--bg-color);
    }

  }

  &.active {
    .type-list-icon-click {

      background: var(--primary-color);
    }

  }
}


.content-container {
  background: var(--bg-color);
  border-radius: 10px;
}

.list-container {
  display: flex;
  flex-wrap: wrap;
  padding: 2.75rem 4.3rem;
  gap: 1.75rem;
}

.list {
  width: calc(11rem - 2rem);
  aspect-ratio: 1/1;
  margin-bottom: 0.25rem;
  position: relative;
  border-radius: 10px;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(360deg, #000000 -13.41%, rgba(0, 0, 0, 0) 94.54%);
    opacity: 0;
    transition: all 0.3s ease;
  }

  .list-img {
    .list-name {
      color: var(--bg-color);
      font-size: 15px;
      position: absolute;
      bottom: 1rem;
      left: 50%;
      width: 80%;
      transform: translate(-50%, 0);
      z-index: 99;
      opacity: 0;
      transition: all 0.3s ease;
    }
  }

  &:hover {
    cursor: pointer;

    &::after {
      opacity: 1;
    }

    .list-name {
      opacity: 1;
    }
  }
}
</style>