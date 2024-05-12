import React, { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ItemsList,
  ItemContainer,
  ItemWrapper,
  ItemName,
} from "../styles";

import leftbarData from "../../../../data/leftbarItems";
import useSelectorCustom from "../../../../hooks/useSelectorCustom";

const LeftbarItems: FC<{displaySidebar?: boolean}> = ({ displaySidebar }) => {
  let location = useLocation();

    const isLoggedIn = useSelectorCustom(({auth}) => auth.user);

  return (
    <ItemsList>
      {leftbarData.map((itemData, index) => {
        if(itemData.isProtected && !isLoggedIn) {
          return null
        }
        return (
        <ItemContainer
          key={index}
          className={itemData.path === location?.pathname ? "active" : ""}
        >
          <Link to={itemData.path}>
            <ItemWrapper>
              {itemData.icon}
              <ItemName $displaySidebar={displaySidebar}>
                {itemData.name}
              </ItemName>
            </ItemWrapper>
          </Link>
        </ItemContainer>
      )})}
    </ItemsList>
  );
};

export default LeftbarItems;