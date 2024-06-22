// src/directives/draggable.js
export default {
  mounted(el) {
    el.onmousedown = function (e) {
      // 改為絕對位置，使其可以拖動
      el.style.position = 'absolute';
      // 計算滑鼠指標與元素左上角的距離 
      // clientX 滑鼠到窗口 offsetLeft 滑鼠到元素距離 
      const disX = e.clientX - el.offsetLeft;
      const disY = e.clientY - el.offsetTop;

      document.onmousemove = function (e) {
        el.style.right = 'unset';
        // 計算滑鼠移動後的位置 - 元素原本的位置
        el.style.left = e.clientX - disX + 'px';
        el.style.top = e.clientY - disY + 'px';
      };

      document.onmouseup = function () {
        el.style.position = 'fixed';
        document.onmousemove = null;
        document.onmouseup = null;
      };
    };
  },
  unmounted() {
    document.onmousemove = null;
    document.onmouseup = null;
  }
};
