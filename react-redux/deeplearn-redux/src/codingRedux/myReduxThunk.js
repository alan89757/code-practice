/**
 * Created by Derry on 2018/4/19.
 */

// 你们猜有多少行？
const thunk = ({dispatch, getState}) => next => action => {
    // next === store.dispatch;
    console.log(action);
    if(typeof action == 'function'){
        return action(dispatch, getState)
    }
    // 代码能否执行到这里取决于 中间件是否拦截了action。
    // 默认的action 就是 {type: TEMP_CHANGE,data}
    return next(action);
}
export default thunk;