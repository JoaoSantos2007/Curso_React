const Events = () => {
  const handleMyEvent = (e) => {
    console.log(e)

    console.log("Botão Acionado!")
  }

  const renderSomething = (x) => {
    if(x){
      return <h1>Texto 1</h1>
    }else{
      return <h1>Texto 2</h1>
    }
  }

  return(
    <div>
      <div>
        <button onClick={handleMyEvent}>Click!</button>
      </div>
      <div>
        <button onClick={() => {console.log("Click inline!")}}>Click Here!</button>
      </div>

      {renderSomething(true)}
      {renderSomething(false)}
    </div>
  )
}

export default Events