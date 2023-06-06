import { HeaderComponent, HeadTitle, HeadBrand, HeadLink } from './style'
import Container from '../Container'

import Logo from '../../assets/logo.png'

const HeaderStyle = {
  width: "100%",
  maxWidth: "1024px",
  margin: '0 auto',

  alignItems: "center",
  justifyContent: "center",
  height: "100%"
}

type Props = {
  tipo: 'perfil' | 'home'
}

const Header = ({ tipo }: Props) => {
  if(tipo === 'perfil'){
    return (
      <HeaderComponent>
        <Container direction='row' customStyle={HeaderStyle}>
        <Container direction='row' customStyle={{flex: '1'}}>
          <HeadLink to='/' >Restaurantes</HeadLink>
        </Container>
          <Container direction='row' customStyle={{flex: '1', justifyContent: 'center'}}>
            <HeadBrand to={'/'}>
              <img src={Logo} alt="EFood" />
            </HeadBrand>
          </Container>
          <Container direction='row' customStyle={{flex: '1', justifyContent: 'flex-end'}}>
          <HeadTitle size={false}>0 produto(s) no carrinho</HeadTitle>
          </Container>
        </Container>
      </HeaderComponent>
    )
  }
  return (
  <HeaderComponent>
    <Container direction='column' customStyle={HeaderStyle}>
      <Container direction='column' customStyle={{gap: '120px', alignItems: 'center'}}>
        <HeadBrand to={'/'}>
          <img src={Logo} alt="EFood" />
        </HeadBrand>
        <HeadTitle size={true}>Viva experiências gastronómicas no conforto da sua casa</HeadTitle>
      </Container>
    </Container>
  </HeaderComponent>
)}

export default Header