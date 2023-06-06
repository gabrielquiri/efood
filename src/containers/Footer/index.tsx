import { FooterComponent, SocialContainer, Social, Paragraph } from './style'

import Container from '../Container'

import Logo from '../../assets/logo.png'
import InstaIcon from '../../assets/insta_footer.png'
import FaceIcon from '../../assets/face_footer.png'
import TwitterIcon from '../../assets/twitter_footer.png'

const styleContainer = {
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  maxWidth: '1024px',
  padding: '3em 0'
}

const Footer = () => (
  <FooterComponent>
    <Container direction='column' customStyle={styleContainer}>
      <img src={Logo} alt="Logo" width={120} height={58}/>
      <SocialContainer>
        <Social src={InstaIcon} alt="Social Instagram"/>
        <Social src={FaceIcon} alt="Social Facebook"/>
        <Social src={TwitterIcon} alt="Social Twitter"/>
      </SocialContainer>
      <Paragraph>A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado. </Paragraph>
    </Container>
  </FooterComponent>
)

export default Footer