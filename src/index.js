import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import todos from './reducers/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import'./App.css';
const store=createStore(todos) 
ReactDOM.render(
    <Provider store={store}>
    <App/>
    </Provider>,
    document.getElementById('root')
)