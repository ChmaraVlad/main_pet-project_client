import styled, { css } from "styled-components";

export const AuthModal = styled.div.attrs({
  className: 'authentication-modal'
})<{$showModal: boolean}>`
  display: none;
  width: 800px;
  height: 600px;
  background-color: #fff;
  box-shadow: 0px 4px 5px 7px rgba(193,199,199,1);
  border-radius: 20px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  flex-direction: column;
  .authentication-modal__close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
  ${props => props.$showModal && css`
    display: flex;
  `}
`;
