import {creatStore} from "redux";

const reducer= function(){

}
const store = creatStore(reducer,0);
store.subscribe(()=>{
	console.log("store changed",store.getState()
})

store.dispatch({type:"INC",payload:1})