import styled from "styled-components";

const TitleText = styled.div`
  font-size: ${(props) => props.size || "24px"};
  text-align: ${(props) => props.align || ""};
  margin: ${(props) => props.margin || ""};
`;

const Title = (props) => {
  return <TitleText {...props}>{props?.children}</TitleText>;
};

export default Title;
