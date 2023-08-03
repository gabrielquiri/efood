import { styled } from "styled-components"
import { colors } from "../../style"

type PropsModal = {
  display: string
}

export const ModalContainer = styled.div<PropsModal>`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  display: ${props => props.display};
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const CardModal = styled.div`
  width: 1024px;
  height: 344px;
  background-color: ${colors.colorDark};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 32px;
  gap: 24px;
  position: relative;
  
  img {
    height: 280px;
  }
`

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  h4, p {
    color: ${colors.colorWhite}
  }
`

export const CardButton = styled.button`
  border: none;
  padding: 8px;
  font-weight: bold;
  background-color: ${colors.colorWhite};
  color: ${colors.colorDark};
  cursor: pointer;
`

export const ButtonClose = styled.button`
  border: none;
  padding: 8px;
  font-weight: 100;
  background-color: ${colors.colorDark};
  color: ${colors.colorWhite};
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
`