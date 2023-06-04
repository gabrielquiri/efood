import styled from 'styled-components'

type Props = {
  direction: string
}

export const FlexContainer = styled.div<Props>`
  display: flex;
  flex-direction: ${ props => props.direction }
` 