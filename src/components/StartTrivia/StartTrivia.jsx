import React from 'react'

export const StartTrivia = ({setStart,setScore}) => {
  const startHandle=()=>{
    setStart({start:true,showScore:false});
    setScore(10);
  }
  return (
      <div className='main-container center-column'>
        <div className='main-content center-column'>
          <img src="/assets/start.svg" alt="Imagen inicio trivia" height={200} width={150}  />
          <h1>Start Trivia</h1>
          <button className='btn btn-primary' onClick={()=>startHandle()}>Start</button>
        </div>
      </div>
    
  )
}
