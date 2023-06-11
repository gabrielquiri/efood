import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { 
  Banner, 
  BannerText, 
  PerfilContainer,
} from './style'

import Header from '../../containers/Header'
import List from '../../containers/PlatesList'
import Footer from '../../containers/Footer'
import Modal from '../../components/ModalPedido'

import { useGetARestaurantQuery } from '../../service/fakeApi'
import { RootState } from '../../store'

const Perfil = () => {
  const { id } = useParams()
  const {data: retaurante} = useGetARestaurantQuery(id ? id : '')
  const { switch: carrinho } = useSelector((state: RootState) => state.pedido)
  if(!retaurante){
    return(<h1>'Loading Data ...'</h1>)
  }

  return (
    <PerfilContainer>
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
      {carrinho ? <Modal /> : <div></div>}
    </PerfilContainer>
  )
}

export default Perfil