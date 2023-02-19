import styled, { css } from "styled-components";

const StyledUser = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  margin: ${({ margin }) => margin || ""};
`;

const Avatar = styled.div`
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #d9d9d9;

  ${(props) =>
    props?.color &&
    css`
      background: ${props?.color};
    `}
`;

const Name = styled.div`
  font-size: 16px;
  margin-left: 12px;
`;

const User = (props) => {
  return (
    <StyledUser {...props}>
      <Avatar color={props?.color}>{props?.name[0].toUpperCase()}</Avatar>
      <Name>{props?.name}</Name>
    </StyledUser>
  );
};

export default User;
