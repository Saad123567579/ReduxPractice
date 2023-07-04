import React from 'react'
import {useSelector,useDispatch} from 'react-redux';
import { decrement, decrement10, increment, increment10 } from './slices/accountSlice';
const Test = () => {
    const amount = useSelector(state=>state.account.amount);
    console.log(amount);
    const dispatch = useDispatch();
    const handleClick = (event) => {
        
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
    <div>
      <button onClick={handleClick} name="dec">Decrement</button>
      <button onClick={handleClick} name="dec10">Decrement10</button>
      <h1>{amount}</h1>
      <button onClick={handleClick} name="inc">Increment</button>
      <button onClick={handleClick} name="inc10">Increment10</button>
    </div>
  )
}

export default Test
