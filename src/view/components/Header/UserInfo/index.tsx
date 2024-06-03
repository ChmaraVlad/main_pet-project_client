import useAppSelector from "../../../../hooks/useSelectorCustom"
import { useGetUserQuery } from "../../../../services/userApi"
import { ErrorBoundary } from "../../ErrorBoundary"
import LoginButton from "../LoginButton"

const UserInfo = () => {
   const {isLoading} = useGetUserQuery('')

   const user = useAppSelector(({auth})=> auth.user)

   if(isLoading) return (
    <span>Loading...</span>
   )

  return (
    <div>
      {user ? (
        <div>
          <span>{user.email}</span>
        </div>
        ) : (
        <LoginButton />
      )}
    </div>
  )
}

export default () => (
  <ErrorBoundary>
    <UserInfo />
  </ErrorBoundary>
)
