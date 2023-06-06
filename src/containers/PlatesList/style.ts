import { styled } from "styled-components";

import { colors } from "../../style";

export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  padding: 56px 0; 
` 

export const Card = styled.div`
  height: 338px;
  background-color: ${colors.colorDark};
  color: ${colors.colorWhite};
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  img {
    height: 167px;
  }

  button {
    padding: 7px 0;
    background-color: ${colors.colorWhite};
    color: ${colors.colorDark};
    border: none;
  }
`