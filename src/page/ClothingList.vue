<template>
  <div class="top">
    <h2 class="title">服飾</h2>
    <div class="type-container">
      <ul class="type-list-container">
        <li class="type-list" @click="clickAll()" :class="{ active: allType.status }">
          {{ allType.name }}
        </li>
        <li class="type-list" v-for="(type, key) in typeList1" :key="key" :data-condition="'condition-' + key"
          @click="chooseCondition(key)">
          {{ type }}
        </li>
        <li class="type-list type-list-icon-click-container" v-for="(type, key) in typeList2" :key="key"
          :data-condition="'condition-' + key" @click="chooseCondition(key)">
          <div class="type-list-icon-click">
            <svg aria-hidden="true" class="icon">
              <use xlink:href="#icon-click"></use>
            </svg>
          </div>
          {{ type }}
        </li>
      </ul>
    </div>
  </div>
  <div class="content-container">
    <ul class="list-container">
      <li class="list" v-for="(item, index) in renderData" :key="index" :data-card="'card-' + index">
        <!-- menu top -->
        <div class="list-menu-container">
          <h2>{{ item.content }}</h2>
          <p>---<span>{{ item.enchant }}</span> </p>
        </div>
        <!-- menu bottom -->
        <div class="list-menu-bottom-container">
          <h2>連結出處</h2>
          <a class="list-menu-bottom-link" href="link" target="_blank" v-for="(link, index) in item.links" :key="index">
            <svg class="icon icon-polyShadow">
              <use xlink:href="#icon-poring-shadow"></use>
            </svg>
          </a>
        </div>
        <!-- img -->
        <figure class="list-img">
          <img :src="item.imgUrl" alt="">
          <figcaption class="list-name"> {{ item.name }}</figcaption>
        </figure>
        <!-- BTN -->
        <div class="list-menu-btn" :data-card-btn="'card-btn-' + index" @click="switchMenu(index)">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { ref, computed, watch } from "vue";
import common from '@/active/commonFn.js'
const { getImage } = common()
/* 切換 Card Menu */
const switchMenu = (id) => {
  const el = document.querySelector(`[data-card="card-${id}"]`)
  const btnEl = document.querySelector(`[data-card-btn="card-btn-${id}"]`)
  el.classList.toggle('active')
  btnEl.classList.toggle('active')
}
const allType = ref({
  name: '全部',
  status: true,
})

/* 篩選條件 */
const searchCondition = ref([])
const typeList1 = {
  'headTop': '頭上',
  'headMid': '頭中',
  'headBottom': '頭下',
  'headAll': '頭上中下',
  'shawl': '披肩',
}
const typeList2 = {
  'enchant': '可附魔',
}
const clickAll = () => {
  allType.value.status = true
  if (allType.value.status) {
    for (const key in typeList1) {
      const el = document.querySelector(`[data-condition="condition-${key}"]`)
      el.classList.remove('active')
    }
    searchCondition.value = []
  }
}
const chooseCondition = (id) => {
  const el = document.querySelector(`[data-condition="condition-${id}"]`)
  allType.value.status = false

  if (el) {
    const isActive = el.classList.toggle('active'); // 切换 active 类并返回新的状态

    if (isActive) {
      searchCondition.value.push(id);
    } else {
      const index = searchCondition.value.indexOf(id);
      if (index > -1) {
        searchCondition.value.splice(index, 1);
      }
    }
  }
}

/* 渲染資料 Card */
const cardList = ref([
  {
    type: 'headTop',
    name: '1小棉被帽子是多餘的',
    content: '小棉被帽子是多餘的<3',
    enchant: '可至綿綿島附魔',
    enchantStatus: true,
    links: [],
    imgUrl: getImage('/img/clothingList/clothingList-1.png'),
  },
  {
    type: 'headMid',
    name: '1小棉被',
    content: '小棉被帽子是多餘的<3',
    enchant: '可至綿綿島附魔',
    enchantStatus: true,
    links: [],
    imgUrl: getImage('/img/clothingList/clothingList-1.png'),
  },
  {
    type: 'headBottom',
    name: '1帽子是多餘的',
    content: '小棉被帽子是多餘的<3',
    enchant: '可至綿綿島附魔',
    enchantStatus: true,
    links: [],
    imgUrl: getImage('/img/clothingList/clothingList-1.png'),
  },
  {
    type: 'shawl',
    name: '2多餘',
    content: '小棉被帽子是多餘的<3',
    enchant: '',
    enchantStatus: false,
    links: [],
    imgUrl: getImage('/img/clothingList/clothingList-1.png'),
  },
  {
    type: 'headAll',
    name: '1帽子',
    content: '小棉被帽子是多餘的<3',
    enchant: '可至綿綿島附魔',
    enchantStatus: true,
    links: [],
    imgUrl: getImage('/img/clothingList/clothingList-1.png'),
  },
  {
    type: 'headTop',
    name: '2小棉被帽子是多餘的',
    content: '小棉被帽子是多餘的<3',
    enchant: '',
    enchantStatus: false,
    links: [],
    imgUrl: getImage('/img/clothingList/clothingList-1.png'),
  },
  {
    type: 'headTop',
    name: '2小棉被多餘的',
    content: '小棉被帽子是多餘的<3',
    enchant: '',
    enchantStatus: false,
    links: [],
    imgUrl: getImage('/img/clothingList/clothingList-1.png'),
  },
  {
    type: 'headTop',
    name: '2小棉餘的',
    content: '小棉被帽子是多餘的<3',
    enchant: '',
    enchantStatus: false,
    links: [],
    imgUrl: getImage('/img/clothingList/clothingList-1.png'),
  },
  {
    type: 'shawl',
    name: '1小棉被帽子是多餘的',
    content: '小棉被帽子是多餘的<3',
    enchant: '可至綿綿島附魔',
    enchantStatus: true,
    links: [],
    imgUrl: getImage('/img/clothingList/clothingList-1.png'),
  },
  {
    type: 'headMid',
    name: '1小棉被帽子是多餘的',
    content: '小棉被帽子是多餘的<3',
    enchant: '可至綿綿島附魔',
    enchantStatus: true,
    links: [],
    imgUrl: getImage('/img/clothingList/clothingList-1.png'),
  },
  {
    type: 'shawl',
    name: '2小棉被帽子是多餘的',
    content: '小棉被帽子是多餘的<3',
    enchant: '',
    enchantStatus: false,
    links: [],
    imgUrl: getImage('/img/clothingList/clothingList-1.png'),
  },
])

const renderData = computed(() => {
  let array = [...cardList.value];
  if (searchCondition.value.length > 0 && !(searchCondition.value.length === 1 && searchCondition.value.includes('enchant'))) {
    array = cardList.value.filter(item => searchCondition.value.includes(item.type));
  }
  if (searchCondition.value.includes('enchant')) {
    array = array.filter(item => item.enchantStatus);
  }
  return array
})
/* 監聽搜尋條件是否為空，打開全部項目 */
watch(() => searchCondition.value.length,
  () => {
    if (searchCondition.value.length <= 0) {
      allType.value.status = true
    }
  }
)
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
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 2.75rem 8rem;
  gap: 1.75rem;
}

.list {
  width: auto;
  aspect-ratio: 1/1;
  margin-bottom: 0.25rem;
  position: relative;
  border-radius: 10px;
  border: 1px solid var(--border-color);
  overflow: hidden;

  .list-img {
    .list-name {
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 9;
      display: flex;
      width: 100%;
      padding: 0.5rem 2rem;
      font-size: 15px;
      color: var(--bg-color);
      background: var(--primary-color);
      transition: all 0.3s ease;
    }
  }

  &:hover {
    cursor: pointer;
  }



  .list-menu-container {
    position: absolute;
    top: -100%;
    left: 0;
    z-index: 9;
    width: 100%;
    padding: 1rem 2rem 0.5rem;
    display: flex;
    flex-direction: column;
    background-color: var(--primary-color);
    transition: all 0.3s ease;

    &>h2 {
      font-size: 1rem;
      color: var(--font-color-light);
    }

    &>p {
      font-size: 0.85rem;
      color: var(--font-color2);
    }
  }

  .list-menu-bottom-container {
    position: absolute;
    bottom: -100%;
    left: 0;
    z-index: 99;
    width: 100%;
    padding: 1rem 2rem 0.5rem;
    display: flex;
    background-color: var(--bg-color2);
    transition: all 0.3s ease;
    gap: 0.5rem;

    &>h2 {
      display: flex;
      align-items: center;
      font-size: 1rem;
      line-height: 1;
      margin: 0;
      color: var(--font-color3);
      font-weight: bold;
    }

    .list-menu-bottom-link {
      width: 2rem;
      aspect-ratio: 1/1;
      display: block;
    }
  }

  &.active {
    .list-menu-container {
      top: 0;
    }

    .list-menu-bottom-container {
      bottom: 0;
    }
  }

  .list-menu-btn {
    position: absolute;
    top: 0.75rem;
    right: 0.75rem;
    z-index: 99;
    width: 2rem;
    height: 2rem;
    border-radius: 100%;
    padding: 0.75rem;
    background-color: var(--btn-bg-color2);
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    &>span {
      position: absolute;
      display: block;
      width: 1rem;
      height: 1.5px;
      background-color: var(--bg-color);
      border: none;
      transition: all 0.3s ease;
    }

    &>span:nth-child(1) {
      top: 35%;
      left: 50%;
      transform: translate(-50%, 35%);
      // transform: rotate(45deg);
    }

    &>span:nth-child(2) {
      top: 50%;
      left: 50%;
      transform: translate(-50%, 50%);
      // transform: rotate(-45deg);
    }

    &>span:nth-child(3) {
      top: 65%;
      left: 50%;
      transform: translate(-50%, 65%);
      // transform: rotate(-45deg);
    }

    &.active {
      &>span:nth-child(1) {
        rotate: 45deg;
        top: 50%;
        left: 50%;
        transform: translate(-50%, 50%);
        transform-origin: left;
      }

      &>span:nth-child(2) {
        display: none;
      }

      &>span:nth-child(3) {
        rotate: -45deg;
        top: 50%;
        left: 50%;
        transform: translate(-50%, 50%);
        transform-origin: left;
      }

    }
  }

}
</style>