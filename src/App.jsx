import { useState, useEffect } from 'react'
import Produto from './components/Produto'


function App() {
  const [produtos, setProdutos] = useState(null)

  useEffect(() => {
    console.log("Buscando dados")
    fetch('https://dummyjson.com/products/1')
      .then(resp => {
        console.log("Os dados chegaram")
        if(resp.ok) {
          return resp.json()
        }
        throw new Error("Algo deu errado")
      })
      .then(dados => setProdutos(dados))
      .catch(e => console.error(e))

  }, [])


  return (
    <>
      { produtos ? (
        <Produto p_info={produtos} />
      ): (
        "Carregando"
      )}
    </>
  )
}

export default App
