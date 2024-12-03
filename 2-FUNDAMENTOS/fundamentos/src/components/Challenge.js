const Challenge = () => {
  const A = 25
  const B = 50

  const handleSum = () => {
    console.log(`A soma de ${A} + ${B} = ${A+B}`)
  }

  return(
    <div>
      <p>A: {A}</p>
      <p>B: {B}</p>
      {console.log(`Valor de A: ${A}`)}
      {console.log(`Valor de B: ${B}`)}

      <button onClick={handleSum}>Somar</button>
    </div>
  )
}

export default Challenge