import styled, { css } from "styled-components";

const StyledInput = styled.input`
  font-size: ${(props) => props.size || "16px"};
  margin: ${(props) => props.margin || ""};
  padding: ${(props) => props.padding || "16px 17px"};
  width: ${(props) => (props.width ? `calc(${props.width} - 34px)` : "100%")};
  background-color: #d9d9d9;
  outline: none;
  border: none;
  color: #737373;

  ${(props) =>
    props.wauto &&
    css`
      width: auto;
    `}
`;

const Input = (props) => {
  return (
    <StyledInput
      {...props}
      value={props?.value}
      onChange={(e) => props?.setValue(e.target.value)}
    ></StyledInput>
  );
};

export default Input;
