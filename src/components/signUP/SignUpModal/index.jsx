import { forwardRef, useContext } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { FormContext } from '../../../routes/SignUp'
import Button from '../../common/Button'
import * as S from './style'

const SignUpModal = forwardRef((props, ref) => {
  const { formData } = useContext(FormContext)
  let navigate = useNavigate()
  const handleClick = (type) => {
    ref.current.close()
    // type === 'approve' && window.alert('가입되었습니다 🥳 ')
    if (type === 'approve') {
      navigate('/additional')
    }
  }

  return (
    <S.SignUpModal id="modal" ref={ref}>
      <S.Div>
        <S.Div>
          <h3>입력하신 내용을 확인해주세요.</h3>
          <S.Div>
            <S.Div>
              아이디
              <S.P id="confirm-id">{formData.id}</S.P>
            </S.Div>
            <S.Div>
              비밀번호
              <S.P id="confirm-pw">{formData.pw}</S.P>
            </S.Div>
          </S.Div>
        </S.Div>
        <S.Div>
          <Button
            id="cancel-btn"
            type="button"
            onClick={() => handleClick('cancel')}
          >
            취소하기
          </Button>
          <Button
            id="approve-btn"
            type="button"
            onClick={() => handleClick('approve')}
          >
            계속하기
          </Button>
        </S.Div>
      </S.Div>
    </S.SignUpModal>
  )
})

export default SignUpModal
