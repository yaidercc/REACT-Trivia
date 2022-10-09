import { useState } from 'react'
import Questions from './components/Questions/Questions'
import Score from './components/Results/Score';
import { StartTrivia } from './components/StartTrivia/StartTrivia';

const Trivia = () => {
  const [state, setState] = useState({score:false,start:false});

  if(state.score) return <Score setState={setState} score={state.score} />

  return (
    <>
      {state.start ? <Questions setScore={setState}/> : <StartTrivia setStart={setState}/>}
    </>
  )
}

export default Trivia
