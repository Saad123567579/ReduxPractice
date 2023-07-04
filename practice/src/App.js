//app.js
import './App.css';
import React,{useState} from 'react';
import { increment,increment10,decrement,decrement10 } from './redux/actions';
import Logic from './Logic';
import Beneath from './Beneath';
function App({store}) {
  const [val,setval] = useState(store.getState().value);
  console.log(store.getState());
  store.subscribe(()=>{  //runs automatically everytime a state chnges no need to clog every time 
    setval(store.getState().value)
       
   })
  return (
<>
    <h1>Current Value:{val}</h1>
    <Logic  store={store} />
    <Beneath store={store}  />
    </>
  );
}

export default App;
