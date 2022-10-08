import React from 'react'
import PropTypes from 'prop-types'
import './Answer.scss'

const Answers = ({option, answer, correct, className,validate }) => {
  return (
    <button className={className=="" ?'Container-answer': `Container-answer ${className}`}  onClick={()=>validate(option)}>
      <p className='opc'>{option}</p>
      <p className='answer'>{answer}</p>
      <p className='icon'>{correct ? 'bien' : 'Mal'}</p>
    </button>
  )
}

export default Answers

Answers.propTypes = {
  option: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  correct: PropTypes.bool.isRequired,
  className:PropTypes.string.isRequired,
  validate: PropTypes.func.isRequired
}
