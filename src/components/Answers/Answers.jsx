import React from 'react'
import { FaRegCheckCircle, FaTimesCircle} from 'react-icons/fa';
import PropTypes from 'prop-types'
import './Answer.scss'

export const Answers = ({option, answer, correct, className,validate, setScore,score,answered }) => {

  const validateAnswer=()=>{
    correct || setScore(score-1);
    validate(option);
  }
  console.log(answered);
  return (
      <button className={className=="" ?'btn btn-secondary answer': `btn btn-secondary answer ${className}`}  onClick={()=>validateAnswer()}>
        <p className='opc'>{option}</p>
        <p className='answer'>{answer}</p>
        {answered 
          && 
            <p className='icon'> 
              { correct ? <FaRegCheckCircle /> : <FaTimesCircle/>}
            </p>
        }
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
