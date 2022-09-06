import React, { createContext, useRef, useState } from 'react'
import * as S from './style'
import SignUpForm from '../../components/signUP/SignUpForm'
import SignUpModal from '../../components/signUP/SignUpModal'
import { Outlet } from 'react-router-dom'

const initialFormData = {
  id: '',
  pw: '',
  name: '',
  confirmPw: '',
}

export const FormContext = createContext({
  formData: initialFormData,
  setFormData: () => {},
})

function SignUp() {
  const [formData, setFormData] = useState(initialFormData)
  const modalRef = useRef(null)
  return (
    <>
      <div>
        <FormContext.Provider value={{ formData, setFormData }}>
          <S.SignUpContainer>
            <S.Title>
              회원가입을 위한 <br /> 정보가 필요해요
            </S.Title>
            <SignUpForm modalRef={modalRef}></SignUpForm>
            <SignUpModal ref={modalRef} formData={formData} />
          </S.SignUpContainer>
        </FormContext.Provider>
      </div>
    </>
  )
}

export default SignUp
