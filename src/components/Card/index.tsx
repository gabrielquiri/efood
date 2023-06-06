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

import Restaurants from '../../models/Restaurants'

type Props = {
  image: string,
  restaurant: Restaurants
}

const Card = ({ image, restaurant }: Props) => (
  <CardComponent>
    <CardHead>
      <img src={image} alt="Image Card" />
    </CardHead>
    <CardBody>
      <BodyTitle>
        <Title>{restaurant.name}</Title>
        <Rate>
          {restaurant.rate}
          <img src={Star} alt="Star Rate" />
        </Rate>
      </BodyTitle>
      <Paragraph>{restaurant.description}</Paragraph>
      <div>
        <Button>
        <LinkButton to={`restaurant/${restaurant.id}`}>Saiba Mais</LinkButton>
        </Button>
      </div>
      <Destaques>
        {restaurant.emphasis ? <Button disabled >Destaque da semana</Button> : <></>}
        <Button disabled >{restaurant.cuisine}</Button>
      </Destaques>
    </CardBody>
  </CardComponent>
)

export default Card