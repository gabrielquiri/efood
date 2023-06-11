import styled from 'styled-components'

import { Link } from 'react-router-dom'

import { colors } from '../../style'

type Props = {
  tipo: string
}

export const CardComponent = styled.div`
  position: relative;
`

export const CardHead = styled.div<Props>`
  height: ${props => props.tipo === 'true' ? '217px' : '167px'};
  width: 100%;
  img {
    width: 100%;
    height: ${props => props.tipo === 'true' ? '217px' : '167px'};
    object-fit: cover;
  }
`
export const CardBody = styled.div<Props>`
  height: ${props => props.tipo === 'true' ? '181px' : '171px'};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 8px;
  background-color: ${props => props.tipo === 'true' ? colors.white : colors.colorDark};
  color: ${props => props.tipo === 'true' ? colors.colorDark : colors.colorWhite};
  border: 1px solid ${colors.colorDark};
  border-top: none;
`

export const BodyTitle = styled.div`
  display: flex;
  justify-content: space-between
`

export const Title = styled.h5`
  font-weight: 700;
  font-size: 18px;
`
export const Paragraph = styled.p`
  margin: 8px 0;
  font-weight: 400;
  font-size: 14px;
  overflow: hidden;
`

export const Destaques = styled.div`
  position: absolute;
  display: flex;
  padding: 8px;
  gap: 12px;
  top: 0;
  right: 0;
`

export const Button = styled.button<Props>`
  border: none;
  width: ${props => props.tipo === 'true' ? 'auto' : '100%'};
  padding: 6px 4px;
  background-color: ${props => props.tipo === 'true' ? colors.colorDark : colors.colorWhite};
  color: ${props => props.tipo === 'true' ? colors.colorWhite : colors.colorDark};
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
`

export const LinkButton = styled(Link)`
  text-decoration: none;
  color: ${colors.colorWhite};
`

export const Rate = styled.div`
  font-weight: 700;
  font-size: 18px;
  display: flex;
  align-items: center;
  gap: 8px;
`