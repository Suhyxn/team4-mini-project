import React, { createContext, useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import Button from '../../common/Button'
import UserDetailForm from '../UserDetailForm'
import * as S from './style'
import { useRegisterMutation } from '../../../store/slices/authApiSlice'

const initialAddInfo = {
  gender: null,
  age: null,
  job: null,
  income: null,
  hobby: null,
  house: null,
}
export const AddFormContext = createContext({
  addInfo: initialAddInfo,
  setAddInfo: () => {},
})

function Additional() {
  const [register, { isLoading }] = useRegisterMutation()
  const { state: userData } = useLocation()
  const navigation = useNavigate()
  const [addInfo, setAddInfo] = useState(initialAddInfo)
  // const [userInfo, setUserInfo] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()
    const userInfo = {
      ...userData,
      gender: addInfo.gender,
      age: addInfo.age.slice(0, 2),
      job: addInfo.job,
      income: addInfo.income.slice(0, 4),
      hobby: addInfo.hobby,
      house: addInfo.house === 'Y' ? true : false,
    }
    try {
      register(userInfo)
    } catch (error) {
    } finally {
      window.alert('가입이 정상적으로 진행되었습니다')
      navigation('../favorites')
    }
  }

  return (
    <AddFormContext.Provider value={{ addInfo, setAddInfo }}>
      <S.Container>
        <S.Form onSubmit={handleSubmit}>
          <S.Title>
            username을 위한 <br /> 서비스를 위해 입력해주세요!
          </S.Title>
          <UserDetailForm />
          <Button width="100%" height="5.2rem">
            회원가입 완료
          </Button>
        </S.Form>
      </S.Container>
    </AddFormContext.Provider>
  )
}

export default Additional
