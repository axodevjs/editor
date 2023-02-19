import { useNavigate } from "react-router-dom";
import LoginForm from "../../modules/LoginForm/LoginForm";
import { Container } from "./Styled";

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <LoginForm
        title="Вход"
        buttonText="Войти"
        alreadyText="У меня нет аккаунта"
        alreadyClick={() => navigate("/registration")}
        onSubmit={() => navigate("/documents")}
      />
    </Container>
  );
};

export default LoginPage;
