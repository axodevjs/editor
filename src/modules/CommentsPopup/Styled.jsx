import styled, { css } from "styled-components";

export const Background = styled.div`
  position: fixed;
  z-index: 10;
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
  width: calc(60vw - 104px);
  height: 60vh;
  background-color: #fff;

  position: fixed;
  z-index: 11;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;

  padding: 40px 52px;

  display: flex;
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

export const TopText = styled.div`
  display: flex;
`;

export const LeftText = styled.div``;

export const RightText = styled.div`
  margin-left: 29px;
`;

export const CommentsList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 42px;
  min-height: 60%;
  max-height: 60%;
  overflow: auto;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
