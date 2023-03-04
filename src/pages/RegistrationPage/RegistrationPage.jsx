import { useNavigate } from "react-router-dom";
import LoginForm from "../../modules/LoginForm/LoginForm";
import { Container } from "./Styled";
import {useState} from "react";
import {loginAction, registrationAction} from "../../actions/user";
import AppStore from "../../store/AppStore";

const RegistrationPage = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
      if (login?.length > 0 && email?.length > 0 && password?.length > 0) {
          registrationAction(login, email, password).then((response) => {
              if (response?.status === 200) {
                  alert("Аккаунт создан! Войдите в него")
                  navigate('/login')
              }
          });
      } else {
          alert("Заполните все поля")
      }

  }

  return (
    <Container>
      <LoginForm
        title="Регистрация"
        haveEmail
        buttonText="Зарегистрироваться"
        alreadyText="У меня уже есть аккаунт"
        alreadyClick={() => navigate("/login")}
        onSubmit={onSubmit}
        login={login}
        setLogin={setLogin}
        password={password}
        setPassword={setPassword}
        email={email}
        setEmail={setEmail}
      />
    </Container>
  );
};

export default RegistrationPage;
