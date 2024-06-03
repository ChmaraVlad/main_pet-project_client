import React, { FC, useState } from "react";

import {
  Children,
  SidebarContainer,
  SidebarWrapper,
  SidebarLogoWrapper,
  SidebarLogo,
  SidebarBrand,
  SidebarToggler,
} from "./styles";

import LeftbarItems  from "./LeftbarItems";

const Leftbar: FC<{children: React.ReactNode}> = ({ children }) => {
  const [displaySidebar, setDisplaySidebar] = useState(false);

  const handleSidebarDisplay = (e: React.MouseEvent<Element, MouseEvent>) => {
    if (window.innerWidth > 468) {
      setDisplaySidebar(!displaySidebar);
    } else {
      setDisplaySidebar(false);
    }
  };

  return (
    <>
      <SidebarContainer $displaySidebar={displaySidebar}>
        <SidebarWrapper>
          <SidebarLogoWrapper $displaySidebar={displaySidebar}>
            <SidebarLogo href="#">
              <SidebarBrand
                $displaySidebar={displaySidebar}
                className="app__brand__text"
              >
                Menu
              </SidebarBrand>
            </SidebarLogo>
            <SidebarToggler
              $displaySidebar={displaySidebar}
              onClick={(e) => handleSidebarDisplay(e)}
            >
              <div className="outer__circle">
                <div className="inner__circle" />
              </div>
            </SidebarToggler>
          </SidebarLogoWrapper>
          <LeftbarItems displaySidebar={displaySidebar} />
        </SidebarWrapper>
      </SidebarContainer>
      <Children $displaySidebar={displaySidebar}>{children}</Children>
    </>
  );
}

export default Leftbar