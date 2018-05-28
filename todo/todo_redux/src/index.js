import {applyMiddleware,createStore} from "redux";
import logger from "redux-logger";
const reducer = function(state=[],action){
	return state;
}
const middleware=applyMiddleware(logger());
const store = createStore(reducer,middleware);

store.dispatch({type:"CHANGE_NAME",payload:"aditya"})
store.dispatch({type:"CHANGE_AGE",payload:21})

