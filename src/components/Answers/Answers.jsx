import React from 'react'
import PropTypes from 'prop-types'
import './Answer.scss'

export const Answers = ({option, answer, correct, className,validate, setScore,score }) => {

  const validateAnswer=()=>{
    correct || setScore(score-1);
    validate(option);
    console.log(score);
  }
  return (
    <button className={className=="" ?'Container-answer': `Container-answer ${className}`}  onClick={()=>validateAnswer()}>
      <p className='opc'>{option}</p>
      <p className='answer'>{answer}</p>
      <p className='icon'>{correct ? 'bien' : 'Mal'}</p>
    </button>
  )
}


Answers.propTypes = {
  option: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  correct: PropTypes.bool.isRequired,
  className:PropTypes.string.isRequired,
  validate: PropTypes.func.isRequired
}
