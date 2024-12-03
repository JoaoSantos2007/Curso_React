import { useState } from 'react';
import './App.css';
import City from "./assets/city.png"
import ConditionalRender from './components/ConditionalRender.js';
import ListRender from './components/ListRender.js';
import ManageData from './components/ManageData.js';
import ShowUserName from './components/ShowUserName.js';
import CarDetails from './components/CarDetails.js';
import Fragments from './components/Fragments.js';
import Container from './components/Container.js';
import ExecuteFunction from './components/ExecuteFunction.js';
import Message from './components/Message.js';
import ChangeMessageState from './components/ChangeMessageState.js';
import UserDetails from './components/UserDetails.js';

function App() {
  const name = "Pedro"
  const [userName] = useState("Maria")

  const cars = [
    {id: 1, brand:"Mercedes", color: "Preta", newCar: true, km: 0},
    {id: 2, brand:"Toyota", color: "Branca", newCar: false, km: 45000},
    {id: 3, brand:"McLaren", color: "Laranja", newCar: true, km: 0},
  ]

  function showMessage() {
    console.log("Evento do componente pai")
  }

  const [message, setMessage] = useState("")

  const handleMessage = (msg) => {
    setMessage(msg)
  }

  const usuarios = [
    {id: 1, name: "João", age: 34, role: "dev"},
    {id: 2, name: "Joaquim", age: 53, role: "historiador"},
    {id: 3, name: "José", age: 12, role: "pesquisador"},
  ]

  return (
    <div className="App">
      <h1>Avançando no React</h1>

      {/* Imagem em public */}
      <div>
        <img src="/racket.jpg" alt="Raquete de tênis" />
      </div>

      {/* Imagem em public */}
      <div>
        <img src={City} alt="Cidade" />
      </div>

      <ManageData />
      <ListRender />
      <ConditionalRender />

      {/* props */}
      <ShowUserName name={name} userName={userName}/>

      {/* destructuring */}
      <CarDetails brand="RedBull" km={100000} color="Amarelo" newCar={false}/>

      {/* reaproveitando */}
      <CarDetails brand="Lamborghini" km={0} color="Cinza" newCar={true}/>
      <CarDetails brand="Ferrari" km={200000} color="Vermelha" newCar={false}/>

      {/* loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails key={car.id} brand={car.brand} km={car.km} color={car.color} newCar={car.newCar} />
      ))}

      {/* fragments */}
      <Fragments propFragment="teste"/>

      {/* children */}
      <Container myValue="testing">
        <p>E este é o conteúdo</p>
      </Container>
      <Container myValue="testing2">
        <h5>Testando o container</h5>
      </Container>

      {/* executar função */}
      <ExecuteFunction myFunction={showMessage} />

      {/* state lift */}
      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage}/>

      {/* desafio */}
      {usuarios.map(user => (
        <UserDetails key={user.id} name={user.name} age={user.age} role={user.role}/>
      ))}
    </div>
  );
}

export default App;
