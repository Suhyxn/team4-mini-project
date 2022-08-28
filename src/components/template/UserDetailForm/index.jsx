import { gender, age, job, hobby, house } from '../../../constants/buttonData'
import Radio from '../../common/Radio'
import Input from '../../common/Input'
import * as S from './style'

function UserDetailForm() {
  return (
    <>
      <S.SubTitle>성별</S.SubTitle>
      <Radio items={gender} />
      <S.SubTitle>나이</S.SubTitle>
      <Radio items={age} />
      <S.SubTitle>직업</S.SubTitle>
      <Radio items={job} />
      <S.SubTitle>연소득</S.SubTitle>
      <S.Input className="flex">
        <Input
          size="lg"
          width="100%"
          placeholder="예)30"
          className="flex-grow-1"
        />
        <S.Text> 만원</S.Text>
      </S.Input>
      <S.SubTitle>취미여부</S.SubTitle>
      <Radio items={hobby} />
      <S.SubTitle>자가여부</S.SubTitle>
      <Radio items={house} />
    </>
  )
}

export default UserDetailForm
