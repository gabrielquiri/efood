import { useEffect, useState } from 'react'

import Header from '../../containers/Header'
import List from '../../containers/Lista'
import Footer from '../../containers/Footer'

const Home = () => {
  const [restaurantes, setRestaurante] = useState([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
    .then((res)=> (res.json()))
    .then((res)=> (setRestaurante(res)))
  }, [])

  console.log(restaurantes)

  return (
    <>
      <Header tipo='home'/>
      <div className="container">
        <List items={restaurantes} />
      </div>
      <Footer />
    </>
  )
}

export default Home