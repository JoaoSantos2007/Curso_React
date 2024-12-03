import { useState } from 'react'

const ConditionalRender = () => {
  const [x, setX] = useState(true)

  const [name, setName] = useState("João")

  return (
    <div>
      <h1>Isso será exibido?</h1>
      {x && <p>Se x for, true, sim!</p>}
      {!x && <p>Agora x é falso!</p>}
      <button onClick={() => setX(!x)}>Mudar X</button>

      <h1>IF Ternário</h1>
      {name === "João" ? <p>É o Cara!</p> : <p>Não é Ele</p>}
      <button onClick={() => setName("José")}>Mudar Nome</button>
    </div>
  )
}

export default ConditionalRender