import { HeaderComponent, HeadTitle, HeadBrand } from './style'
import Container from '../Container'

import Logo from '../../assets/logo.png'

const HeaderStyle = {
  innerWidth: "100%",
  maxWidth: "1024px",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  gap: "138px",
  margin: '0 auto'
}

const Header = () => (
  <HeaderComponent>
    <Container direction='column' customStyle={HeaderStyle}>
      <HeadBrand to={'/'}>
        <img src={Logo} alt="EFood" />
      </HeadBrand>
      <HeadTitle>Viva experiências gastronômicas no conforto da sua casa</HeadTitle>
    </Container>
  </HeaderComponent>
)

export default Header