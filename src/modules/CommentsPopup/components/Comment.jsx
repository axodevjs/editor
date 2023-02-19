import User from "../../../UI/User";
import { Container, Date, Text, Top } from "./Styled";

const Comment = (props) => {
  return (
    <Container>
      <Top>
        <User name={props?.name} />
        <Date>2022-10-10 16:24</Date>
      </Top>
      <Text>{props?.text}</Text>
    </Container>
  );
};

export default Comment;
