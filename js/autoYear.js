// autoYear.js
// BY 大泽
// 自动显示年份（对于版权信息来说很方便）
window.onload = () => {
  const date = new Date();
  document.querySelectorAll("span.nowYear").forEach((val) => {
    val.innerText = date.getFullYear();
  });
};
