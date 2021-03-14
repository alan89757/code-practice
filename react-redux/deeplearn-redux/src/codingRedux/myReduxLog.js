/**
 * Created by Derry on 2018/4/19.
 */

const log = ({dispatch, getState}) => next => action => {
    if('derry' in action) {
        console.log("这是我们自己写的日志中间件: " + action['derry']);
        delete action['derry'];
        return dispatch(action);
    }
    return next(action);
}
export default log;