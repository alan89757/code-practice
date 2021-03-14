/**
 * Created by Derry on 2018/3/28.
 */
import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { connect } from '../codingRedux/myReactRedux';
import {tempCHANGE, tempCHANGEAsync} from "../redux/index.redux";

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

class TemperatureInput extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            temperature: this.props.celsius
        }
    }

    handleChange(e) {
        let isFahrenheit = this.props.scale === 'f';
        const celsius = isFahrenheit ? tryConvert(e.target.value, toCelsius) : e.target.value;
        const fahrenheit = isFahrenheit ? e.target.value : tryConvert(e.target.value, toFahrenheit);

        this.setState({
            temperature : e.target.value
        });

        isFahrenheit ? this.props.tempCHANGE({celsius: celsius, fahrenheit: fahrenheit}) :
            this.props.tempCHANGEAsync({celsius: celsius, fahrenheit: fahrenheit});
    }

    componentWillReceiveProps(newProps){
        this.props.scale === "c" ? this.setState({
            temperature : newProps.celsius
        }) : this.setState({
            temperature : newProps.fahrenheit
        });
    }

    render() {
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input value={this.state.temperature}
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

// props 对象
const mapStateToProps = (state) => {
    return {celsius: state.celsius, fahrenheit: state.fahrenheit}
};

// props 方法
const actionCreater = {tempCHANGE, tempCHANGEAsync};

// TemperatureInput得到新的Temp组件
TemperatureInput = connect(mapStateToProps, actionCreater)(TemperatureInput);
export default TemperatureInput