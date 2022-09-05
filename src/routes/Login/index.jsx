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
import { Cookies } from 'react-cookie'

function Login() {
  let [active, setActive] = useState({
    name: false,
    id: false,
    pwd: false,
  })
  const [userInput, setUserInput] = useState({
    name: '',
    id: '',
    pwd: '',
  })

  const inputHandler = (e) => {
    const { name } = e.target

    setActive({
      ...active,
      [name]: true,
    })
  }
  const inputBlurHandler = (name) => {
    setActive({
      ...active,
      [name]: false,
    })
  }

  const onUserInputChange = (e) => {
    const { name, value } = e.target
    setUserInput({ ...userInput, [name]: value })
  }

  const cookies = new Cookies()
  const [login, { isLoading }] = useLoginMutation()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  // const [errMsg, setErrMsg] = useState('')
  const [userData, setUserData] = useState(null)

  // let [isActive, setIsActive] = useState(false)
  const onClickHandler = async () => {
    const { id, pwd } = userInput

    // 호출 api
    try {
      const userData = await login({ username: id, password: pwd })
      console.log('userData111', userData)
      console.log('userData222')
      console.log('userData333', { ...userData })
      // console.log('userData', userData)
      // dispatch(setCredentials(userData['data']['accessToken']))
      dispatch(setCredentials({ accessToken: '뭐지?' }))

      // navigate('../recommened')
    } catch (error) {
      // if (!error?.originalStatus) {
      //   // isLoading: true until timeout occurs
      //   // setErrMsg('No Server Response')
      //   return console.log('No Server Response')
      // } else if (error.originalStatus === 400) {
      //   // setErrMsg('Missing Username or Password')
      //   return console.log('Missing Username or Password')
      // } else if (error.originalStatus === 401) {
      //   return console.log('Unauthorized')

      //   // setErrMsg('Unauthorized')
      // } else {
      //   // setErrMsg('Login Failed')
      //   return console.log('Login Failed')
      // }
      console.log('error')
    }
  }
  // const onClickHandler = () => {
  //   setActive(true)
  // }

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <S.Container>
          {/* {errMsg ? (
            <S.Title>{errMsg}</S.Title>
          ) : ( */}
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
              <Button
                size="medium"
                disabled={active}
                onClick={() => navigate('/signup')}
              >
                회원가입
              </Button>
            </S.BtnBox>
          </>
          {/* )} */}
        </S.Container>
      )}
    </div>
  )
}

export default Login
