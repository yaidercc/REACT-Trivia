import { useState } from 'react'
import { Questions,Score,StartTrivia } from "./components/index";
const Trivia = () => {
  const [state, setState] = useState({start:false,showScore:false});
  const [score, setScore] = useState(10);

  if(state.showScore) return <Score setState={setState} score={score} />

  return (
    <>
      {state.start ? <Questions setState={setState} state={state} score={score} setScore={setScore}/> : <StartTrivia setStart={setState} setScore={setScore}/>}
    </>
  )
}

export default Trivia
