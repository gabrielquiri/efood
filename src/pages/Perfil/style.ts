import styled from 'styled-components'

import { colors } from '../../style'

type BannerProps = {
  img?: string
}

export const Banner = styled.div<BannerProps>`
  width: 100%;
  background-image: url(${props => props.img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 280px;
`

export const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const BannerText = styled.p`
  color: ${colors.white};
  font-weight: 100;
  font-size: 32px;

  span {
    font-weight: 900;
  }
`