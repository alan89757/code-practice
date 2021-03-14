/**
 * Created by Derry on 2018/3/28.
 */

import React from 'react';

const isboil = "not";
class BoilingVerdict extends React.Component {
    render() {
        return <p>The water { isboil } boil.</p>;
    }
}

export default BoilingVerdict;