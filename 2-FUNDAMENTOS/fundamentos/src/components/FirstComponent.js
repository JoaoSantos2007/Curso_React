//Arquivos
import MyComponent from "./MyComponent.js";

const FirstComponent = () => {
  //Função React

  return(
    <div>
      {/* Comentário Do React*/}
      <h1 className="titulo">Hello World! My first React Component</h1>
      <MyComponent />
    </div>
  )
}

export default FirstComponent;