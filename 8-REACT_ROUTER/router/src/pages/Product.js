import { Link, useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch.js'

const Product = () => {
  // 4 - Rota Dinâmica
  const { id } = useParams();

  // 5 - Carregamento dado individual
  const url = 'http://localhost:3000/products/' + id
  const { data: product, loading, error } = useFetch(url)

  console.log(product)
  
  return (
    <>
      <p>ID do produto: {id}</p>
      {error && <p>Ocorreu um erro...</p>}
      {loading && <p>Carregando...</p>}
      {product && (
        <div>
          <h1>{product.name}</h1>
          <p>R${product.price}</p>
          {/* 6 - Nested Routes */}
          <Link to={`/products/${id}/info`}>Mais informações</Link>
        </div>
      )}
    </>
  )
}

export default Product
