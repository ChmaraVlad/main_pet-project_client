import styled from "styled-components"
import { ErrorBoundary } from "../ErrorBoundary"
import UserInfo from "./UserInfo"

const StHeader = styled.header.attrs({
  className: 'header'
})`
  width: 100%;
  height: auto;
  padding: 20px;
  box-shadow: 0px 4px 5px 0px rgba(0,0,0,0.35);
  text-align: center;
  position: relative;
  z-index: 2;
  background-color: #fff;
  display: flex;
  justify-content: flex-end;
  .header__logo {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);
    font-size: 20px;
    font-weight: bold;
  }
`

const Header = () => {

  return (
    <StHeader>
      <span className="header__logo">Logo</span>  
      <UserInfo />
    </StHeader>
  )
}

export default () => (
    <ErrorBoundary>
        <Header />
    </ErrorBoundary>
)
