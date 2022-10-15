import React from 'react'

export const StartTrivia = ({setStart,setScore}) => {
  const startHandle=()=>{
    setStart({start:true,showScore:false});
    setScore(10);
  }
  return (
    <>
        <h1>Iniciar Trivia</h1>
        <button onClick={()=>startHandle()}>Iniciar</button>
    </>
  )
}
