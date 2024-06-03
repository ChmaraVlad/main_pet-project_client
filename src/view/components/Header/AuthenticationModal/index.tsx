import { RefObject, forwardRef } from "react"

import { AuthModal } from "./styles"
import AuthForm from "../../AuthForm"

  interface IProps {
    showModal: boolean
    handleOutsideClick: () => void
    ref: RefObject<HTMLDivElement>
  }

  export type Ref = HTMLDivElement;

const AuthenticationModal = forwardRef<Ref, IProps>((props: IProps, ref) => {
  const {showModal, handleOutsideClick} = props

  if(!showModal) return null

  return (
    <AuthModal ref={ref} $showModal={showModal}>
      <span
        onClick={handleOutsideClick}
        className="authentication-modal__close-button"
        >Close</span>
        <AuthForm authModal />
    </AuthModal>
  )
});

export default  AuthenticationModal
