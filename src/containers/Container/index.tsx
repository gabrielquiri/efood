import { PropsWithChildren } from 'react'

import { FlexContainer } from './style'

type Props = {
  direction: string,
  customStyle?: object
}

const Container = (props: PropsWithChildren<Props>) => (
  <FlexContainer direction={props.direction} style={props.customStyle}>
    {props.children}
  </FlexContainer>
)

export default Container