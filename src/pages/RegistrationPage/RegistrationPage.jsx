import { useNavigate } from "react-router-dom";
import LoginForm from "../../modules/LoginForm/LoginForm";
import { Container } from "./Styled";

const RegistrationPage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <LoginForm
        title="Регистрация"
        email
        buttonText="Зарегистрироваться"
        alreadyText="У меня уже есть аккаунт"
        alreadyClick={() => navigate("/login")}
        onSubmit={() => navigate("/documents")}
      />
    </Container>
  );
};

export default RegistrationPage;
