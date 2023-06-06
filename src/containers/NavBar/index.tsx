import { HeaderComponent, HeadTitle, HeadBrand } from './style'

import Logo from '../../assets/logo.png'

const Header = () => (
  <HeaderComponent>
    <HeadTitle alignment='right'>Restaurantes</HeadTitle>
      <HeadBrand to={'/'}>
        <img src={Logo} alt="EFood" />
      </HeadBrand>
    <HeadTitle alignment='left'>0 produto(s) no carrinho</HeadTitle>
  </HeaderComponent>
)

export default Header