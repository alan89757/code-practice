/**
 * Created by Derry on 2018/4/19.
 */
export function createStore(reducer, enhancer){
    // 如果有enhancer中间件，就包裹一下我们原本的creatStore。applyMiddleware(thunk)
    if(enhancer){
        return enhancer(createStore)(reducer);
    // 等价 return applyMiddleware(thunk)(createStore)(reducer);
    }
    // 不能初始化。
   let currentState;
   let currentListeners = [];

   function getState(){
       return currentState;
   }

   function subscribe(listener) {
       currentListeners.push(listener);
       return function(){
           currentListeners = currentListeners.filter((l) =>{
               return l !== listener;
           })
       }
   }

   function dispatch(action) {
       currentState = reducer(currentState, action);
       currentListeners.forEach(v=> v());
       return action;
   }

   // 初始化让reducer 命中defalut这个情况。
    dispatch({type: '@@DN/DERRY-REDUX'});
   return {getState, subscribe, dispatch}
}

// middleware参数本身可以是多个，这里先从单个开始讲解原理
export function applyMiddleware(...middlewares) {
    // middleware === thunk
    // createStore === createStore;
    // (...args) 就是(reducer);
    return createStore => (...args) => {
        // 获得没有中间件情况下的store。
        const store = createStore(...args);
        // 取出来原本的dispatch;
        let dispatch = store.dispatch;
        const midApi = {
            getState: store.getState,
            dispatch: (...args) => dispatch(...args)
        }
        // midApi 就是原来的{getState, dispatch}

        /* 二次注释要对 middleware进行兼容多个中间件处理
        *
        *   dispatch = middleware(midApi)(store.dispatch);  //(action)
        * */
        // 得到一个数组，里面的中间件都已经变成了 middleware(midApi)；
        const middlrewareChain = middlewares.map(middleware => middleware(midApi));
        dispatch = compose(...middlrewareChain)(store.dispatch);

        // 这里写的return 就是最后通过中间件加工后的最终内容。
        // 是不是 参考{getState, subscribe, dispatch}格式。store

        return {
            // store包含了原本就有的 {getState, subscribe, dispatch}
            ...store,
            // dispatch添加了中间件的功能并且差异更新上面的 dispatch
            dispatch
        }
    }


}

// 对传进来的方法进行一个组合。
// (fn1,fn2,fn3)
// 输出 fn1(fn2(fn3));
export function compose(...funcs){
    if(funcs.length === 0) {
        return arg=>arg;
    }
    if(funcs.length === 1) {
        return funcs[0];
    }
    return funcs.reduce((result, item) => (...args) => result(item(...args)));
}

// 包裹一下我们的 输入：tempCHANGE(args) 输出：dispatch(tempCHANGE(args))
// 需要 dispatch分发action 才能执行动作。
function bindActionCreator(creator, dispatch) {
    return (...args) => dispatch(creator(...args));
}

export function bindActionCreators(creators, dispatch){
    let bound ={}
    Object.keys(creators).forEach(v => {
        let creator = creators[v];
        bound[v] = bindActionCreator(creator, dispatch);
    })
    return bound;
}