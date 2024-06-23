<template>
  <!-- title -->
  <div class="title-container">
    <h2 class="title">穿搭靈感</h2>
    <p class="txt">歡迎投稿玩家投稿, 不定期更新。</p>
  </div>
  <!-- card -->
  <div class="card-box">
    <ul class="card-list-container">
      <li class="card-list" v-for="(item, index) in data" :key="index">
        <!-- img -->
        <figure class="card-list-img">
          <img :src="getImage(item.imgUrl)" alt="">
        </figure>
        <!-- content -->
        <div class="card-list-content-container">
          <div>

            <div class="card-list-content-row">
              <!-- position -->
              <div class="card-list-content-title">
                <!-- title -->
                <p>頭上</p>
              </div>
              <!-- name -->
              <div class="card-list-content-name">
                <h3>{{ item.headTop }}</h3>
                <span v-if="item.headTopEffect">{{ item.headTopEffect }}</span>
              </div>
            </div>
            <div class="card-list-content-row">
              <!-- position -->
              <div class="card-list-content-title">
                <!-- title -->
                <p>頭中</p>
              </div>
              <!-- name -->
              <div class="card-list-content-name">
                <h3>{{ item.headMid }}</h3>
                <span v-if="item.headMidEffect">{{ item.headMidEffect }}</span>
              </div>
            </div>
            <div class="card-list-content-row">
              <!-- position -->
              <div class="card-list-content-title">
                <!-- title -->
                <p>頭下</p>
              </div>
              <!-- name -->
              <div class="card-list-content-name">
                <h3>{{ item.headBottom }}</h3>
                <span v-if="item.headBottomEffect">{{ item.headBottomEffect }}</span>
              </div>
            </div>
            <div class="card-list-content-row">
              <!-- position -->
              <div class="card-list-content-title">
                <!-- title -->
                <p>披肩</p>
              </div>
              <!-- name -->
              <div class="card-list-content-name">
                <h3>{{ item.shawl }}</h3>
                <span v-if="item.shawlEffect">{{ item.shawlEffect }}</span>
              </div>
            </div>
          </div>

          <!-- user -->
          <div>
            <div class="card-list-content-row">
              <div class="card-list-content-title">
                <!-- title -->
                <p>玩家</p>
              </div>
              <!-- name -->
              <div class="card-list-content-content">
                <h3>{{ item.name }}</h3>
              </div>
            </div>
            <div class="card-list-content-row">
              <div class="card-list-content-title">
                <!-- title -->
                <p>伺服器</p>
              </div>
              <!-- name -->
              <div class="card-list-content-content">
                <h3>{{ item.serverName }}</h3>
              </div>
            </div>
          </div>

        </div>
        <div class="card-list-index-container">
          <svg aria-hidden="true" class="icon">
            <use xlink:href="#icon-start"></use>
          </svg>
          <div class="card-list-index">
            <p>
              {{ index + 1 }}
            </p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script setup>
import common from '@/active/commonFn.js'

const { getImage } = common()
const data = [
  {
    name: '波波麗娜貝貝多',
    serverName: '羅札那',
    imgUrl: 'img/outfitIdea/outfitIdea-1.png',
    headTop: '狐狸耳朵',
    headTopEffect: '水霧效果',
    headMid: '狐狸耳朵',
    headMidEffect: '水霧效果',
    headBottom: '狐狸耳朵',
    headBottomEffect: '水霧效果',
    shawl: '狐狸耳朵',
    shawlEffect: '水霧效果',
  },
  {
    name: '波波麗娜貝貝多',
    serverName: '羅札那',
    imgUrl: 'img/outfitIdea/outfitIdea-1.png',
    headTop: '狐狸耳朵',
    headTopEffect: '水霧效果',
    headMid: '狐狸耳朵',
    headMidEffect: '水霧效果',
    headBottom: '狐狸耳朵',
    headBottomEffect: '水霧效果',
    shawl: '狐狸耳朵',
    shawlEffect: '水霧效果',
  },
  {
    name: '波波麗娜貝貝多',
    serverName: '羅札那',
    imgUrl: 'img/outfitIdea/outfitIdea-1.png',
    headTop: '狐狸耳朵',
    headTopEffect: '水霧效果',
    headMid: '狐狸耳朵',
    headMidEffect: '水霧效果',
    headBottom: '狐狸耳朵',
    headBottomEffect: '水霧效果',
    shawl: '狐狸耳朵',
    shawlEffect: '水霧效果',
  },
  {
    name: '波波麗娜貝貝多',
    serverName: '羅札那',
    imgUrl: 'img/outfitIdea/outfitIdea-1.png',
    headTop: '狐狸耳朵',
    headTopEffect: '水霧效果',
    headMid: '狐狸耳朵',
    headMidEffect: '水霧效果',
    headBottom: '狐狸耳朵',
    headBottomEffect: '水霧效果',
    shawl: '狐狸耳朵',
    shawlEffect: '水霧效果',
  },
]

</script>
<style lang="scss" scoped>
.title-container {
  padding-left: 5rem;
}

.title {
  margin-bottom: 0.5rem;
  font-size: 25px;
  color: #3A3A3A;
}

.txt {
  color: #A6A6A6;
  font-size: 15px;
}

.card-box {
  padding-left: 3rem;
  margin-top: 1.25rem;
}

.card-list-container {
  gap: 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.card-list {
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 2rem;
  padding: 2rem;

  margin-bottom: 0.5rem;
  border-radius: 10px 10px 0 0;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);
  overflow: hidden;



  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
    width: 100%;
    height: 4px;
    background-color: var(--primary-color);
  }
}

.card-list-content-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  padding-top: 2rem;
}

.card-list-content-row {
  display: flex;
  gap: 2.5rem;

  .card-list-content-title {
    width: 20%;

    &>p {
      color: rgba(0, 0, 0, 0.5);
      font-size: 15px;
      font-weight: 400;
    }
  }

  .card-list-content-content>h3 {
    font-weight: bold;
  }

  .card-list-content-name {
    flex: 1;

    &>h3 {
      font-size: 18px;
      font-weight: bold;
    }

    &>span {
      color: var(--primary-color);
      font-size: 15px;
      font-weight: bold;
    }
  }
}

.card-list-index-container {
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: -1;
  width: 5rem;
  aspect-ratio: 1/1;

  &>svg {
    color: #F8F4F1;
  }

  .card-list-index {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    &>p {
      color: var(--bg-color);
      font-size: 35px;
    }
  }
}
</style>