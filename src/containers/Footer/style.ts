import styled from 'styled-components'
import { colors } from '../../style'

export const FooterComponent = styled.div`
  width: 100%;
  background-color: ${colors.colorWhite};
  color: ${colors.colorDark};
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 0;
  }
`

export const SocialContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 32px;
  margin-bottom: 80px
`

export const Social = styled.img`
`

export const Paragraph = styled.p`
  text-align: center;
  width: 480px;
  font-weight: 400;
  font-size: 10px;
`