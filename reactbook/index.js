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
// 问题: 不够通用，状态改变没有重新render，状态逻辑可以抽离出来
/*
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
*/

// 组件化，组件抽离，通过重新渲染dom的方式，而不是操作dom，这就是虚拟dom做的事情
// 重新渲染组件，消除了手动的 DOM 操作。

const createDOMFromString = (domstring)=> {
  const div = document.createElement("div");
  div.innerHTML = domstring;
  return div;
}
class LikeButton {
  constructor() {
    this.state = { isLiked: false }
  }
  // 更新状态，重新渲染
  setState(state) {
    const oldEle = this.el;
    this.state = state;
    this.el = this.render();  // 重新渲染的 DOM 元素并没有插入到页面当中，需要手动更新下
    if(this.onStateChange) this.onStateChange(oldEle, this.el);  // 手动更新dom
  }
  changeLikeText() {
    this.setState({
      isLiked: !this.state.isLiked
    });
  }
  render() {
    this.el = createDOMFromString(`
      <button class='like-btn'>
        <span class='like-text'>${this.state.isLiked ? '取消' : '点赞'}</span>
        <span>👍</span>
      </button>
    `)
    this.el.addEventListener('click', this.changeLikeText.bind(this), false)
    return this.el;
  }
}

const wrapper = document.querySelector(".wrapper");
const likeButton = new LikeButton();
wrapper.appendChild(likeButton.render());

likeButton.onStateChange = function(oldEle, newEle) {
  wrapper.insertBefore(newEle, oldEle);
  wrapper.removeChild(oldEle);
};

