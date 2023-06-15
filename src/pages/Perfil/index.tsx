import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { FadeLoader } from 'react-spinners'

import * as S from './style'

import Header from '../../containers/Header'
import List from '../../containers/PlatesList'
import Footer from '../../containers/Footer'
import Modal from '../../components/ModalPedido'

import { useGetARestaurantQuery } from '../../service/fakeApi'
import { RootState } from '../../store'
import { colors } from '../../style'

const Perfil = () => {
  const { id } = useParams()
  const {data: restaurant} = useGetARestaurantQuery(id ? id : '')
  const { switch: isOpen } = useSelector((state: RootState) => state.pedido)
  if(!restaurant){
    return(
      <S.PerfilContainer>
        <Header tipo='perfil'/>
        <div className='container'>
          <div className='center'>
            <FadeLoader color={colors.colorDark}/>
          </div>
        </div>
        <Footer />
        {isOpen ? <Modal /> : <div></div>}
      </S.PerfilContainer>
    )
  }

  return (
    <S.PerfilContainer>
      <Header tipo='perfil'/>
      <S.Banner img={restaurant.capa}>
        <div className="modal">
        <div className="container">
          <S.BannerText>{restaurant.tipo}</S.BannerText>
          <S.BannerText><span>{restaurant.titulo}</span></S.BannerText>
        </div>
        </div>
      </S.Banner>
      <div className="container">
        <List items={restaurant.cardapio}/>
      </div>
      <Footer />
      {isOpen ? <Modal /> : <div></div>}
    </S.PerfilContainer>
  )
}

export default Perfil