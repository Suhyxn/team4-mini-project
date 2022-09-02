import React, { createContext, useRef, useState } from 'react'
import Additional from '../../components/template/Additional'
import CustomInput from '../../components/common/CustomInput'
import * as S from './style'
import SignUpForm from '../../components/signUP/SignUpForm'
import SignUpModal from '../../components/signUP/SignUpModal'

const initialFormData = {
  id: '',
  pw: '',
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
    <div>
      <FormContext.Provider value={{ formData, setFormData }}>
        <S.SignUpContainer>
          <S.Title>
            회원가입을 위한 <br /> 정보가 필요해요
          </S.Title>
          <SignUpForm modalRef={modalRef}></SignUpForm>
          <SignUpModal ref={modalRef} />
        </S.SignUpContainer>
      </FormContext.Provider>
      {/* <Additional /> */}
    </div>
  )
}

export default SignUp
