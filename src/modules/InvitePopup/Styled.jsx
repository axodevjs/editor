import styled, { css } from "styled-components";

export const Background = styled.div`
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  background: #000000;
  height: 100vh;
  width: 100vw;

  opacity: 0;
  visibility: hidden;

  transition: all 0.3s ease;

  ${(props) =>
    props.show &&
    css`
      opacity: 0.4;
      visibility: visible;
    `}
`;

export const Window = styled.div`
  width: 40%;
  height: 40%;
  background-color: #fff;

  position: fixed;
  z-index: 3;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  opacity: 0;
  visibility: hidden;

  transition: all 0.3s ease;

  ${(props) =>
    props.show &&
    css`
      opacity: 1;
      visibility: visible;
    `}
`;
