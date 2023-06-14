import styled from 'styled-components'

import { colors } from '../../style'

type BannerProps = {
  img?: string
}

export const PerfilContainer = styled.div`
  position: relative;

  .center {
    display: flex;
    justify-content: center;
    margin: 120px 0;
  } 
`

export const Banner = styled.div<BannerProps>`
  width: 100%;
  background-image: url(${props => props.img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 280px;

  .modal {
    background-color: rgba(0,0,0,0.5);
    height: 100%;
  }

  .container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: space-between;
    padding: 16px 0;
  }
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