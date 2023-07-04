//app.js
import './App.css';
import React,{useState} from 'react';
import { increment,increment10,decrement,decrement10 } from './redux/actions';

function App({store}) {
  const [val,setval] = useState(store.getState.value());
  console.log(store.getState());
  return (
    <h1>Current Value:{val}</h1>
  );
}

export default App;
