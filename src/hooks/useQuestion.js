import { useEffect, useState } from "react";
import { useCounter } from "./useCounter";
import { useFetch } from "./useFetch";


export const useQuestion = () => {

    const { data, isLoading } = useFetch();
    const { Counter, increment } = useCounter(-1,10);
    const [ currentQuestion, setcurrentQuestion ] = useState({question:"",answers:[],correct_answer:"",answered:false});
    const [ triviaStatus, settriviaStatus ] = useState(false);
    /**
     * Valida la respuesta elejida
     * @param {*} optionSelected opcion selccionada
     * @returns 
     */
    const validateAnswer = (optionSelected)=>{

        // Valida si la pregunta actual ya se respondío
        if(currentQuestion.answered || triviaStatus.finished) return;
        const {answers,correct_answer} = currentQuestion;

        if(optionSelected!==currentQuestion.correct_answer){
            answers.find((answer)=>answer.option==optionSelected).class="bad";
        }
        answers.find((answer)=>answer.option==correct_answer).class="good";
        
        // Valida si el contador llego al limite de preguntas y muesta el boton de finalizar trivia
        if(Counter==data.data.results.length) {
            settriviaStatus(true);
            return;
        }

        // Muestra el boton de siguiente pregunta
        setcurrentQuestion({...currentQuestion,answers,answered:true});

    }   

    /**
     * Funcion encargada de crear la estructura de las preguntas
     */

    const questionStructure = () => {
        if(!isLoading){
            increment(1);
            if(triviaStatus) return;
            // Oculta el boton de siguiente pregunta
            setcurrentQuestion({...currentQuestion,answered:false});

            const { question,correct_answer,incorrect_answers } = data.data.results[Counter];
            const questionStructure = {
                question,
                answers:[],
                correct_answer:"",
                answered:false
            };

            // Validando si la respuesta es de falso/verdadero o multiples
            let Options = incorrect_answers>1 ? ["A","B","C","D"] : ["A","B"];
            let randomPos = Math.floor(Math.random() * (Options.length - 0) + 0);
            
            // Mezclar opciones del array
            Options.sort(() => Math.random() - 0.5);

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
                    correct: false,
                    class: ''
                })

            });

            // Ordenando alfabeticamente las respuestas
            questionStructure.answers=questionStructure.answers.sort((a,b)=>a.option.localeCompare(b.option));

            setcurrentQuestion({...questionStructure});
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
        triviaStatus
    }
}
