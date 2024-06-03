import useAppSelector from "../../../../hooks/useSelectorCustom"
import { useGetUserQuery } from "../../../../services/userApi"
import { ErrorBoundary } from "../../ErrorBoundary"
import LoginButton from "../LoginButton"
import UserInfo from "../UserInfo"

const RightSide = () => {
   const {isLoading} = useGetUserQuery('')

   const user = useAppSelector(({auth})=> auth.user)

   if(isLoading) return (
    <span>Loading...</span>
   )

  return (
    <div>
      {user ? (
        <UserInfo />
        ) : (
        <LoginButton />
      )}
    </div>
  )
}

export default () => (
  <ErrorBoundary>
    <RightSide />
  </ErrorBoundary>
)
