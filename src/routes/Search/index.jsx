import React from 'react'
import * as S from './style'
import { BsSearch } from 'react-icons/bs'

function Search() {
  return (
    <>
      <S.Container>
        <S.Box>
          <S.InputBox>
            <S.Select name="select">
              <option value="loan" selected>
                대출
              </option>
              <option value="card">카드</option>
            </S.Select>
            <S.Input placeholder="검색어를 입력해주세요" />
            <BsSearch size="2.5rem" />
          </S.InputBox>
        </S.Box>
        <S.TagContainer>
          <S.TagBox>추천 검색어</S.TagBox>
          <S.Wrap>
            <S.Tag>카드/주부</S.Tag>
            <S.Tag>대출/모바일</S.Tag>
            <S.Tag>대출/1금융권</S.Tag>
            <S.Tag>카드/20대</S.Tag>
          </S.Wrap>
        </S.TagContainer>
      </S.Container>
    </>
  )
}

export default Search
