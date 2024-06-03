import { useCallback, useState } from "react"
import useAppSelector from "../../../../hooks/useSelectorCustom"
import { useOutsideClick } from "../../../../hooks/useOutsideClick"
import UserDropdownMenu from "../UserDropdownMenu"
import { SUserInfo } from "./styles"

const UserInfo = () => {
  const user = useAppSelector(({auth})=> auth.user)
  console.log("🚀 ~ UserInfo ~ user:", user)

  const [showModal, setShowModal] = useState(false)

  const handleOutsideClick = useCallback(() => {
    if(showModal) setShowModal(false)
  }, [showModal])

  const dropdownRef = useOutsideClick(handleOutsideClick)

  if(!user) return null

  return (
    <SUserInfo>
      <span onClick={()=> setShowModal(true)}>{user.email}</span>
      <UserDropdownMenu 
        user={user} 
        showModal={showModal} 
        ref={dropdownRef} />
    </SUserInfo>
  )
}

export default UserInfo
