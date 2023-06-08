import { List } from './style'
import { CardPlates } from '../../components/Card'

import Plate from '../../models/Plates'

type Props = {
  items: Plate[]
}

const RestaurantList = ({ items }: Props) => {
  return (
    <div>
      <List>
        {items.map(item => <CardPlates key={item.id} content={item}/>)}
      </List>
    </div>
  )
}

export default RestaurantList