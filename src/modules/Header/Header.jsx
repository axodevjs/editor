import React from "react";
import AppStore from "../../store/AppStore";
import Button from "../../UI/Button";
import User from "../../UI/User";
import { Container, DocumentTitle, UsersBlock, UsersList } from "./Styled";
import { observer } from "mobx-react-lite";
import DocumentsStore from "../../store/DocumentsStore";

const Header = () => {
  return (
    <Container>
      <UsersBlock>
        Users:
        <UsersList>
          {DocumentsStore.document?.users?.map((item, i) => (
            <User key={i} email={item?.email} />
          ))}
          {AppStore?.role === "Создатель" || AppStore?.role === "Редактор" ? (
            <Button
              onClick={() => AppStore.setShowInvitePopup(true)}
              margin="0 0 0 22px"
              padding="8.5px 16px"
            >
              +
            </Button>
          ) : (
            ""
          )}
        </UsersList>
      </UsersBlock>
      <DocumentTitle>{DocumentsStore.document?.title}</DocumentTitle>
    </Container>
  );
};

export default observer(Header);
