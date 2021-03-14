import React from 'react';
import ReactDOM from 'react-dom';
// import { createStore, applyMiddleware, compose } from 'redux';
import { createStore, applyMiddleware } from './codingRedux/myRedux';

// import thunk from 'redux-thunk';
import thunk from './codingRedux/myReduxThunk';
import log from './codingRedux/myReduxLog';
// import { Provider } from 'react-redux';
import { Provider } from './codingRedux/myReactRedux';

import {tempChange} from "./redux/index.redux";
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Calculator from './eventBoiling/calculator'
// import './redux/index';
import Page from './codingRedux/contextDemo';

/*const store = createStore(tempChange, compose(applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : ()=>{}));*/


// ReactDOM.render(<Page/>,document.getElementById('root'));


const store = createStore(tempChange, applyMiddleware(thunk, log));

ReactDOM.render(
    (<Provider store={store}>
        <Calculator />
    </Provider>)
    ,
    document.getElementById('root'));
registerServiceWorker();


