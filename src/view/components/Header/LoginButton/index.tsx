import { useCallback,  useState } from "react"
import { ErrorBoundary } from "../../ErrorBoundary"
import AuthenticationModal from "../AuthenticationModal"
import styled from "styled-components"
import { useOutsideClick } from "../../../../hooks/useOutsideClick";

const SLoginWrapper = styled.div.attrs({
  className: 'login__wrapper'
})`

`;
const SLoginButton = styled.div.attrs({
  className: 'login__button'
})`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const LoginButton = () => {
  const [showModal, setShowModal] = useState(false)
  
  const handleOutsideClick = useCallback(() => {
    if(showModal) {
      setShowModal(false)
    }
  }, [showModal])
  const handleClickLogin = () => setShowModal(true)
  
  
  const modalRef = useOutsideClick(handleOutsideClick)

  return (
    <SLoginWrapper>
      <SLoginButton 
        onClick={handleClickLogin}
      >
        Sign In
      </SLoginButton>
      <AuthenticationModal 
        ref={modalRef}
        handleOutsideClick={handleOutsideClick}
        showModal={showModal} />
    </SLoginWrapper>
  )
}

export default () => (
  <ErrorBoundary>
    <LoginButton />
  </ErrorBoundary>
)
