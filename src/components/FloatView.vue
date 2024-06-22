<template>
  <div class="float-container">
    <button type="button" class="btn float-btn-show" :class="{ show: showFloatList }" @click="switchFloatList()">
      <svg aria-hidden="true" class="icon btn-arrow-up" aria-label="FloatingButton">
        <use xlink:href="#btn-arrow-up"></use>
      </svg>
    </button>
    <!-- 列表 -->
    <ul class="float-list-container" :class="{ show: showFloatList }">
      <li class="float-list">
        <div class="mascot-container">
          <svg aria-hidden="true" class="icon" aria-label="mascot-Polly">
            <use xlink:href="#icon-poring"></use>
          </svg>
          <!-- 對話框 -->
          <div id="mascot-chat" class="chat-container">
            <p class="chat-container-header-name">早安</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const showFloatList = ref(true)
const switchFloatList = () => {
  showFloatList.value = !showFloatList.value
}

/* 隨機聊天 */
const chatContent = ['嗨今天好嗎', '今天要來換點什麼造型呢', '有沒有其他好玩的事情呀', '我叫做波利']
const redomChat = () => {
  const chatContainer = document.getElementById('mascot-chat');
  chatContainer.innerHTML = chatContent[Math.floor(Math.random() * chatContent.length)];
}
const chatInterval = ref(null)
const init = () => {
  chatInterval.value = setInterval(redomChat, 5000)
}

onMounted(() => {
  init()
})
onUnmounted(() => {
  clearInterval(chatInterval.value)
})
</script>
<style lang="scss" scoped>
.float-container {
  position: fixed;
  right: 4rem;
  top: 14rem;
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
}

.float-btn-show {
  display: grid;
  place-items: center;
  padding: 0.75rem 1.25rem;
  border-radius: 1.25rem;
  background-color: #DCDCDC;
  border: none;

  /* ICON */
  &>.btn-arrow-up {
    transform: matrix(1, 0, 0, 1, 0, 0);
    transition: all .3s ease;
  }

  &.show {
    &>.btn-arrow-up {
      transform: matrix(1, 0, 0, -1, 0, 0);
    }
  }
}

.float-list-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  max-height: 0rem;
  transition: all .3s ease;

  &.show {
    overflow: visible;
    max-height: 20vh;
  }
}

/* ICON */
.btn-arrow-up {
  width: 1rem;
  aspect-ratio: 2/1;
  color: rgba(0, 0, 0, 0);
  stroke: var(--btn-color-dark);
}

.mascot-container {
  position: relative;
  width: 6rem;
  height: 5rem;

  &:hover {
    cursor: pointer;
  }
}

.chat-container {
  position: absolute;
  top: 30%;
  right: 112%;
  width: auto;
  max-width: 5rem;
  height: auto;
  padding: 1rem;
  background-color: rgb(255 240 240);
  border: 1px solid var(--primary-color);
  border-radius: 0.25rem 0 0.25rem 0.25rem;

  &>p {
    text-align: center;
    white-space: break-spaces;
  }

  &::after {
    content: "";
    position: absolute;
    right: -0.5rem;
    top: 0;
    width: 0.5rem;
    height: 1.25rem;
    border: 4px solid var(--primary-color);
    clip-path: polygon(0 0, 100% 50%, 0% 100%, 0 100%);
  }
}
</style>