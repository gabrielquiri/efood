import { FadeLoader } from 'react-spinners'

import Header from '../../containers/Header'
import List from '../../containers/Lista'
import Footer from '../../containers/Footer'

import { useGetRestaurantsQuery } from '../../service/fakeApi'
import { colors } from '../../style'

const Home = () => {
  const { data: restaurantes } = useGetRestaurantsQuery()

  if(restaurantes){
    return (
      <div>
        <Header tipo='home'/>
        <div className="container">
          <List items={restaurantes} />
        </div>
        <Footer />
      </div>
    )
  }
  
  return (
    <div>
      <Header tipo='home'/>
      <div className="container">
        <div className="center">
          <FadeLoader color={colors.colorDark} />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home