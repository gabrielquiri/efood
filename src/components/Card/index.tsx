import { 
  CardComponent, 
  CardHead, 
  CardBody,
  Destaques, 
  Button, 
  BodyTitle, 
  Title, 
  Paragraph,
  Rate,
  LinkButton
} from './style'

import Star from '../../assets/star_rate.png'

import Restaurant from '../../models/Restaurants'
import Plate from '../../models/Plates'

type CardRProps = {
  content: Restaurant
}

export const CardRestaurants = ({ content }: CardRProps) => {
  return (
      <CardComponent>
      <CardHead tipo={true}>
        <img src={content.capa} alt="Image Card" />
      </CardHead>
      <CardBody tipo={true}>
        <BodyTitle>
          <Title>{content.titulo}</Title>
          <Rate>
            {content.avaliacao}
            <img src={Star} alt="Star Rate" />
          </Rate>
        </BodyTitle>
        <Paragraph>{content.descricao}</Paragraph>
        <div>
          <Button>
          <LinkButton to={`restaurant/${content.id}`}>Saiba Mais</LinkButton>
          </Button>
        </div>
        <Destaques>
          {content.destacado ? <Button disabled >Destaque da semana</Button> : <></>}
          <Button disabled >{content.tipo}</Button>
        </Destaques>
      </CardBody>
    </CardComponent>  
  )
}

type CardPProps = {
  content: Plate
}

export const CardPlates = ({ content }: CardPProps) => {
  return (
      <CardComponent>
      <CardHead tipo={false}>
        <img src={content.foto} alt="Image Card" />
      </CardHead>
      <CardBody tipo={false}>
        <BodyTitle>
          <Title>{content.nome}</Title>
        </BodyTitle>
        <Paragraph>{content.descricao}</Paragraph>
        <div>
          <Button>
            <LinkButton to={`restaurant/${content.id}`}>Saiba Mais</LinkButton>
          </Button>
        </div>
      </CardBody>
    </CardComponent>  
  )
}
