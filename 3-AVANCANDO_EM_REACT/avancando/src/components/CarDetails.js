const CarDetails = ({brand, km, color, newCar}) => {
  return (
    <div>
      <h2>Especificações do Carro:</h2>
      <ul>
        <li>Marca: {brand}</li>
        <li>KM: {km}</li>
        <li>Cor: {color}</li>
      </ul>
      {newCar && <p>Carro novo!</p>}
    </div>
  )
}

export default CarDetails