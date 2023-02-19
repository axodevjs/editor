import styled from "styled-components";

const StyledArea = styled.textarea`
  font-size: ${(props) => props.size || "16px"};
  margin: ${(props) => props.margin || ""};
  padding: ${(props) => props.padding || "16px 17px"};
  width: ${(props) => props.width || "calc(100% - 34px)"};
  height: ${(props) => props.height || ""};
  background-color: #fff;
  outline: none;
  border: 1px solid #797979;
  color: #737373;
  resize: none;
  font-family: Inter;
`;

const Textarea = (props) => {
  return (
    <StyledArea
      {...props}
      value={props?.value}
      onChange={(e) => props?.setValue(e.target.value)}
    ></StyledArea>
  );
};

export default Textarea;
