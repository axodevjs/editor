import Input from "../../UI/Input";
import Title from "../../UI/Title";
import Button from "../../UI/Button";
import { Already, Container } from "./Styled";

const LoginForm = (props) => {
  return (
    <Container>
      <Title align="center">{props?.title}</Title>

      <Input
        margin="21px 0 0 0"
        placeholder="Email"
        value={props?.email}
        setValue={props?.setEmail}
      />

      <Input
        margin="21px 0 0 0"
        placeholder="Пароль"
        type="password"
        value={props?.password}
        setValue={props?.setPassword}
      />

      <div>
        <Button margin="32px 0 0 0" onClick={props?.onSubmit}>
          {props?.buttonText}
        </Button>
      </div>
      <Already onClick={props?.alreadyClick}>{props?.alreadyText}</Already>
    </Container>
  );
};

export default LoginForm;
