import './App.css';
import React,{useState} from 'react';
import { useSelector ,useDispatch} from 'react-redux';

import { increment,increment10,decrement,decrement10 } from './redux/actions';
const Logic = () => {
    const dispatch = useDispatch();  //useDispatch for dispatch property 
    const v = useSelector(state=>state.value); //useSelector for getting values of the state 
  
    const handleClick = (event) =>{
        if(event.target.name==="dec"){
        dispatch(decrement());
        }
        if(event.target.name==="dec10"){
        dispatch(decrement10());

        }
        if(event.target.name==="inc"){
        dispatch(increment());

        }
        if(event.target.name==="inc10"){
        dispatch(increment10());

        }
    }
    
    return (
     <>
     <button onClick={handleClick} name="dec"> Decrement </button>
     <button onClick={handleClick} name="dec10"> Decrement10 </button>
        <h1>Current Value:{v}</h1>

     <button onClick={handleClick} name="inc">Increment </button>
     <button onClick={handleClick} name="inc10">Increment10 </button>

     </>
    );
}

export default Logic
