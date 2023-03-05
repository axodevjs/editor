import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import AppStore from "../../store/AppStore";
import { Background, Window } from "./Styled";
import Title from "../../UI/Title";
import Input from "../../UI/Input";
import Select from "../../UI/Select";
import Button from "../../UI/Button";
import DocumentsStore from "../../store/DocumentsStore";
import { addUser } from "../../actions/user";

const InvitePopup = () => {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Редактор");

  const onSubmit = () => {
    addUser(email, role, DocumentsStore.document?._id).then((response) => {
      setEmail("");
      setRole("Редактор");
    });
    AppStore.setShowInvitePopup(false);
  };

  return (
    <>
      <Background
        onClick={() => AppStore.setShowInvitePopup(false)}
        show={AppStore.showInvitePopup}
      />
      <Window show={AppStore.showInvitePopup}>
        <Title>Приглашение пользователя</Title>
        <Input
          width="60%"
          margin="51px 0 0 0"
          value={email}
          setValue={setEmail}
          placeholder="Email"
        />
        <Select
          width="60%"
          margin="20px 0 0 0"
          value={role}
          setValue={setRole}
          options={[
            { name: "Редактор" },
            { name: "Комментатор" },
            { name: "Читатель" },
          ]}
        />

        <div>
          <Button margin="20px 0 0 0" wauto onClick={onSubmit}>
            Отправить
          </Button>
        </div>
      </Window>
    </>
  );
};

export default observer(InvitePopup);
