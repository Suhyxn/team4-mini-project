import { useEffect, useRef, useContext } from 'react'
import { FormContext } from '../../../routes/SignUp'
import { BiXCircle } from 'react-icons/bi'
import * as S from './style'

const ID_REGEX = new RegExp('^[a-z0-9_-]{5,20}$')
const NAME_REGEX = new RegExp('^[가-힣]{2,4}$')
const PW_REGEX = new RegExp('^[a-zA-Z0-9]{8,16}$')

const ERROR_MSG = {
  required: '필수 정보입니다.',
  invalidId: '5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.',
  invalidName: '한글 이름 2~4자 이내 사용 가능합니다.',
  invalidPw: '8~16자 영문 대 소문자, 숫자를 사용하세요.',
  invalidConfirmPw: '비밀번호가 일치하지 않습니다.',
}

const SignUpFormInput = ({
  id,
  label,
  inputProps,
  errorData,
  setErrorData,
}) => {
  const inputRef = useRef(null)
  const { formData, setFormData } = useContext(FormContext)

  const checkRegex = (inputId) => {
    let result
    const value = formData[inputId]
    if (value.length === 0) {
      result = 'required'
    } else {
      switch (inputId) {
        case 'id':
          result = ID_REGEX.test(value) ? true : 'invalidId'
          break
        case 'name':
          result = NAME_REGEX.test(value) ? true : 'invalidName'
          break
        case 'pw':
          result = PW_REGEX.test(value) ? true : 'invalidPw'
          checkRegex('confirmPw')
          break
        case 'confirmPw':
          result = value === formData['pw'] ? true : 'invalidConfirmPw'
          break
        default:
          return
      }
    }

    setErrorData((prev) => ({ ...prev, [inputId]: result }))
  }

  useEffect(() => {
    if (id === 'id') {
      inputRef.current.focus()
    }
  }, [])

  return (
    <>
      <S.SignUpInputBox>
        <S.SignUpLabel htmlFor={id}>{label}</S.SignUpLabel>
        <S.SignUpInput
          id={id}
          ref={inputRef}
          value={formData[id]}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, [id]: e.target.value }))
          }
          onBlur={() => checkRegex(id)}
          {...inputProps}
        />
      </S.SignUpInputBox>
      <S.ErrorMsg>
        {errorData[id] !== true ? ERROR_MSG[errorData[id]] : ''}
      </S.ErrorMsg>
    </>
  )
}

export default SignUpFormInput
