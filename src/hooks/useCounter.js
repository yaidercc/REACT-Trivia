import { useState } from 'react'

export const useCounter = ({ initialValue = 0 }) => {
  const [Counter, setCounter] = useState(initialValue);

  const increment = (value)=>{
    setCounter(Counter + value);
  }
  return{
    Counter,
    increment
  }
}
