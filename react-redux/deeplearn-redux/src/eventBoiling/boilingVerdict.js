/**
 * Created by Derry on 2018/3/28.
 */

import React from 'react';
import { connect } from 'react-redux';

class BoilingVerdict extends React.Component {
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