/**
 * Created by Derry on 2018/4/12.
 */

// import { createStore } from 'redux';
import { createStore } from '../codingRedux/myRedux';

// 新创建reducer
function inputChange(state=10, action) {
    switch (action.type) {
        case 'add' :
            return state + 1;
        case 'sub':
            return state - 1;
        default:
            return state;
    }
}

const store = createStore(inputChange);

const init = store.getState();
console.log(init);

const unsub = store.subscribe(listerner);

function listerner(){
    const current = store.getState();
    console.log(`当前数据：${current}`);
}

store.dispatch({
    type: 'add'
});
// console.log(store.getState());

store.dispatch({
    type: 'add'
});
// console.log(store.getState());

unsub();

store.dispatch({
    type: 'sub'
});
/*
console.log(store.getState());*/
