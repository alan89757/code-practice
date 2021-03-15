/**
 * Created by Derry on 2018/3/28.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {tempCHANGE, tempCHANGEAsync} from "../redux/index.redux";

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

class TemperatureInput extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        // 事件发送，参数只发送摄氏度(celsius)就OK了！
        const celsius = this.props.scale === 'f' ? tryConvert(e.target.value, toCelsius) : e.target.value;
        // this.props.eventEmitter.emit('temp change', {scale: this.props.scale, celsius: celsius});

        this.props.scale === 'f'?
        this.props.tempCHANGE({scale: this.props.scale, celsius: celsius}) :
        this.props.tempCHANGEAsync({scale: this.props.scale, celsius: celsius});

        //todo 改变状态
        // this.setState({
        //     temperature: e.target.value
        // })
    }

    // 如果temperatrue只使用一次，下面就不需要。
   /* componentDidMount() {
        this.props.store.subscribe(() => {
            const obj = this.props.store.getState();
           // 要判断来源。

        })
    }*/

    render() {
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input value={temperature}
                       onChange={this.handleChange} />
            </fieldset>
        );
    }
}

// 华氏温度转摄氏温度
function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

// 摄氏温度转华氏温度
function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

// 温度的数字化操作。
function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

const mapStateToProps = (state, ownProps) => {
    if (ownProps.scale !== state.scale){
        let tempObj = {temperature : ""}
        ownProps.scale === "c" ? tempObj = {
            temperature: state.celsius
        } : tempObj = {
            temperature: tryConvert(state.celsius, toFahrenheit)
        };
        return tempObj
    }
}

const actionCreater = {tempCHANGE, tempCHANGEAsync}

// TemperatureInput得到新的Temp组件
TemperatureInput = connect(mapStateToProps, actionCreater)(TemperatureInput);
export default TemperatureInput