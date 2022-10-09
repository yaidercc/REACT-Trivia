
import { useEffect } from 'react';
import { useState } from 'react';
import {useQuestion } from '../../hooks/index'
import {Answers} from '../index';


export const Questions = ({setScore}) => {
    const [tr, settr] = useState(false)
    const { 
        questionStructure,
        validateAnswer,
        currentQuestion,
        triviaStatus,
        score
        } 
    = useQuestion();

    useEffect(() => {
        setTimeout(() => {
            console.log("From here: "+score);
        }, 2000);
    }, [tr])
    

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
                />
            ))}
            {currentQuestion.answered && <button onClick={()=>questionStructure()}>Siguiente</button> }
            {triviaStatus.finished && <button onClick={()=>settr(true)}>Terminar</button> }
            {/* {triviaStatus.finished && <button onClick={()=>setScore({start:true, score})}>Terminar</button> } */}
        </>
    )
}

