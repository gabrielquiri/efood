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

  > h4 {
    font-weight: 700;
    font-size: 16px;
    color: ${colors.colorWhite};
  }

  > p {
    font-weight: 400;
    font-size: 14px;
    color: ${colors.colorWhite};
  }

  .form-body {
    display: flex;
    flex-direction: column;
    color: ${colors.colorWhite};
    gap: 16px;
    width: 100%;
    margin-bottom: 16px;

    .row {
      display: flex;
      flex-direction: row;
      gap: 32px;
    }

    .error {
      border: 1px solid pink;
    }
  }
`

export const InputGroup = styled.fieldset`
  border: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;

  input {
    width: 100%;
    padding: 6px 0;
    border: none;
    background-color: ${colors.colorWhite};
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
  font-weight: bold;
  cursor: pointer;
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
`

export const Dump = styled.div`
  cursor: pointer;
  
  img {
    height: 16px;
    position: absolute;
    right: 8px;
    top: 8px;
  }
`