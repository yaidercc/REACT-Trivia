
import { Answers,BtnFinish,BtnNext } from '../index';

export const Question = ({questionStructure,currentQuestion,lastQuestion,triviaStatus,setState,state,setScore,score,validateAnswer}) => {
    console.log(lastQuestion);
  return (
    <>
        <div className='center-column'>
            <h4>Category: <span>{currentQuestion.category}</span></h4>
            <img src="/assets/trivia.svg" alt="Imagen inicio trivia" height={200} width={150}  />
        </div>
        <h3>{currentQuestion.question}</h3>
        {currentQuestion.answers.map(item=>(
            <Answers 
                key={item.option}
                option={item.option}
                answer={item.answer}
                correct={item.correct}
                className={item.class}
                validate={validateAnswer}
                setScore={setScore}
                score={score}
                answered={currentQuestion.answered}
            />
        ))}
        { lastQuestion
            ? <BtnFinish answered={currentQuestion.answered} setState={setState} state={state} /> 
            : <BtnNext answered={currentQuestion.answered} questionStructure={questionStructure}/> 
        }
    </>
  )
}
