import { useState } from 'react'
import * as S from './style'
import CustomInput from '../../components/common/CustomInput'
import Button from '../../components/common/Button'
import { useDispatch } from 'react-redux'
import {
  useLoginMutation,
  useGetIsduplicateQuery,
} from '~/store/slices/authApiSlice'
import { useNavigate } from 'react-router-dom'
import { Cookies } from 'react-cookie'
import { setCredentials } from '../../store/slices/authSlice'
import useInputValue from '../../components/Hook/useInputValue'

function Login() {
  const [active, userInput, inputHandler, inputBlurHandler, onUserInputChange] =
    useInputValue()
  const cookies = new Cookies()
  const [login, { isLoading }] = useLoginMutation()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [errMsg, setErrMsg] = useState('')
  const [userData, setUserData] = useState(null)

  const onClickHandler = async () => {
    const { id, pwd } = userInput

    try {
      const userData = await login({ username: id, password: pwd })
      dispatch(setCredentials(userData['data']))
      navigate('/favorites', { replace: true })
    } catch (error) {
      if (!error?.originalStatus) {
        setErrMsg('No Server Response')
      } else if (error.originalStatus === 400) {
        setErrMsg('Missing Username or Password')
      } else if (error.originalStatus === 401) {
        setErrMsg('Unauthorized')
      } else {
        setErrMsg('Login Failed')
      }
    }
  }

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <S.Container>
          {errMsg ? (
            <S.Title>{errMsg}</S.Title>
          ) : (
            <>
              <S.Title>로그인 한 번이면 간편하게!</S.Title>
              <CustomInput
                disabled="disabled"
                active={active}
                userInput={userInput}
                inputBlurHandler={inputBlurHandler}
                inputHandler={inputHandler}
                onUserInputChange={onUserInputChange}
              />
              <S.BtnBox>
                <Button size="medium" onClick={onClickHandler}>
                  로그인
                </Button>
                <Button size="medium" onClick={() => navigate('/signup')}>
                  회원가입
                </Button>
              </S.BtnBox>
            </>
          )}
        </S.Container>
      )}
    </div>
  )
}

export default Login
