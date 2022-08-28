import Button from '../../common/Button'
import UserDetailForm from '../UserDetailForm'
import * as S from './style'

function index() {
  return (
    <S.Container>
      <S.Form onSubmit={(e) => e.preventDefault()}>
        <UserDetailForm />
        <Button width="100%" height="5.2rem" disabled>
          회원수정 완료
        </Button>
      </S.Form>
    </S.Container>
  )
}

export default index
