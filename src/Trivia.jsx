import { useState } from 'react'
import { Questions,Score,StartTrivia } from "./components/index";
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
