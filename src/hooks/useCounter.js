import { useState } from 'react'

export const useCounter = ({ initialValue = 0, limit }) => {
  const [Counter, setCounter] = useState(initialValue);

  const increment = (value)=>{
    if (Counter==limit) return;
    setCounter(Counter + value);
  }
  return{
    Counter,
    increment
  }
}
