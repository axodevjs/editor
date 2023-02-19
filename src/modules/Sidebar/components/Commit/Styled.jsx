import styled from "styled-components";

export const StyledCommit = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: calc(100% - 80px);
  padding: 16px 40px;
  background: #eeeeee;
  margin-top: 16px;

  &:nth-child(1) {
    margin-top: 0;
  }
`;

export const Sides = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
`;

export const Date = styled.div`
  font-size: 16px;
  color: #000;
  margin-top: 7.5px;
`;

export const CommentIcon = styled.svg`
  cursor: pointer;
  width: 24px;
  height: 24px;
`;

export const Actions = styled.div`
  margin-top: 6px;
  width: 100%;
  justify-content: flex-end;
  display: flex;
`;

export const ActionIcon = styled.svg`
  width: 35px;
  height: 35px;
  cursor: pointer;

  &:nth-child(2) {
    margin-left: 10px;
  }
`;

export const StyledCommisdt = styled.div``;
