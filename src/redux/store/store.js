import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/reducers.js';


const middleware = applyMiddleware(thunk);
const store = createStore(rootReducer, middleware);
export {store};