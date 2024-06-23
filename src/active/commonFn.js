export default function () {
  // const baseUrl = new URL(import.meta.env.BASE_URL, import.meta.url).href;
  const getImage = (url) => {
    try {
      // ES 模块标准，用于解析和处理 URL（统一资源定位符）
      // 使用 new URL 和 import.meta.url 动态生成图片的完整路径
      // new URL(url, import.meta.url).href 会根据当前模块的位置解析 url，并生成一个完整的路径
      // import.meta.env.BASE_URL 來動態獲取 base 路徑
      // return new URL(url, baseUrl).href;
      return new URL(`../${url}`, import.meta.url).href;
    } catch (error) {
      console.error('Error loading image:', error);
      return ''; // 返回一个默认的占位符图片或空字符串
    }
    /* 
    console.log(url.href);        // 完整的 URL
    console.log(url.origin);      // 協議、域名和端口號：https://example.com:8080
    console.log(url.protocol);    // 協議：https:
    console.log(url.host);        // 主機名和端口號：example.com:8080
    console.log(url.hostname);    // 主機名：example.com
    console.log(url.port);        // 端口號：8080
    console.log(url.pathname);    // 路径：/path/to/resource
    console.log(url.search);      // 查询字符串：?query=123
    console.log(url.hash);        // 片段：#fragment
    */
  };

  return {
    getImage
  }
}