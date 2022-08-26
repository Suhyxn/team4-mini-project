import Piece from './Piece'
import { gender, age, job, hobby, house } from '../../../constants/buttonData'
import Button from '../../common/Button'
import * as S from './style'

function Additional() {
  return (
    <S.Container>
      <S.Form onSubmit={(e) => e.preventDefault()}>
        <S.Title>
          username을 위한 <br /> 서비스를 위해 입력해주세요!
        </S.Title>
        <Piece title="성별" items={gender} />
        <Piece title="나이" items={age} />
        <Piece title="직업" items={job} />
        <Piece title="취미생활" items={hobby} />
        <Piece title="자가여부" items={house} />
      </S.Form>
      <Button width="100%" hegiht="5.2rem" disabled>
        회원가입 완료
      </Button>
    </S.Container>
  )
}

export default Additional
