import { createStore, compose } from 'redux';
import rootReducer from '../reducers';

const extension = window.devToolsExtension() || ((f) => f);

const store = createStore(rootReducer, compose(extension));

export default store;
