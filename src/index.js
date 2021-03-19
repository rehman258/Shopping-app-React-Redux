import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import App from './App';

import productReducer from './components/reducers/productReducer';
import cartReducer from './components/reducers/cartReducer';
import cartCountReducer from './components/reducers/cartCountReducer';

import { createStore ,combineReducers,applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';


const rootReducer = combineReducers({
	productReducer,
	cartReducer,
	cartCountReducer
})

const store = createStore(rootReducer,compose(
		applyMiddleware(thunk),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))



ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
  	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
