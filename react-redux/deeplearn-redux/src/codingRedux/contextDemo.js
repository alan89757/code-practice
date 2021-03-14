/**
 * Created by Derry on 2018/4/19.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Sidebar extends Component {
    render() {
        return (
            <div>
                <p>侧边栏</p>
                <Navbar></Navbar>
            </div>
        )
    }
}

class Navbar extends Component {
    static contextTypes = {
        user: PropTypes.string
    }
    render() {
        return <div>这是{this.context.user}侧边栏</div>
    }
}

class Page extends Component {
    static childContextTypes = {
        user :PropTypes.string
    }
    constructor(props){
        super(props);
        this.state = {
            user : 'Derry'
        }
    }
    getChildContext(){
        return this.state
    }
    render(){
        return (
            <div>
                <p>我是 {this.state.user}</p>
                <Sidebar></Sidebar>
            </div>
        )
    }
}

export default Page;