import axios from 'axios'
import { useEffect, useState } from "react"

export const useFetch = () => {
    const [state, setstate] = useState({
        data: null,
        isLoading: true
    })
    const getFetch= async()=>{
        setstate({
            ...state,
            isLoading: true
        })
        const data = await axios.get("https://opentdb.com/api.php?amount=2");

        setstate({
            data,
            isLoading:false
        });
    }

  useEffect(() => {
    getFetch();
  }, [])

  return{
    ...state
  };
  
}

