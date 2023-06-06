import Container from "../Container"
import { ListContainer, Card } from './style'

import { colors } from "../../style"

import Pratos from '../../models/Plates'

type PropPlates = {
  items?: Pratos[]
}

const Plates = ({ items }: PropPlates) => {
  return (
    <Container direction="columns" customStyle={{backgroundColor: colors.bgColor}}>
      <Container direction="columns" customStyle={{
        width: '100%',
        maxWidth: '1024px',
        margin: '0 auto'
      }}>
        <ListContainer>
          {items?.map(p => <Card key={p.id}>
            <img src={p.image} alt="Prato" />
            <h4>{p.name}</h4>
            <p>{p.description}</p>
            <button type="button">Adicionar ao carrinho</button>
          </Card>)}
        </ListContainer>
      </Container>
    </Container>
  )
}

export default Plates