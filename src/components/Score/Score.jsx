import "./Score.scss";
export const Score = ({score,setState}) => {
  return (
    <div className="main-container center-column">
      <div className="main-content center-column">
        <img src="/assets/undraw_winners_ao2o 2.svg" alt="Imagen ganadores trivia" />
        <h1>Resultados</h1>
        <p> Acertaste <span className="good">{score}</span> preguntas </p>
        <button className="btn btn-secondary" onClick={()=>setState({score:false,start:false})}>Volver</button>
      </div>
    </div>
  )
}
