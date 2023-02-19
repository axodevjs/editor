import { observer } from "mobx-react-lite";
import React from "react";
import CommentsStore from "../../../../store/CommentsStore";
import User from "../../../../UI/User";
import {
  ActionIcon,
  Actions,
  CommentIcon,
  Date,
  Left,
  Right,
  Sides,
  StyledCommit,
} from "./Styled";

const Commit = (props) => {
  const onCommentClick = () => {
    CommentsStore.setShowModal(true);
    console.log(CommentsStore.showModal);
  };

  return (
    <StyledCommit>
      <Sides>
        <Left onClick={props?.onClick}>
          <User
            name="Алексей"
            color={
              (props?.status === "waiting" && "#E3A400") ||
              (props?.status === "accepted" && "#2FA0F2")
            }
          />
          <Date>2022-10-10 &nbsp; 15:30</Date>
        </Left>
        <Right>
          <CommentIcon
            onClick={onCommentClick}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M22 22L18 18H2V2H22V22Z" fill="#333333" />
          </CommentIcon>
        </Right>
      </Sides>

      <Actions>
        <ActionIcon
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.0303 26.75L5.71777 18.4375L7.7959 16.3594L14.0303 22.5938L27.4105 9.21356L29.4886 11.2917L14.0303 26.75Z"
            fill="black"
          />
        </ActionIcon>
        <ActionIcon>
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M27.8122 9.84794L25.7559 7.79169L17.6038 15.9438L9.45176 7.79169L7.39551 9.84794L15.5476 18L7.39551 26.1521L9.45176 28.2084L17.6038 20.0563L25.7559 28.2084L27.8122 26.1521L19.6601 18L27.8122 9.84794Z"
              fill="black"
            />
          </svg>
        </ActionIcon>
      </Actions>
    </StyledCommit>
  );
};

export default observer(Commit);
