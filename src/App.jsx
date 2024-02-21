import { useState, useEffect } from 'react'
import Produto from './components/Produto'


function App() {
  const [produtos, setProdutos] = useState([])
  const [ultimo, setUltimo] = useState(1)

  useEffect(() => {
    buscarProdutos(ultimo)
    if (ultimo < 10) {
      setUltimo(ultimo + 1)
    }
  }, [ultimo])

  function buscarProdutos(p = 1) {
    fetch(`https://dummyjson.com/products/${p}`)
      .then(resp => {
        if(resp.ok) {
          return resp.json()
        }
        throw new Error("Algo deu errado")
      })
      .then(dados => setProdutos(prod => prod.concat(dados)))
      .catch(e => console.error(e))
  }


  return (
    <div className='page'>
      { produtos?.map((p, idx) => <Produto key={idx} p_info={p} />) }
    </div>
  )
}

export default App
