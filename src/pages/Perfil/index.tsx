import { useParams, useNavigate } from 'react-router-dom'

import NavBar from '../../containers/NavBar'
import Footer from "../../containers/Footer"
import { Banner, BannerContainer} from './style'

import { db } from '../../service/dbStatics'

const style = {
  width: '100%', 
  maxWidth: '1024px', 
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-between'
}

const Perfil = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  console.log(parseInt(`${id}`))
  if(id !== undefined){
    const restaurante = db.find(r => r.id !== undefined ? parseInt(`${id}`) : 0)
    return (
      <div>
        <NavBar />
        <Banner img={restaurante?.image ? restaurante?.image : ''}>
          <div className="container">
            <div><p>{restaurante?.cuisine}</p></div>
            <div><p><span>{restaurante?.name}</span></p></div>
          </div>
        </Banner>
        <h1>{restaurante?.name}</h1>
        <Footer />
      </div>
    ) 
  }
  else {
    navigate('/')
  }
}

export default Perfil