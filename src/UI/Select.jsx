import styled, { css } from "styled-components";

const StyledSelect = styled.select`
  font-size: ${(props) => props.size || "16px"};
  margin: ${(props) => props.margin || ""};
  padding: ${(props) => props.padding || "0px 15px"};
  height: ${(props) => props.height || "41px"};
  width: ${(props) => props.width || "100%"};
  background: #d9d9d9;
  outline: none;
  border: none;
  color: #737373;
  border-radius: 0;
  cursor: pointer;

  ${(props) =>
    props.wauto &&
    css`
      width: auto;
    `}
`;

const Select = (props) => {
  const onChange = (e) => {
    props?.setValue(e.target.value);
  };

  return (
    <StyledSelect value={props?.value} onChange={onChange} {...props}>
      {props?.options?.length > 0 &&
        props?.options?.map((item, i) => (
          <option key={i} value={item?.name}>
            {item?.name}
          </option>
        ))}
    </StyledSelect>
  );
};

export default Select;
