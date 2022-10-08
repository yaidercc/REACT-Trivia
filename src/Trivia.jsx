import { useState } from 'react'
import Questions from './components/Questions/Questions'
import { StartTrivia } from './components/StartTrivia/StartTrivia';

const Trivia = () => {
  const [Start, setStart] = useState(false);
  return (
    <>
      {Start ? <Questions/> : <StartTrivia setStart={setStart}/>}
    </>
  )
}

export default Trivia
