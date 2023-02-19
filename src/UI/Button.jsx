import styled, { css } from "styled-components";

const StyledButton = styled.button`
  font-size: ${(props) => props.size || "16px"};
  margin: ${(props) => props.margin || ""};
  padding: ${(props) => props.padding || "0px 33px"};
  height: ${(props) => props.height || "41px"};
  width: ${(props) => props.width || "100%"};
  background-color: #2fa0f2;
  outline: none;
  border: none;
  color: #fff;
  cursor: pointer;

  ${(props) =>
    props.wauto &&
    css`
      width: auto;
    `}
`;

const Button = (props) => {
  return <StyledButton {...props}>{props?.children}</StyledButton>;
};

export default Button;
