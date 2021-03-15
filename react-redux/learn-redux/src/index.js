import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import {tempChange} from "./redux/index.redux";
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Calculator from './eventBoiling/calculator'
// import './redux/index';



const store = createStore(tempChange, compose(applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : ()=>{}));

ReactDOM.render(
    (<Provider store={store}>
        <Calculator />
    </Provider>)
    ,
    document.getElementById('root'));
registerServiceWorker();


