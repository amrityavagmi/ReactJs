import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoBox from "./redux_things/app"
import {Provider} from "react-redux"

import {store} from "./store/store"
ReactDOM.render(
	<Provider store={store}>
		<TodoBox/>
	</Provider>
	,document.getElementById('root'));
