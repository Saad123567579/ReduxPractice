//app.js
import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import Test from './Test';
import React,{useState} from 'react';
import Admin from './Admin';
function App() {
  const v = useSelector(state=>state.value); //useSelector for getting values of the state 

  return (
<>
    <Admin/>
    </>
  );
}

export default App;
