import { useEffect,useState } from 'react'
import { useCounter, useFetch } from '../../hooks/index'
import Answers from '../Answers/Answers';

const Questions = () => {
    const { data, isLoading } = useFetch();
    const { Counter, increment } = useCounter(-1);
    const [ currentQuestion, setcurrentQuestion] = useState({question:"",answers:[]});

    const questionStructure = () => {
        if(!isLoading){

            increment(1);
            const { question,correct_answer,incorrect_answers } = !!data && data.data.results[Counter];
            console.log(data.data.results[Counter]);
            const questionStructure = {
                question,
                answers:[]
            };

            // Validando si la respuesta es de falso/verdadero o multiples
            let Options = incorrect_answers>1 ? ["A","B","C","D"] : ["A","B"];

            // Revolver opciones del array
            Options.sort(() => Math.random() - 0.5);
            let randomPos = Math.floor(Math.random() * (Options.length - 0) + 0);

            /**
             *  Se elije una opcion aleatoria para la respuesta correcta
             *  @class es para pintar la opcion de un color dependiendo de la opcion elejida
             */
            questionStructure.answers.push({
                option: Options[randomPos],
                answer: correct_answer,
                correct: true,
                class: ''
            })

            // Se elimina la opcion que fue elejida para la respuesta correcta
            Options=Options.filter(item=>item!==Options[randomPos]);
            
            Options.map((item,index)=>{

                questionStructure.answers.push({
                    option: item,
                    answer: incorrect_answers[index],
                    correct: true,
                    class: ''
                })

            });

            setcurrentQuestion(questionStructure);
        }
        
    }

    useEffect(() => {
        questionStructure();
    }, [isLoading])
    

    return (
        <>
            <h1>{currentQuestion.question}</h1>
            {currentQuestion.answers.map(item=>(
                <Answers 
                    option={item.option}
                    answer={item.answer}
                    correct={item.correct}
                    className={item.class}
                />
            ))}
            {/* <button onClick={()=>questionStructure()}>yaider</button> */}
        </>
    )
}

export default Questions
