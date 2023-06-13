import { useDispatch, useSelector } from 'react-redux'

import * as S from './style'

import { RootState } from '../../store'
import { remover, interruptor } from '../../store/reducer/pedidos'
import { changeCheckout } from '../../store/reducer/payments'

import Lixeira from '../../assets/lixeira-de-reciclagem.png'

enum CheckoutEnum {
  ADDRESS = 1,
  PAYMENT,
  FINISH
} 

const Carrinho = () => {
  const dispatch = useDispatch()
  const {switch: modal, items: pratos} = useSelector((state: RootState) => state.pedido)
  const { checkout } = useSelector((state: RootState) => state.payment)

  const moneyFormatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 2
  })

  const total = pratos.reduce(
    (total, prato) => total + prato.preco,
    0
  )
  
  const removerPedido = (id: number) => {
    console.log(id)
    dispatch(remover(id))
    dispatch(interruptor(false))
  }
  
  if(pratos.length > 0) {
    if(checkout === CheckoutEnum.ADDRESS){
      return (
        <S.Modal switch={modal ? 'grid' : 'none'}>
          <div onClick={() => dispatch(interruptor(false))}></div>
          <S.CarrinhoBody>
            <div className='form-body'>
              <h4>Entrega</h4>
              <S.InputGroup>
                <label htmlFor="name">Quem irá receber</label>
                <input type="text" name="name" id="name" />
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="address">Endereço</label>
                <input type="text" name="address" id="address" />
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="city">Cidade</label>
                <input type="text" name="city" id="city" />
              </S.InputGroup>
              <div className="row">
                <S.InputGroup>
                  <label htmlFor="cep">CEP</label>
                  <input type="text" name="cep" id="cep" />
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="number">Número</label>
                  <input type="text" name="number" id="number" />
                </S.InputGroup>
              </div>
              <S.InputGroup>
                <label htmlFor="complement">Complemento (opcional)</label>
                <input type="text" name="complement" id="complement" />
              </S.InputGroup>
            </div>
            <S.Button onClick={() => dispatch(changeCheckout(CheckoutEnum.PAYMENT))}>Continuar com a pagamento</S.Button>
            <S.Button onClick={() => dispatch(changeCheckout(0))}>Voltar para o carrinho</S.Button>
          </S.CarrinhoBody>
        </S.Modal>
      )
    }
    else if (checkout === CheckoutEnum.PAYMENT){
      return (
        <S.Modal switch={modal ? 'grid' : 'none'}>
          <div onClick={() => dispatch(interruptor(false))}></div>
          <S.CarrinhoBody>
            <div className='form-body'>
              <h4>Pagamento - Valor a pagar {moneyFormatter.format(total)}</h4>
              <S.InputGroup>
                <label htmlFor="cardName">Nome no cartão</label>
                <input type="text" name="cardName" id="cardName" />
              </S.InputGroup>
              <div className="row">
                <S.InputGroup>
                  <label htmlFor="cardNumber">Número do cartão</label>
                  <input type="text" name="cardNumber" id="cardNumber" />
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="cvv">CVV</label>
                  <input type="text" name="cvv" id="cvv" />
                </S.InputGroup>
              </div>
              <div className="row">
                <S.InputGroup>
                  <label htmlFor="maturityMonth">Mês de vencimento</label>
                  <input type="text" name="maturityMonth" id="maturityMonth" />
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="maturityYear">Ano de vencimento</label>
                  <input type="text" name="maturityYear" id="maturityYear" />
                </S.InputGroup>
              </div>
            </div>
            <S.Button onClick={() => dispatch(changeCheckout(CheckoutEnum.FINISH))}>Finalizar pagamento</S.Button>
            <S.Button onClick={() => dispatch(changeCheckout(CheckoutEnum.PAYMENT))}>Voltar para a edição de endereço</S.Button>
          </S.CarrinhoBody>
        </S.Modal>
      )
    }
    else if (checkout === CheckoutEnum.FINISH){
      return (
        <S.Modal switch={modal ? 'grid' : 'none'}>
          <div onClick={() => dispatch(interruptor(false))}></div>
          <S.CarrinhoBody>
            <h4>Pedido realizado - {'#Order_id'}</h4>
            <p>
              Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.
              <br/>
              <br/>
              Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras. 
              <br/>
              <br/>
              Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.
              <br/>
              <br/>
              Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!</p>

              <S.Button onClick={() => console.log('finalizar')}>Concluir</S.Button>
          </S.CarrinhoBody>
        </S.Modal>
      )
    }
    return (
      <S.Modal switch={modal ? 'grid' : 'none'}>
        <div onClick={() => dispatch(interruptor(false))}></div>
        <S.CarrinhoBody>
            {pratos.map(prato =>  
              <S.CardCarrinho key={prato.id}>
                <img src={prato.foto} alt={prato.nome} />
                <div className='cardbody'>
                  <b>{prato.nome}</b>
                  <p>{moneyFormatter.format(prato.preco)}</p>
                </div>
                <S.Dump onClick={() => removerPedido(prato.id)}>
                  <img src={Lixeira} alt="del" />
                </S.Dump>
              </S.CardCarrinho>
              )}
            <div className="total">
              <p>Valor</p>
              <p>{moneyFormatter.format(total)}</p>
            </div>
            <S.Button onClick={() => dispatch(changeCheckout(CheckoutEnum.ADDRESS))}>Continuar com a entrega</S.Button>
        </S.CarrinhoBody>
      </S.Modal>
    )
  }
  return(
    <S.Modal switch={modal ? 'grid' : 'none'}>
      <div onClick={() => dispatch(interruptor(false))}></div>
      <S.CarrinhoBody>
          <p>Nenhum item foi adicionado ao carrinho</p>
      </S.CarrinhoBody>
    </S.Modal>
  )
}

export default Carrinho