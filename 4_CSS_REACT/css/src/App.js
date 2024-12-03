import './App.css';
import MyComponent from './components/MyComponent';
import { useState } from 'react'; 
import { Title } from './components/Title';
import Car from './components/Car';

function App() {
  const n = 15
  const [name] = useState("Jose");

  const redTitle = true;

  const cars = [
    {id: 1, name: "Lamborghini Veneno", brand: "Lamborghini", km: 0, color: "cinza", new: true},
    {id: 2, name: "Mercedes-Benz", brand: "Mercedes", km: 40000, color: "preta", new: false},
    {id: 3, name: "McLaren GT", brand: "McLaren", km: 65443, color: "laranja", new: false},
    {id: 4, name: "Ferrari F80", brand: "Ferrari", km: 40000, color: "vermelha", new: true}
  ]

  return (
    <div className="App">
      {/* CSS Global */}
      <h1>React com CSS</h1>

      {/* CSS de componente */}
      <MyComponent />
      <p>Este parágrafo é do App.js</p>

      {/* Inline CSS */}
      <p style={{color: "blue", padding: "25px", borderTop: "2px solid red"}}>Este elemento foi estilizado de forma inline</p>

      <p style={{color: "magenta", padding: "25px", borderTop: "2px solid red"}}>Este elemento foi estilizado de forma inline</p>

      {/* CSS Inline Dinâmico */}
      <h2 style={n < 10 ? ({color: "purple"}) : ({color: "pink"})}>CSS Dinâmico</h2>
      <h2 style={n > 10 ? ({color: "purple"}) : ({color: "pink"})}>CSS Dinâmico</h2>
      <h2 style={name === "Jose" ? ({color: "green", backgroundColor: "#000"}) : null}>CSS Dinâmico</h2>

      {/* Classe dinâmica */}
      <h2 className={redTitle ? "red-title" : "title"}>Este título vai ter classe dinâmica</h2>

      <h2 className={!redTitle ? "red-title" : "title"}>Este título vai ter classe dinâmica</h2>

      {/* CSS Modules */}
      <Title />
      <h2 className='my_title'>Testando</h2>

      {/* Challenge */}
      {cars.map((car) => (
        <Car key={car.id} name={car.name} brand={car.brand} color={car.color} km={car.km} newCar={car.new}/>
      ))}
    </div>
  );
}

export default App;
