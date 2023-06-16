import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import InputMask from 'react-input-mask'
import { HashLoader } from 'react-spinners'
import toast from 'react-hot-toast'

import * as S from './style'

import { RootState } from '../../store'
import { remover, interrupter, clean } from '../../store/reducer/pedidos'
import { changeCheckout } from '../../store/reducer/payments'

import Dumpster from '../../assets/lixeira-de-reciclagem.png'
import { useMakeCheckoutMutation } from '../../service/fakeApi'
import { colors } from '../../style';

enum CheckoutEnum {
  ADDRESS = 1,
  PAYMENT,
  FINISH
} 

const Card = () => {
  const dispatch = useDispatch()
  const {switch: modal, items: plates} = useSelector((state: RootState) => state.pedido)
  const { checkout } = useSelector((state: RootState) => state.payment)
  const [ makeCheckout, { isSuccess, isLoading, data } ] = useMakeCheckoutMutation()
  let i = 0

  const moneyFormatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 2
  })

  const total = plates.reduce(
    (total, prato) => total + prato.preco,
    0
  )
  
  const removerPedido = (id: number) => {
    dispatch(remover(id))
  }
  
  const myForm = useFormik({
    initialValues: {
      receiver: '',
      address: '',
      city: '',
      zipCode: '',
      addressNumber: '',
      complement: '',
      cardName: '',
      cardNumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: '',
    },
    validationSchema: Yup.object({
      receiver: Yup.string()
        .min(3, 'O nome precisa ter no minimo 3 letras.')
        .required('Campo Obrigatório.'),
      address: Yup.string()
        .min(6, 'O endereço precisa ter no minimo 6 letras.')
        .required('Campo Obrigatório.'),
      city: Yup.string()
        .required('Campo Obrigatório.'),
      zipCode: Yup.string() 
        .required('Campo Obrigatório.'),
      addressNumber: Yup.string() 
        .required('Campo Obrigatório.'),
      complement: Yup.string(),
      cardName: Yup.string()
        .min(5, 'O nome precisa ter no minimo 5 letras.')
        .required('Campo Obrigatório.'),
      cardNumber: Yup.string()
        .min(19, 'Numero de cartão invalido.')
        .max(19, 'Numero de cartão invalido.')
        .required('Campo Obrigatório.'),
      cardCode: Yup.string()
        .min(3, 'Código do cartão invalido.')
        .max(3, 'Código do cartão invalido.')
        .required('Campo Obrigatório.'),
      expiresMonth: Yup.string()
        .min(2, 'Mês inválido.')
        .required('Campo Obrigatório.'),
      expiresYear: Yup.number()
        .min(4, 'Ano inválido')
        .required('Campo Obrigatório.'),
    }),
    onSubmit: values => {
      makeCheckout({
        products: plates.map(plate => ({
        id: plate.id,
        price: plate.preco 
        })),
        delivery: {
          receiver: values.receiver,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.zipCode,
            number: Number(values.addressNumber),
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        }
      })
    }
  })

  const executeSubmit = () => {
    checkInputHasError()
    myForm.handleSubmit
  }

  const checkInputHasError = () => {
    for(const field in myForm.touched){
      if(field in myForm.errors){
        console.log(field)
        toast.error(`O campo ${field} está invalido.`, {
          duration: 3000,
          position: 'top-left'
        })
      }
    }
  }

  const cleaner = () => {
    dispatch(clean())
    dispatch(interrupter(false))
    dispatch(changeCheckout(0))
    myForm.handleReset
  }

  const makeKeyId = () => {
    return i += 1
  }

  if(plates.length > 0) {
    if(checkout === CheckoutEnum.ADDRESS){
      return (
        <S.Modal switch={modal ? 'grid' : 'none'}>
          <div onClick={() => dispatch(interrupter(false))}></div>
          <S.CarrinhoBody>
            <form onSubmit={myForm.handleSubmit} className='form-body'>
              <h4>Entrega</h4>
              <S.InputGroup>
                <label htmlFor="receiver">Quem irá receber</label>
                <input  type="text" 
                        name="receiver" 
                        id="receiver" 
                        value={myForm.values.receiver} 
                        onChange={myForm.handleChange}
                        onBlur={() => checkInputHasError()}/>
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="address">Endereço</label>
                <input  type="text" 
                        name="address" 
                        id="address" 
                        value={myForm.values.address} 
                        onChange={myForm.handleChange}
                        onBlur={myForm.handleBlur}/>
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="city">Cidade</label>
                <input  type="text" 
                        name="city" 
                        id="city" 
                        value={myForm.values.city} 
                        onChange={myForm.handleChange}
                        onBlur={myForm.handleBlur}/>
              </S.InputGroup>
              <div className="row">
                <S.InputGroup>
                  <label htmlFor="zipCode">CEP</label>
                  <InputMask  type="text" 
                              name="zipCode" 
                              id="zipCode" 
                              value={myForm.values.zipCode} 
                              onChange={myForm.handleChange}
                              onBlur={myForm.handleBlur}
                              mask="99999-999"/>
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="addressNumber">Número</label>
                  <input  type="text" 
                          name="addressNumber" 
                          id="addressNumber" 
                          value={myForm.values.addressNumber} 
                          onChange={myForm.handleChange}
                          onBlur={myForm.handleBlur}/>
                </S.InputGroup>
              </div>
              <S.InputGroup>
                <label htmlFor="complement">Complemento (opcional)</label>
                <input  type="text"
                        name="complement" 
                        id="complement" 
                        value={myForm.values.complement} 
                        onChange={myForm.handleChange}
                        onBlur={myForm.handleBlur}/>
              </S.InputGroup>
            </form>
            <S.Button onClick={() => dispatch(changeCheckout(CheckoutEnum.PAYMENT))}>Continuar com a pagamento</S.Button>
            <S.Button onClick={() => dispatch(changeCheckout(0))}>Voltar para o carrinho</S.Button>
          </S.CarrinhoBody>
        </S.Modal>
      )
    }
    else if (checkout === CheckoutEnum.PAYMENT){
      return (
        <S.Modal switch={modal ? 'grid' : 'none'}>
          <div onClick={() => dispatch(interrupter(false))}></div>
          <S.CarrinhoBody>
            {isSuccess && data ? (
              <>
                <h4>Pedido realizado - {data.orderId}</h4>
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

                  <S.Button onClick={() => cleaner()}>Concluir</S.Button>
              </>
            ):(
              <>
                <form onSubmit={myForm.handleSubmit} className='form-body'>
                  <h4>Pagamento - Valor a pagar {moneyFormatter.format(total)}</h4>
                  <S.InputGroup>
                    <label htmlFor="cardName">Nome no cartão</label>
                    <input 
                      type="text" 
                      name="cardName" 
                      id="cardName" 
                      value={myForm.values.cardName} 
                      onChange={myForm.handleChange}
                      onBlur={myForm.handleBlur}/>
                  </S.InputGroup>
                  <div className="row">
                    <S.InputGroup>
                      <label htmlFor="cardNumber">Número do cartão</label>
                      <InputMask 
                        type="text" 
                        name="cardNumber" 
                        id="cardNumber"
                        value={myForm.values.cardNumber} 
                        onChange={myForm.handleChange}
                        onBlur={myForm.handleBlur}
                        mask="9999 9999 9999 9999"/>
                    </S.InputGroup>
                    <S.InputGroup>
                      <label htmlFor="cardCode">CVV</label>
                      <InputMask 
                        type="text" 
                        name="cardCode" 
                        id="cardCode" 
                        value={myForm.values.cardCode} 
                        onChange={myForm.handleChange}
                        onBlur={myForm.handleBlur}
                        mask="999"/>
                    </S.InputGroup>
                  </div>
                  <div className="row">
                    <S.InputGroup>
                      <label htmlFor="expiresMonth">Mês de vencimento</label>
                      <InputMask 
                        type="text" 
                        name="expiresMonth" 
                        id="expiresMonth" 
                        value={myForm.values.expiresMonth} 
                        onChange={myForm.handleChange}
                        onBlur={myForm.handleBlur}
                        mask="99"/>
                    </S.InputGroup>
                    <S.InputGroup>
                      <label htmlFor="expiresYear">Ano de vencimento</label>
                      <InputMask 
                        type="text" 
                        name="expiresYear" 
                        id="expiresYear" 
                        value={myForm.values.expiresYear} 
                        onChange={myForm.handleChange}
                        onBlur={myForm.handleBlur}
                        mask="9999"/>
                    </S.InputGroup>
                  </div>
                  <S.Button type="submit" onClick={() => executeSubmit()}>{isLoading ? <HashLoader color={colors.colorDark} /> : "Finalizar pagamento"}</S.Button>
                </form>
              <S.Button onClick={() => dispatch(changeCheckout(CheckoutEnum.ADDRESS))}>Voltar para a edição de endereço</S.Button>
              </>
            )}
          </S.CarrinhoBody>
        </S.Modal>
      )
    }
    return (
      <S.Modal switch={modal ? 'grid' : 'none'}>
        <div onClick={() => dispatch(interrupter(false))}></div>
        <S.CarrinhoBody>
            {plates.map(plate =>  
              <S.CardCarrinho key={makeKeyId()}>
                <img src={plate.foto} alt={plate.nome} />
                <div className='cardbody'>
                  <b>{plate.nome}</b>
                  <p>{moneyFormatter.format(plate.preco)}</p>
                </div>
                <S.Dump onClick={() => removerPedido(plate.id)}>
                  <img src={Dumpster} alt="del" />
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
      <div onClick={() => dispatch(interrupter(false))}></div>
      <S.CarrinhoBody>
          <p>Nenhum item foi adicionado ao carrinho</p>
      </S.CarrinhoBody>
    </S.Modal>
  )
}

export default Card