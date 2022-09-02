import { useState } from 'react'
import * as S from './style'
import CustomInput from '../../components/common/CustomInput'
import Button from '../../components/common/Button'
import { useDispatch } from 'react-redux'
import {
  useLoginMutation,
  useGetIsduplicateQuery,
} from '~/store/slices/authApiSlice'
import { useNavigate } from 'react-router'

function Login() {
  const [login, { isLoading }] = useLoginMutation()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [errMsg, setErrMsg] = useState('')

  let [isActive, setIsActive] = useState(false)
  const submitHandler = async (text) => {
    console.log(text) //id, pwd
    const { id, pwd } = text
    //호출 api
    try {
      const userData = await login({ username: id, password: pwd }).unwrap()
      dispatch(setCredentials({ ...userData }))
      navigate('/recommened')
    } catch (error) {
      if (!error?.originalStatus) {
        // isLoading: true until timeout occurs
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
  const onClickHandler = () => {
    setIsActive(true)
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
                propFunction={submitHandler}
                isActive={isActive}
              />
              <S.BtnBox>
                <Button size="medium" onClick={onClickHandler}>
                  로그인
                </Button>
                <Button size="medium" disabled={isActive}>
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
