import styled from 'styled-components'
import { Link } from 'react-router-dom'

import bgHeader from '../../assets/bg-header.png'

import { colors } from '../../style'

type Props = {
  size: boolean
}

export const HeaderComponent = styled.header`
  background-image: url(${bgHeader});
  display: flex;
  height: 352px;
  align-items: center;
`

export const HeadTitle = styled.h1<Props>`
  color: ${ colors.colorDark };
  font-weight: 900;
  font-size: ${props => props.size ? '36px' : '18px'};
`

export const HeadLink = styled(Link)`
  text-decoration: none;
  color: ${ colors.colorDark };
  font-weight: 900;
  font-size: 18px;
`

export const HeadBrand = styled(Link)`
  text-decoration: none;
`