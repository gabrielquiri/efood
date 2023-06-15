import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'

import { List } from './style'
import { CardPlates } from '../../components/Card'
import Modal from '../../components/ModalPrato'

import Plate from '../../models/Plates'

import { RootState } from '../../store'
import { openClose } from '../../store/reducer/modal'

type Props = {
  items: Plate[]
}

const RestaurantList = ({ items }: Props) => {
  const dispatch = useDispatch()
  const { item: modal } = useSelector((state: RootState) => state.modal)
  const [prato, setPrato] = useState<Plate>()

  useEffect(() => {
    const item = items.filter(prato => prato.id === 1)
    setPrato(item[0])
  },[items])

  const openModal = (prato: Plate) => {
    dispatch(openClose(true))
    setPrato(prato)
  }
  return (
    <div>
      <List>
        {items.map(item => 
          <CardPlates key={item.id} content={item} state={() => openModal(item)}/>
        )}
      </List>
      {prato ? <Modal display={modal} plate={prato}/> : <div></div>}
    </div>
  )
}

export default RestaurantList