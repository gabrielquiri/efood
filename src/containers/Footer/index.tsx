import { FooterComponent, SocialContainer, Social, Paragraph } from './style'

import Logo from '../../assets/logo.png'
import InstaIcon from '../../assets/insta_footer.png'
import FaceIcon from '../../assets/face_footer.png'
import TwitterIcon from '../../assets/twitter_footer.png'

const Footer = () => (
  <FooterComponent>
    <div className="container">
      <img src={Logo} alt="Logo" width={120} height={58}/>
      <SocialContainer>
        <Social src={InstaIcon} alt="Social Instagram"/>
        <Social src={FaceIcon} alt="Social Facebook"/>
        <Social src={TwitterIcon} alt="Social Twitter"/>
      </SocialContainer>
      <Paragraph>A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado. </Paragraph>
    </div>
  </FooterComponent>
)

export default Footer