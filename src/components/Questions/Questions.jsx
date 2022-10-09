import { useEffect,useState } from 'react'
import { useCounter, useFetch,useQuestion } from '../../hooks/index'
import Answers from '../Answers/Answers';

/**
 * TODO: validar que al selccionar una respuesta no se pueda volver a seleccionar otra respuesta
 */
const Questions = () => {
    const { questionStructure,validateAnswer,isLoading,currentQuestion,answered } = useQuestion();

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
            {answered && <button onClick={()=>questionStructure()}>Siguiente</button> }
        </>
    )
}

export default Questions
