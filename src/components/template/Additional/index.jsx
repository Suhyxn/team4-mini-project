import Button from '../../common/Button'
import UserDetailForm from '../UserDetailForm'
import * as S from './style'

function Additional() {
  return (
    <S.Container>
      <S.Form onSubmit={(e) => e.preventDefault()}>
        <S.Title>
          username을 위한 <br /> 서비스를 위해 입력해주세요!
        </S.Title>
        <UserDetailForm hegiht="3.3rem" />
        <Button width="100%" height="5.2rem" disabled>
          회원가입 완료
        </Button>
      </S.Form>
    </S.Container>
  )
}

export default Additional
