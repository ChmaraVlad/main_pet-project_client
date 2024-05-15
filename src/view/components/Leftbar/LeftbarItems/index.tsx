import React, { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ItemsList,
  ItemContainer,
  ItemWrapper,
  ItemName,
} from "../styles";

import leftbarData from "../../../../data/leftbarItems";

const LeftbarItems: FC<{displaySidebar?: boolean}> = ({ displaySidebar }) => {
  let location = useLocation();

  return (
    <ItemsList>
      {leftbarData.map((itemData, index) => (
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
      ))}
    </ItemsList>
  );
};

export default LeftbarItems;