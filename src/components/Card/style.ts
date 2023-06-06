import styled from 'styled-components'

import { Link } from 'react-router-dom'

import { colors } from '../../style'

export const CardComponent = styled.div`
  position: relative;
`

export const CardHead = styled.div`
  height: 217px;
`
export const CardBody = styled.div`
  height: 182px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 8px;
  background-color: ${colors.white};
  color: ${colors.colorDark};
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
  font-weight: 400;
  font-size: 14px;
`

export const Destaques = styled.div`
  position: absolute;
  display: flex;
  padding: 8px;
  gap: 12px;
  top: 0;
  right: 0;
`

export const Button = styled.button`
  border: none;
  padding: 6px 4px;
  background-color: ${colors.colorDark};
  color: ${colors.colorWhite};
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