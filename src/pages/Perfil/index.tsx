import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { Banner, BannerText } from './style'

import Header from '../../containers/Header'
import List from '../../containers/PlatesList'
import Footer from '../../containers/Footer'

import Restaurants from '../../models/Restaurants'

const Perfil = () => {
  const { id } = useParams()
  const [pratos, setPratos] = useState<Restaurants>()
  
  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
    .then((res) => (res.json()))
    .then((res) => (setPratos(res)))
  }, [id])
  
  if(!pratos){
    return(<h1>'Loading Data ...'</h1>)
  }

  return (
    <div>
      <Header tipo='perfil'/>
      <Banner img={pratos.capa}>
        <div className="modal">
        <div className="container">
          <BannerText>{pratos.tipo}</BannerText>
          <BannerText><span>{pratos.titulo}</span></BannerText>
        </div>
        </div>
      </Banner>
      <div className="container">
        <List items={pratos.cardapio}/>
      </div>
      <Footer />
    </div>
  )
}

export default Perfil