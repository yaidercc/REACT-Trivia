export const Score = ({score,setState}) => {
  return (
    <div>
      <h1>Score</h1>
      <p> {score}/10 </p>
      <button onClick={()=>setState({score:false,start:false})}>Volver</button>
    </div>
  )
}
