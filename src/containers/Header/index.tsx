import { 
  HeaderComponent, 
  HeadTitle, 
  HeadBrand, 
  HeadLink, 
  Container, 
  Row } from './style'

import Logo from '../../assets/logo.png'

type Props = {
  tipo: 'perfil' | 'home'
}

const Header = ({ tipo }: Props) => {
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
            <HeadTitle size="false">0 produto(s) no carrinho</HeadTitle>
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