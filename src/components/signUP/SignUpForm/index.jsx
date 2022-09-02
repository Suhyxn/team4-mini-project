import { useState, useContext } from 'react'
import { FormContext } from '../../../routes/SignUp'
import SignUpFormInput from '../SignUpFormInput'
import Button from '../../common/Button'
import * as S from './style'

const initialErrorData = {
  id: '',
  pw: '',
  confirmPw: '',
}

const SignUpForm = ({ modalRef }) => {
  const [errorData, setErrorData] = useState(initialErrorData)
  const { formData } = useContext(FormContext)
  const handleSubmit = (e) => {
    e.preventDefault()

    const isValid = Object.values(errorData).every((value) => value === true)
    isValid && modalRef.current.showModal()

    console.log(formData)
  }

  return (
    <form id="form" autoComplete="off" onSubmit={handleSubmit}>
      <SignUpFormInput
        id={'id'}
        label={'아이디'}
        errorData={errorData}
        setErrorData={setErrorData}
        inputProps={{
          type: 'text',
          placeholder: '아이디를 입력해주세요.',
          // autoFocus: true,
        }}
      />
      <Button>ID 중복검사</Button>
      <SignUpFormInput
        id={'pw'}
        label={'비밀번호'}
        errorData={errorData}
        setErrorData={setErrorData}
        inputProps={{
          type: 'password',
          placeholder: '비밀번호를 입력해주세요',
          autoComplete: 'off',
        }}
      />
      <SignUpFormInput
        id={'confirmPw'}
        label={'비밀번호 확인'}
        errorData={errorData}
        setErrorData={setErrorData}
        inputProps={{
          type: 'password',
          placeholder: '비밀번호 확인을 입력해주세요.',
          autoComplete: 'off',
        }}
      />
      <Button>
        <S.Input id="submit" type="submit" value="가입하기" />
      </Button>
    </form>
  )
}

export default SignUpForm
