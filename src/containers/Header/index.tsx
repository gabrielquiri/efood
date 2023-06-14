import { useDispatch, useSelector } from 'react-redux'

import { 
  HeaderComponent, 
  HeadTitle, 
  HeadBrand, 
  HeadLink, 
  Container, 
  Row } from './style'

import Logo from '../../assets/logo.png'

import { interrupter } from '../../store/reducer/pedidos'
import { RootState } from '../../store'

type Props = {
  tipo: 'perfil' | 'home'
}

const Header = ({ tipo }: Props) => {
  const dispatch = useDispatch()
  const { items: pedidos } = useSelector((state: RootState) => state.pedido)
  if(tipo === 'perfil'){
    return (
      <HeaderComponent size="false">
        <div className="container">
          <Container direction="row">
            <Row>
              <HeadLink to='/' >Restaurantes</HeadLink>
            </Row>
            <Row>
              <HeadBrand to={'/'}>
                <img src={Logo} alt="EFood" />
              </HeadBrand>
            </Row>
            <Row>
            <HeadTitle className="click" size="false" 
            onClick={() => dispatch(interrupter(true))}>
              {pedidos.length} produto(s) no carrinho
            </HeadTitle>
            </Row>
          </Container>
        </div>
      </HeaderComponent>
    )
  }
  return (
  <HeaderComponent size="true">
    <div className="container">
      <Container direction="column">
        <HeadBrand to={'/'}>
          <img src={Logo} alt="EFood" />
        </HeadBrand>
        <HeadTitle size="true">Viva experiências gastronómicas no conforto da sua casa</HeadTitle>
      </Container>
    </div>
  </HeaderComponent>
)}

export default Header