export default function () {
  const getImage = (url) => {
    try {
      // 使用 new URL 和 import.meta.url 动态生成图片的完整路径
      return new URL(url, import.meta.url).href;
    } catch (error) {
      console.error('Error loading image:', error);
      return ''; // 返回一个默认的占位符图片或空字符串
    }
  };

  return {
    getImage
  }
}