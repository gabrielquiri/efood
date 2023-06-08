import Header from '../../containers/Header'
import List from '../../containers/Lista'
import Footer from '../../containers/Footer'

import { useGetRestaurantsQuery } from '../../service/fakeApi'

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
        <h3>Loading ...</h3>
      </div>
      <Footer />
    </div>
  )
}

export default Home