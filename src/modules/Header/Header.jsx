import React from "react";
import AppStore from "../../store/AppStore";
import Button from "../../UI/Button";
import User from "../../UI/User";
import { Container, DocumentTitle, UsersBlock, UsersList } from "./Styled";

const Header = () => {
  return (
    <Container>
      <UsersBlock>
        Users:
        <UsersList>
          <User name="Алексей" />
          <User name="John" margin="0 0 0 22px" />
          <Button
            onClick={() => AppStore.setShowInvitePopup(true)}
            margin="0 0 0 22px"
            padding="8.5px 16px"
          >
            +
          </Button>
        </UsersList>
      </UsersBlock>
      <DocumentTitle>Document 1</DocumentTitle>
    </Container>
  );
};

export default Header;
