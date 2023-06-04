import Container from "../../containers/Container"

const bodyContainer = {
  innerWidth: "100%",
  maxWidth: "1024px",
  margin: "0 auto"
}

const Home = () => (
  <Container direction="column" customStyle={ bodyContainer }>
      <Container direction="row">
        <h1>Home</h1>
        <p>This is the Home page</p>
      </Container>
  </Container>
)

export default Home