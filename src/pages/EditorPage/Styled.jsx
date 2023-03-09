import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const InnerContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
`;

export const EditorContainer = styled.div`
  margin-top: 21px;
  position: relative;
`;

export const EditingOverlay = styled.div`
  position: absolute;
  background: rgb(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  z-index: 10;
  align-items: center;
  justify-content: center;
`;

export const OverlayText = styled.div`
  margin-top: 21px;
  font-size: 16px;
  line-height: 19px;
  text-align: center;

  color: #ffffff;
  font-size: 16px;
  line-height: 19px;
  text-align: center;

  color: #ffffff;
`;

export const Back = styled.div`
  cursor: pointer;
  margin-bottom: 20px;
`;
