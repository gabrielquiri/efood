import { useParams } from 'react-router-dom'

import { Banner, BannerText } from './style'

import Header from '../../containers/Header'
import List from '../../containers/PlatesList'
import Footer from '../../containers/Footer'

import { useGetARestaurantQuery } from '../../service/fakeApi'

const Perfil = () => {
  const { id } = useParams()
  const {data: retaurante} = useGetARestaurantQuery(id ? id : '')
  
  if(!retaurante){
    return(<h1>'Loading Data ...'</h1>)
  }

  return (
    <div>
      <Header tipo='perfil'/>
      <Banner img={retaurante.capa}>
        <div className="modal">
        <div className="container">
          <BannerText>{retaurante.tipo}</BannerText>
          <BannerText><span>{retaurante.titulo}</span></BannerText>
        </div>
        </div>
      </Banner>
      <div className="container">
        <List items={retaurante.cardapio}/>
      </div>
      <Footer />
    </div>
  )
}

export default Perfil