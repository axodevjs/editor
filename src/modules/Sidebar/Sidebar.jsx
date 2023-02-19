import React from "react";
import { useNavigate } from "react-router-dom";
import Title from "../../UI/Title";
import Commit from "./components/Commit/Commit";
import { StyledSidebar } from "./Styled";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <StyledSidebar>
      <Title margin="40px 0 0 40px">Изменения</Title>
      <Commit status="waiting" onClick={() => navigate("/commit")} />
      <Commit status="accepted" onClick={() => navigate("/commit")} />
    </StyledSidebar>
  );
};

export default Sidebar;
