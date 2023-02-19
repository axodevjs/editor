import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  padding-top: 60px;
  width: 90%;
  height: 100%;
  // min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Documents = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 116px);
  grid-auto-rows: auto;
  grid-gap: 1rem;
  margin-top: 50px;
`;

export const Document = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
`;

export const DocumentImage = styled.div`
  background-color: #2fa0f2;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 140px;

  ${(props) =>
    props.gray &&
    css`
      background-color: #d9d9d9;
    `}
`;

export const DocumentTitle = styled.div`
  margin-top: 11px;
  font-size: 16px;
`;

export const Containser = styled.div``;
