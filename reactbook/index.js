//v1.0.0 直接操作dom，
// 问题：无法复用
/*
const button = document.querySelector('.like-btn');
const buttonText = button.querySelector('.like-text');
let isLiked = false;
button.addEventListener('click', () => {
  isLiked = !isLiked;
  if (isLiked) {
    buttonText.innerHTML = '取消';
  } else {
    buttonText.innerHTML = '点赞';
  }
}, false);
*/

// 模板字符串放render，实例可复用render
// 问题：没绑事件
class LikeButton {
  render() {
    return `<div class='wrapper'>
    <button class='like-btn'>
      <span class='like-text'>点赞</span>
      <span>👍</span>
    </button>
  </div>`;
  }
}

const wrapper = document.getElementById("wrapper");
const btn1 = new LikeButton();
wrapper.innerHTML = btn1.render();
const btn2 = new LikeButton();
wrapper.innerHTML = btn2.render();