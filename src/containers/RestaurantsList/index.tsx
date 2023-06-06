import { List } from './style'
import Card from '../../components/Card'

import { db } from '../../service/dbStatics'

const RestaurantsList = () => {
  return (
    <>
      <List>
        {db.map(restaurante => 
          <Card key={restaurante.id}
                image={restaurante.image ? restaurante.image : ''} 
                restaurant={restaurante}/>)}
      </List>
    </>
  )
}

export default RestaurantsList