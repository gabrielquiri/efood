import { Banner, BannerText } from './style'

import { db } from '../../service/dbStatics'

import Header from '../../containers/Header'
import Footer from '../../containers/Footer'
import Container from '../../containers/Container'
import Plates from '../../containers/PlatesList'

const Perfil = () => {
  const restaurante = db.find(r => r.id === 1)
  return (<>
    <Header tipo='perfil'/>
    <Banner img={restaurante?.image}>
      <Container direction='column' customStyle={{
        width: '100%',
        maxWidth: '1024px',
        height: '100%',
        margin: '0 auto',
        justifyContent: 'space-between'
      }}>
        <BannerText>{restaurante?.cuisine}</BannerText>
        <BannerText><span>{restaurante?.name}</span></BannerText>
      </Container>
    </Banner>
    <Plates items={restaurante?.plates}/>
    <Footer />
  </>)
}

export default Perfil