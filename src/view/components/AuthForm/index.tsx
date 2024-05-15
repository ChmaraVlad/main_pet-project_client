import { FC } from "react"
import { useForm, SubmitHandler } from "react-hook-form"

import {AuthFormContent, AuthFormWrapper, AuthInput, AuthLabel, AuthSpan, AuthSpanErrors, ButtonSubmit, ResultFromResponse} from './styles'
import { useLoginMutation } from "../../../store/slices/auth/authApiSlice"
import { PostResponseFromRTK } from "../../../types"
import useSelectorCustom from "../../../hooks/useSelectorCustom"


type Inputs = {
  email: string
  password: string
}


const AuthForm: FC = () => {
  const form = useForm<Inputs>()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form

  const user = useSelectorCustom(({auth}) => auth.user)
  const [login, loginDataFomRequest] = useLoginMutation()
  const {isLoading, isError, error: onErrorPostLogin, isSuccess} = loginDataFomRequest
  
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    login({email: data.email, password: data.password})
    // user hardcoded in DB ({email: 'john@email.com', password: 'password'})
  }

  if(user) {
    return (
      <>
        Welcome {user?.username}
        <p>You are signed in already</p>
      </>
    )
  }
    
  return (
    <AuthFormWrapper>
      <AuthFormContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <AuthLabel>
            <AuthSpan>Email</AuthSpan>
            <AuthInput
              $error={errors.email ? true : undefined}
              type="email"
              defaultValue="john@email.com" 
              {...register("email", { 
                required: true,
                // validate: {
                //   isEmail: (value) =>
                //     validator.isEmail(value) || "Not a valid email 📧",
                // },
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Entered value does not match email format",
                },
                })} />
            {errors.email && <AuthSpanErrors>This field is required</AuthSpanErrors>}
          </AuthLabel>
          <AuthLabel>
            <AuthSpan>
              Password
            </AuthSpan>
            <AuthInput
              $error={errors.password ? true : undefined}
              defaultValue="password" 
              type="password"
              {...register("password", { required: true })} />
            {errors.password && <AuthSpanErrors>This field is required</AuthSpanErrors>}
          </AuthLabel>
          <ButtonSubmit type="submit" value='Sign In' />
        </form>
        {isLoading ? <ResultFromResponse $colorText='blue'>Loading...</ResultFromResponse> : null}
        {isError ? (
          <ResultFromResponse $colorText='red'>
            {('status' in (onErrorPostLogin || {}))
          && (onErrorPostLogin as PostResponseFromRTK).data?.message}
          </ResultFromResponse>
        ) : null}
        {isSuccess ? (
          <ResultFromResponse $colorText='green'>
            Success
          </ResultFromResponse>
        ) : null}
      </AuthFormContent>
    </AuthFormWrapper>
  )
}

export default AuthForm
