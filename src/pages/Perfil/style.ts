import styled from 'styled-components'

type BannerProps = {
  img: string
}

export const Banner = styled.div<BannerProps>`
  width: 100%;
  background-image: url(${props => props.img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 280px;

  .container {
    max-width: 1024px;
    margin: 0 auto;
    
    p {
      font-style: normal;
      font-weight: 100;
      font-size: 32px;
      color: white;
      
      span {
        font-weight: 900;
      }
    }
    
  }
`

export const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
`