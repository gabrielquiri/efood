import { useDispatch, useSelector } from 'react-redux'

import { Modal, CarrinhoBody, CardCarrinho, Button } from './style'

import { RootState } from '../../store'
import { remover, interruptor } from '../../store/reducer/pedidos'

import Lixeira from '../../assets/lixeira-de-reciclagem.png'

const Carrinho = () => {
  const dispatch = useDispatch()
  const {switch: modal, items: pratos} = useSelector((state: RootState) => state.pedido)

  const moneyFormatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 2
  })

  const total = pratos.reduce(
    (total, prato) => total + prato.preco,
    0
  )

  return(
    <Modal switch={modal ? 'grid' : 'none'}>
      <div onClick={() => dispatch(interruptor(false))}></div>
      <CarrinhoBody>
        {pratos.map(prato =>  
          <CardCarrinho>
            <img src={prato.foto} alt={prato.nome} />
            <div className='cardbody'>
              <b>{prato.nome}</b>
              <p>{moneyFormatter.format(prato.preco)}</p>
            </div>
            <img src={Lixeira} alt="del" className='dunp' onClick={() => dispatch(remover(prato.id))}/>
          </CardCarrinho>
          )}
        <div className="total">
          <p>Valor</p>
          <p>{moneyFormatter.format(total)}</p>
        </div>
        <Button>Continuar com a entrega</Button>
      </CarrinhoBody>
    </Modal>
  )
}

export default Carrinho