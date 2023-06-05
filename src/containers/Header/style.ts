import styled from 'styled-components'
import { Link } from 'react-router-dom'

import bgHeader from '../../assets/bg-header.png'

import { colors } from '../../style'

export const HeaderComponent = styled.header`
  background-image: url(${bgHeader});
  height: 352px;
`

export const HeadTitle = styled.h1`
  color: ${ colors.colorDark };
  font-weight: 900;
  font-size: 36px;
`

export const HeadBrand = styled(Link)`
  text-decoration: none;
`