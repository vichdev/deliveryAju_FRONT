import React from "react";
import * as Styles from "./styles";
import { AiOutlineClose } from "react-icons/ai";
import { useApp } from "../../context/AppContext";
import Input from "../Input";
import { FiSearch } from "react-icons/fi";

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
        <Input placeholder="teste" label="Pesquisa" icon={<FiSearch />} />
      </Styles.SidebarWrapper>
    </Styles.SidebarContainer>
  );
};

export default Sidebar;
