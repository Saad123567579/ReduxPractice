//app.js
import './App.css';
import { useSelector,useDispatch } from 'react-redux';

import React,{useState} from 'react';
import { increment,increment10,decrement,decrement10 } from './redux/actions';
import Logic from './Logic';
import Beneath from './Beneath';
function App() {
  const v = useSelector(state=>state.value); //useSelector for getting values of the state 

  return (
<>
    <h1>Current Value:{v}</h1>
    <Logic  />
    <Beneath  />
    </>
  );
}

export default App;
