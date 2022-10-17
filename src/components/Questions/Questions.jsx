
import { useQuestion } from '../../hooks/index';
import { Loading, Question} from '../index';
import "./Questions.scss";

export const Questions = ({setState,state,score,setScore}) => {

    const { 
        questionStructure,
        validateAnswer,
        currentQuestion,
        triviaStatus,
        isLoading,
        lastQuestion
        } 
    = useQuestion();

    return (
        <div className='main-container center-column'>
                <div className='main-content center-column'>
                    { 
                        !isLoading
                            ?
                                <Question 
                                    questionStructure={questionStructure} 
                                    currentQuestion={currentQuestion} 
                                    lastQuestion={lastQuestion}
                                    triviaStatus={triviaStatus}
                                    setState={setState}
                                    state={state}
                                    score={score}
                                    setScore={setScore}
                                    validateAnswer={validateAnswer}
                                    />
                            :
                                <Loading/>
                    }
                </div>
        </div>
    )
}

