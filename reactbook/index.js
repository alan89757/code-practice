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
// 问题：没绑事件,字符串需要处理成dom结构
/*
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

*/

// 字符串转换为dom元素
// 问题: 不够通用，状态逻辑可以抽离出来
const createDOMFromString = (domstring)=> {
  const div = document.createElement("div");
  div.innerHTML = domstring;
  return div;
}

class LikeButton {
  constructor() {
    this.state = {
      isLiked: false
    }
  }
  changeLikeText(e) {
    const likeText = this.el.querySelector(".like-text");
    this.state.isLiked = !this.state.isLiked;
    likeText.innerHTML = this.state.isLiked ? "取消" : "点赞";
  }
  render() {
    this.el = createDOMFromString(`
    <div class='wrapper'>
      <button class='like-btn'>
        <span class='like-text'>点赞</span>
        <span>👍</span>
      </button>
    </div>
    `);
    this.el.addEventListener("click", this.changeLikeText.bind(this));
    return this.el;
  }
}
const wrapper = document.querySelector(".wrapper");
const btn1 = new LikeButton();
wrapper.appendChild(btn1.render());
