import { List } from './style'
import { CardRestaurants } from '../../components/Card'

import Restaurantes from '../../models/Restaurants'

type Props = {
  items: Restaurantes[]
}

const RestaurantsList = ({ items }: Props) => {
  return (
    <div>
      <List>
        {items.map(item => <CardRestaurants key={item.id} content={item}/>)}
      </List>
    </div>
  )
}

export default RestaurantsList
