//app.js
import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import Test from './Test';
import React,{useState} from 'react';

function App() {
  const v = useSelector(state=>state.value); //useSelector for getting values of the state 

  return (
<>
    <Test />
    </>
  );
}

export default App;
