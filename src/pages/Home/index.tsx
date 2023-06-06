import Container from "../../containers/Container"
import Header from '../../containers/Header'
import RestaurantsList from '../../containers/RestaurantsList'
import Footer from '../../containers/Footer'

const bodyContainer = {
  innerWidth: "100%",
  maxWidth: "1024px",
  margin: "0 auto"
}

const Home = () => (
  <>
    <Header tipo='home'/>
    <Container direction="column" customStyle={ bodyContainer }>
        <Container direction="row">
          <RestaurantsList />
        </Container>
    </Container>
    <Footer />
  </>
)

export default Home