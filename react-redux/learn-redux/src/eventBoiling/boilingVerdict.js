/**
 * Created by Derry on 2018/3/28.
 */

import React from 'react';
import { connect } from 'react-redux';

class BoilingVerdict extends React.Component {
    constructor(props){
        super(props);
        /*this.state = {
            isboil : 'not'
        }*/
    }

    componentDidMount(){
       /* this.props.eventEmitter.on('temp change', (obj)=> {
            obj.celsius >= 100 ? this.setState({
                isboil : 'would'
            }) : this.setState({
                isboil : 'not'
            })
        })*/

       /* this.props.store.subscribe(() => {
            const obj = this.props.store.getState();
            obj.celsius >= 100 ? this.setState({
                isboil : 'would'
            }) : this.setState({
                isboil : 'not'
            })
        });*/
    }

    render() {
        return <p>The water { this.props.isboil } boil.</p>;
    }
}


const mapStateToProps = (state) => {
    let boilObj = {isboil : 'not'}
    state.celsius >= 100 ? boilObj = {
        isboil : 'would'
    } : boilObj = {
        isboil : 'not'
    };
    return boilObj
}

BoilingVerdict = connect(mapStateToProps)(BoilingVerdict);
export default BoilingVerdict

// 不用 props，使用emit发射的内容 使用状态。