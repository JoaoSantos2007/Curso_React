import { useState } from "react";

const ManageData = () => {
  let someData = 20;
  console.log(someData)

  const [number, setNumber] = useState(16)
  console.log(number)

  return(
    <div>
      <div>
        <p>Valor: {someData}</p>
        <button onClick={() => {someData=25}}>Mudar Variável</button>
      </div>

      <div>
        <p>Valor: {number}</p>
        <button onClick={() => {setNumber(number+10)}}>Mudar Variável</button>
      </div>
    </div>
 )
}

export default ManageData