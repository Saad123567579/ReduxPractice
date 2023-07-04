//app.js
import './App.css';
import React,{useState} from 'react';
import { increment,increment10,decrement,decrement10 } from './redux/actions';
import { useSelector,useDispatch } from 'react-redux';

function Beneath() {
    const v = useSelector(state=>state.value); //useSelector for getting values of the state 

  return (
    <h1>Current Value:{v}</h1>
  );
}

export default Beneath;
