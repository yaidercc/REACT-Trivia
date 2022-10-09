import { useEffect, useState } from "react";
import { useCounter } from "./useCounter";
import { useFetch } from "./useFetch";

export const useQuestion = () => {

    const { data, isLoading } = useFetch();
    const { Counter, increment } = useCounter(-1);
    const [ currentQuestion, setcurrentQuestion ] = useState({question:"",answers:[],correct_answer:""});
    const [ answered, setanswered ] = useState(false);

    const validateAnswer = (optionSelected)=>{

        // Valida si la pregunta actual ya se respondío
        if(answered) return;

        const {answers,correct_answer} = currentQuestion;

        if(optionSelected!==currentQuestion.correct_answer){
            answers.find((answer)=>answer.option==optionSelected).class="bad";
        }

        answers.find((answer)=>answer.option==correct_answer).class="good";
        setcurrentQuestion({...currentQuestion,answers})

        setanswered(true);
    }   

    const questionStructure = () => {
        if(!isLoading){
            setanswered(false);
            increment(1);
            const { question,correct_answer,incorrect_answers } = !!data && data.data.results[Counter];
            
            const questionStructure = {
                question,
                answers:[],
                correct_answer:""
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

            // Guardando la opcion de la respuesta correcta
            questionStructure.correct_answer=Options[randomPos];

            // Se elimina la opcion que fue elejida para la respuesta correcta
            Options = Options.filter(item=>item!==Options[randomPos]);
            
            Options.map((item,index)=>{

                questionStructure.answers.push({
                    option: item,
                    answer: incorrect_answers[index],
                    correct: true,
                    class: ''
                })

            });

            questionStructure.answers=questionStructure.answers.sort((a,b)=>a.option-b.option);

            setcurrentQuestion(questionStructure);
        }
        
    }
    
    useEffect(() => {
        questionStructure();
    }, [isLoading])

    return{
        questionStructure,
        validateAnswer,
        isLoading,
        currentQuestion,
        answered
    }
}
