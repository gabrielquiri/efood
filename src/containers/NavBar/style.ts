import styled from 'styled-components'
import { Link } from 'react-router-dom'

import bgHeader from '../../assets/bg-header.png'

import { colors } from '../../style'

type TitleProps = {
  alignment: string
}

export const HeaderComponent = styled.header`
  background-image: url(${bgHeader});
  width: 100%;
  height: 180px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

export const HeadTitle = styled.h1<TitleProps>`
  color: ${ colors.colorDark };
  font-weight: 900;
  font-size: 18px;
  flex: 1;
  text-align: ${ props => props.alignment} 
`

export const HeadBrand = styled(Link)`
  text-decoration: none;
  flex: 1;
  display: flex;
  justify-content: center;
`