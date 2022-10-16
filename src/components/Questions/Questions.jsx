
import {useQuestion } from '../../hooks/index'
import {Answers, Loading} from '../index';
import "./Questions.scss"

export const Questions = ({setState,state,score,setScore}) => {

    const { 
        questionStructure,
        validateAnswer,
        currentQuestion,
        triviaStatus,
        isLoading
        } 
    = useQuestion();
    

    return (
        <div className='main-container center-column'>
                <div className='main-content center-column'>
                    { !isLoading
                            ?
                            <>
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
                                    { triviaStatus ||
                                        <button 
                                        className={currentQuestion.answered ?'btn btn-primary':'btn disabled'} 
                                        disabled={!currentQuestion.answered} 
                                        onClick={()=>questionStructure()}>
                                            Siguiente
                                        </button> 
                                    }
                                    {triviaStatus && 
                                        <button 
                                            className='btn btn-secondary'
                                            onClick={()=>setState({...state,showScore:true})}>
                                                Terminar
                                        </button> 
                                    }
                            </>
                            :
                            <Loading/>
                    }
                    
                </div>

        </div>
    )
}

