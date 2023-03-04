import { useNavigate } from "react-router-dom";
import LoginForm from "../../modules/LoginForm/LoginForm";
import { Container } from "./Styled";
import {useState} from "react";
import {loginAction} from "../../actions/user";
import {observer} from "mobx-react-lite";
import AppStore from "../../store/AppStore";

const LoginPage = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
      if (login?.length > 0 && password?.length > 0) {
          loginAction(login, password).then((response) => {
              if (response?.status === 200) {

                  AppStore.setUser(response?.data?.user)
                  navigate('/documents')
              }
          });
      } else {
          alert("Заполните все поля")
      }
  }

  return (
    <Container>
      <LoginForm
        title="Вход"
        buttonText="Войти"
        alreadyText="У меня нет аккаунта"
        alreadyClick={() => navigate("/registration")}
        onSubmit={onSubmit}
        login={login}
        setLogin={setLogin}
        password={password}
        setPassword={setPassword}
      />
    </Container>
  );
};

export default observer(LoginPage);
