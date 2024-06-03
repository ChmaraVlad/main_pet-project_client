import styled, { css } from "styled-components";

export const UseDropdownMenu = styled.div.attrs({
  className: 'user-dropdown-menu menu'
})<{$showModal: boolean}>`
  display: none;
  width: auto;
  height: auto;
  min-width: 200px;
  min-height: 200px;
  background-color: #fff;
  box-shadow: 0px 4px 5px 7px rgba(193,199,199,1);
  border-radius: 20px;
  position: absolute;
  top: 30px;
  right: 0;
  flex-direction: column;
  gap: 20px;
  .signout-button {
    margin-top: auto;
    &:hover {
      box-shadow: 0px 4px 5px 7px rgba(193,199,199,1);
      border-radius: 15px;
    }
  }
  .menu__item {
    padding: 10px 0;
    cursor: pointer;
  }
  ${props => props.$showModal && css`
    display: flex;
  `}
`;
