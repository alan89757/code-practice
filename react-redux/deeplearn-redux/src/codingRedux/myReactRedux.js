/**
 * Created by Derry on 2018/4/19.
 */

// react-redux
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from './myRedux';

/*export function connect(mapStateToProps, mapDispatchToProps) {
   return function(OldComponent){
        return class NewComponent extends Component{

        }
   }
}*/

/*state=>state

function a(state) {
    return state;
}*/

export const connect = (mapStateToProps=state=>state, mapDispatchToProps={}) => (OldComponent) => {
    return class NewComponent extends Component{
        // 接收外面传递进来的store。
        static contextTypes = {
            store: PropTypes.object
        }

        constructor(props, context){
            super(props, context);
            this.state = {
                props: this.props
            }
        }

        componentDidMount(){
            const store = this.context.store;
            store.subscribe(() => this.update());
            this.update()
        }

        update(){
            const store = this.context.store;
            // stateProps 是不是就是加工后得到的 props对象。
            const stateProps = mapStateToProps(store.getState());
            // tempCHANGE()运行有效果吗？
            // dispatch(tempCHANGE(参数))应该是这样子。
            const dispatchProps = bindActionCreators(mapDispatchToProps,store.dispatch);

            this.setState({
                props: {
                    ...this.state.props,
                    ...stateProps,
                    ...dispatchProps
                }
            })
        }

        render(){
            return <OldComponent {...this.state.props}/>
        }
    }
}

export class Provider extends Component {
    static childContextTypes = {
        store: PropTypes.object
    }

    getChildContext(){
        return {store: this.props.store}
    }

    render() {
        return this.props.children
    }
}