import { FaChevronCircleRight } from 'react-icons/fa';

export const BtnNext = ({answered,questionStructure}) => {
  return (
    <button 
        className={answered ?'btn btn-primary':'btn disabled'} 
        disabled={!answered} 
        onClick={()=>questionStructure()}>
            <FaChevronCircleRight/>
            <span>Next</span>
    </button> 
  )
}
