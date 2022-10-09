import React from 'react'

export const StartTrivia = ({setStart}) => {
  return (
    <>
        <h1>Iniciar Trivia</h1>
        <button onClick={()=>setStart({start:true,score:false})}>Iniciar</button>
    </>
  )
}
