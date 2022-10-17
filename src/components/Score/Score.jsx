import "./Score.scss";
export const Score = ({score,setState}) => {
  return (
    <div className="main-container center-column">
      <div className="main-content center-column">
        <img src="/assets/winners.svg" alt="Imagen ganadores trivia" />
        <h1>Results</h1>
        <p> You got <span className="good">{score}</span> correct Answers </p>
        <button 
          className="btn btn-secondary" 
          onClick={()=>setState({score:false,start:false})}>
            Home
          </button>
      </div>
    </div>
  )
}
