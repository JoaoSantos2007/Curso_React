import "./Car.css"

const Car = ({ name, brand, km, color, newCar }) => {
  return (
    <div>
      <h2 className="car__title">{name}</h2>
      <p className="car__text">Marca: {brand}</p>
      <p className="car__text">Cor: {color}</p>
      <p className="car__text">KM: {km}km</p>
      {newCar && <p className="car__text">É novo!</p>}
    </div>
  )
}

export default Car