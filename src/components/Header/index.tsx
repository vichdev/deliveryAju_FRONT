import React from "react";
import * as Styles from "./styles";
import { RiAccountCircleFill, RiMenuFill } from "react-icons/ri";
import { useApp } from "../../context/AppContext";

const Header: React.FC = () => {
  const { sidebar, setSidebar } = useApp();

  return (
    <Styles.HeaderWrapper>
      <Styles.Header>
        <Styles.HeaderTitle>DeliveryAJU</Styles.HeaderTitle>
        <Styles.HeaderNavbar>
          <RiAccountCircleFill />
          <RiMenuFill onClick={() => setSidebar(!sidebar)} />
        </Styles.HeaderNavbar>
      </Styles.Header>
    </Styles.HeaderWrapper>
  );
};

export default Header;
