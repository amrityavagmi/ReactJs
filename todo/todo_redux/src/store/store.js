import {createStore,combineReducers,applyMiddleware} from "redux";
import {TodoReducer} from  "../reducers/reducers"
//logger
const myLogger=(store)=>(next)=>(action)=>{
	console.log("Logged Action",action);
	next(action);
};



//store creation
export const store=createStore(combineReducers({TodoReducer}));



//store subscription
store.subscribe(()=>{
	console.log("store updated",store.getState());

});


//rendre with provider