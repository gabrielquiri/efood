import styled from 'styled-components'
import { Link } from 'react-router-dom'

import bgHeader from '../../assets/bg-header.png'

import { colors } from '../../style'

type Props = {
  size: string
}

type ContainerProps = {
  direction: string
}

export const HeaderComponent = styled.header<Props>`
  background-image: url(${bgHeader});
  display: flex;
  height: ${props => props.size === 'true' ? '352px' : '186px'};
  justify-content: center;
  align-items: center;

  .container {
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
  }
  
  .click {
    cursor: pointer;
  }
`

export const HeadTitle = styled.h1<Props>`
  color: ${ colors.colorDark };
  font-weight: 900;
  font-size: ${props => props.size === 'true' ? '36px' : '18px'};
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

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: ${props => props.direction};
  justify-content: space-between;
  align-items: center;
  gap: 138px;
`

export const Row = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
`