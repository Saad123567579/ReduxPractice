import './App.css';
import React,{useState} from 'react';
import { increment,increment10,decrement,decrement10 } from './redux/actions';
const Logic = ({store}) => {
    const [val,setval] = useState(store.getState().value);
    console.log(store.getState());
    const handleClick = (event) =>{
        if(event.target.name==="dec"){
            store.dispatch(decrement());
        }
        if(event.target.name==="dec10"){
            store.dispatch(decrement10());

        }
        if(event.target.name==="inc"){
            store.dispatch(increment());

        }
        if(event.target.name==="inc10"){
            store.dispatch(increment10());

        }
    }
    store.subscribe(()=>{  //runs automatically everytime a state chnges no need to clog every time 
     setval(store.getState().value)
        
    })
    return (
     <>
     <button onClick={handleClick} name="dec"> Decrement </button>
     <button onClick={handleClick} name="dec10"> Decrement10 </button>
        <h1>Current Value:{val}</h1>

     <button onClick={handleClick} name="inc">Increment </button>
     <button onClick={handleClick} name="inc10">Increment10 </button>

     </>
    );
}

export default Logic
