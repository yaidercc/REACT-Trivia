import { FaFlag } from 'react-icons/fa';

export const BtnFinish = ({setState,answered,state}) => {
  return (
    <button 
        className={answered ?'btn btn-secondary':'btn disabled'} 
        disabled={!answered}
        onClick={()=>setState({...state,showScore:true})}>
            <FaFlag/>
            <span>Finish</span>
    </button> 
  )
}
