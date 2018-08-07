import {createStore} from 'redux';
import reducer from './Reducer.js';

const initValues = {
    list: [{
        status: 0,
        content: '添加你想做的事'
    }]
};

const store = createStore(reducer, initValues);

export default store;