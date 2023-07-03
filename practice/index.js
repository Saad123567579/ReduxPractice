import {createStore ,applyMiddleware} from 'redux';
import pkg from 'redux-logger';
const {logger} = pkg;
import thunk from 'redux-thunk';

const store = createStore(reducer,applyMiddleware(logger,thunk.default));

function reducer(state={amount:1},action){
    if(action.type==="init")
    return { ...state, amount: action.payload };
    
    return state;
}

let arr = [];
store.subscribe(()=>{  //runs automatically everytime a state chnges no need to clog every time 
    console.log(store.getState());
    
})

//action creaters 
function increment(){
    return {type:"increment"};
}
function init(value){
    return {type:"init",payload:500};
}

function fetchData(id) {
    return async (dispatch,getState) =>{
    try {
      const response = await fetch(`http://localhost:3000/accounts/${id}`);
      const data = await response.json();
      
      dispatch({type:"init",payload:data.amount})
    } catch (error) {
      console.error("Unable to ");
    }
}
  }

setInterval(() => {
    store.dispatch(fetchData(2));   // gives a new action

}, 3000);



 
  