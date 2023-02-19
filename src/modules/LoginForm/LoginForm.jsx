import { useState } from "react";
import Input from "../../UI/Input";
import Title from "../../UI/Title";
import Button from "../../UI/Button";
import { Already, Container } from "./Styled";

const LoginForm = (props) => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container>
      <Title align="center">{props?.title}</Title>

      <Input
        margin="48px 0 0 0"
        placeholder="Логин"
        value={login}
        setValue={setLogin}
      />
      {props?.email && (
        <Input
          margin="21px 0 0 0"
          placeholder="Email"
          value={email}
          setValue={setEmail}
        />
      )}

      <Input
        margin="21px 0 0 0"
        placeholder="Пароль"
        value={password}
        setValue={setPassword}
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
