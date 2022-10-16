
import {useQuestion } from '../../hooks/index'
import {Answers} from '../index';


export const Questions = ({setState,state,score,setScore}) => {

    const { 
        questionStructure,
        validateAnswer,
        currentQuestion,
        triviaStatus
        } 
    = useQuestion();
    

    return (
        <>
            <h1>{currentQuestion.question}</h1>
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
            {currentQuestion.answered && <button onClick={()=>questionStructure()}>Siguiente</button> }
            {triviaStatus && <button onClick={()=>setState({...state,showScore:true})}>Terminar</button> }
            {/* {triviaStatus.finished && <button onClick={()=>setScore({start:true, score})}>Terminar</button> } */}
        </>
    )
}

