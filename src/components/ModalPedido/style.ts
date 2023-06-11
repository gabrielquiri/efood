import styled from "styled-components"
import { colors } from "../../style"

type Props = {
  switch: string
}

export const Modal = styled.div<Props>`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  display: ${props => props.switch };
  grid-template-columns: 1fr 360px;
`

export const CarrinhoBody = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 8px;
  background-color: ${colors.colorDark};
  gap: 16px;

  .total {
    width: 100%;
    display: flex;
    justify-content: space-between;
    color: ${colors.colorWhite};
    padding: 16px 0;
    margin-top: 24px;
  }
`

export const Button = styled.button`
  border: none;
  width: 100%;
  justify-content: center;
  display: flex;
  padding: 4px 0;
  background-color: ${colors.colorWhite};
  color: ${colors.colorDark}; 
` 

export const CardCarrinho = styled.div`
  width: 100%;
  height: 100px;
  background-color: ${colors.colorWhite};
  padding: 8px;
  display: flex;
  position: relative;
  gap: 8px;
  
  img {
    height: 80px;
  }

  .cardbody {
    flex-direction: column;
    color: ${colors.colorDark};
    display: flex;
    justify-content: space-between;
  }

  .dunp {
    height: 16px;
    position: absolute;
    right: 8px;
    top: 8px;
  }
`

