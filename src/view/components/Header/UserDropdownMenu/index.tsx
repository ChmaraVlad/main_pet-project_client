import {  forwardRef, useEffect } from "react";
import { UseDropdownMenu } from "./styles";
import { User, UserRoles, logOut } from "../../../../store/slices/auth/authSlice";
import { useLogoutMutation } from "../../../../services/authApi";
import { useDispatch } from "react-redux";

  interface IProps {
    showModal: boolean
    user?: User
  }

  export type Ref = HTMLDivElement;

const UserDropdownMenu = forwardRef<Ref, IProps>((props: IProps, ref) => {
  const {showModal, user} = props

  const dispatch = useDispatch()

  const [logout, response] = useLogoutMutation()
  const {isSuccess} = response

  const handleClickSignOut = () => {
    logout('logout')
  }

  useEffect(()=>{
    if(isSuccess) {
      dispatch(logOut())
    }
  },[isSuccess, dispatch])

  if(!showModal) return null


  return (
    <UseDropdownMenu ref={ref} $showModal={showModal}>
      <div className="menu__item">{user?.username}</div>
      {user?.roles.includes(UserRoles.admin) ? (
        <div className="menu__item">Admin</div>
      ) : null}
      <div onClick={handleClickSignOut} className="menu__item signout-button">Sign Out</div>
    </UseDropdownMenu>
  )
});

export default UserDropdownMenu
