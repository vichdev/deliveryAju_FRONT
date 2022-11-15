import React from "react";
import * as Styles from "./styles";
import { AiOutlineClose } from "react-icons/ai";
import { useApp } from "../../context/AppContext";

const Sidebar: React.FC = () => {
  const { sidebar, setSidebar } = useApp();

  return (
    <Styles.SidebarContainer isSidebarOpen={sidebar}>
      <Styles.SidebarWrapper>
        <Styles.SidebarHeader>
          <Styles.SidebarTitle>Menu</Styles.SidebarTitle>
          <AiOutlineClose
            onClick={() => {
              setSidebar(!sidebar);
            }}
          />
        </Styles.SidebarHeader>
      </Styles.SidebarWrapper>
    </Styles.SidebarContainer>
  );
};

export default Sidebar;
