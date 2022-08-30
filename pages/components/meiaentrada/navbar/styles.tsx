// import styled from "@emotion/styled";

import { Box } from "@mui/system";
import styled, { keyframes } from 'styled-components';
export const Span = styled.span`
  ::after {
    display: inline-block;
    width: 0;
    height: 0;
    margin-left: 0.255em;
    vertical-align: 0.255em;
    content: "";
    border-top: 0.3em solid;
    border-right: 0.3em solid transparent;
    border-left: 0.3em solid transparent;
  }
`;

export const StyledBurger = styled.button`
  display: block;
  top: 5%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 56px;
  height: 40px;
  background: transparent;
  border: 1px solid white;
  border-radius: 4px;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 40px;
    margin: 0.5px auto;
    height: 4px;
    background: #effffa;
    border-radius: 10px;
    position: relative;
  }
  @media (min-width: 1200px) {
    display: none;
  } ;
`;

interface Props {
  open: boolean;
}

export const List = styled(Box)<Props>`
  background-color: #005e9e;
  width: 100%;
  display: none;
  @media (max-width: 1200px) {
    display: ${({ open }) => (open ? "block" : "none")};
    position: absolute;
    left: 0;
    top: 116px;
    padding: 16px;
  } ;
`;

const FadeInAnimation = keyframes`  
  from { opacity: 0; }
  to { opacity: 1; }
`;
export const FadeIn = styled(Box)`
  animation-name: ${FadeInAnimation};
`;


// export default { Span, StyledBurger }
