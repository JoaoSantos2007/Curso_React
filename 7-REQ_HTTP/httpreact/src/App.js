import './App.css';
import { useState } from 'react';

import { useFetch } from './hooks/useFetch.js';

function App() {
  const url = 'http://localhost:3000/products'

  // const [products, setProducts] = useState([])
  
  // 4 - Custom Hook e 5 - Refatorar Post
  const {data:items, httpConfig, loading, error} = useFetch(url)

  const [name, setName] = useState()
  const [price, setPrice] = useState()

  // 1 - Resgatando dados
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch(url)
  //     const data = await res.json()

  //     setProducts(data);
  //   }

  //   fetchData()
  // }, [])

  // 2 - Adicionando Produto
  const handleSubmit = async (event) => {
    event.preventDefault()

    const product = {
      name,
      price
    }

    // const res = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(product)
    // })

    // const newProduct = await res.json()

    // 3 - Carregamento Dinâmico
    // setProducts((actualProducts) => [...actualProducts, newProduct])

    // 5 - refatorar post
    httpConfig(product, "POST");


    setName("")
    setPrice("")
  }

  const deleteProduct = async (id) => {
    httpConfig(id, "DELETE");
  }
  
  return (
    <div className="App">
      <h1>Lista de Produtos</h1>

      {/* 6 - state de loading */}
      {loading && <p>Carregando dados...</p>}
      {error && <p>{error}</p>}

      <ul>
        {items &&
          items.map((item) => (
            <li key={item.id}>
              {item.name} - R$: {item.price}
              <button onClick={() => deleteProduct(item.id)}>Delete</button>
            </li>
          ))}
      </ul>

      <div className="add-product">
        <p>Adicionar produto:</p>
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              value={name}
              name="name"
              onChange={(event) => setName(event.target.value)}
            />
          </label>
          <label>
            Preço:
            <input
              type="number"
              value={price}
              name="price"
              onChange={(event) => setPrice(event.target.value)}
            />
          </label>

          {/* 7 - state de loading no post */}
          {loading ? <p>Aguarde!</p> : <input type="submit" value="Criar" />}
        </form>
      </div>
    </div>
  );
}

export default App;
