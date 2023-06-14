import { useDispatch, useSelector } from 'react-redux'

import Plate from "../../models/Plates"
import { CardModal, ModalContainer, CardBody, ButtonClose, CardButton } from "./style"

import { RootState } from '../../store'
import { openClose } from '../../store/reducer/modal'
import { adder } from '../../store/reducer/pedidos'

type Props = {
  plate: Plate
  display: boolean
}

const Modal = ({ plate }: Props) => {
  const dispatch = useDispatch()
  const { item } = useSelector((state: RootState) => state.modal)

  const moneyFormatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 2
  })

  const pedido = () => {
    dispatch(adder(plate))
    dispatch(openClose(false))
  }

  return(
    <ModalContainer display={item ? "flex": "none"} onClick={() => dispatch(openClose(false))}>
      <CardModal>
        <img src={plate.foto} alt={plate.nome} />
        <CardBody>
          <h4>{plate.nome}</h4>
          <p>{plate.descricao}</p>
          <p className="porcao">Server {plate.porcao}</p>
          <CardButton onClick={() => pedido()}>
            Adicionar ao carrinho - {moneyFormatter.format(plate.preco)}
          </CardButton>
        </CardBody>
        <ButtonClose onClick={() => dispatch(openClose(false))} >X</ButtonClose>
      </CardModal>
    </ModalContainer>
  )
}

export default Modal