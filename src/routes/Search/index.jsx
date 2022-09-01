import React, { useState } from 'react'
import * as S from './style'
import { BsSearch } from 'react-icons/bs'
import SearchBox from '../../components/common/SearchBox'

function Search() {
  const [submit, setSubmit] = useState(false)
  const [searchData, setSearchData] = useState({
    productType: 'loan',
    searchKeyword: '',
  })

  const selectHandler = (e) => {
    const { value } = e.target
    setSearchData({
      ...searchData,
      productType: value,
    })
  }

  const searchHandler = (e) => {
    const { value } = e.target
    setSearchData({
      ...searchData,
      searchKeyword: value,
    })
  }

  const submitHandler = () => {
    setSubmit(true)
  }

  const tagHandler = (name) => {
    setSearchData({
      ...searchData,
      searchKeyword: name,
    })
    setSubmit(true)
  }

  return (
    <>
      <S.Container>
        <S.Box>
          <S.InputBox>
            <S.Select name={searchData.productType} onChange={selectHandler}>
              <option value="loan">대출</option>
              <option value="card">카드</option>
            </S.Select>
            <S.Input
              placeholder="검색어를 입력해주세요"
              onChange={searchHandler}
            />
            <S.searchBox onClick={submitHandler}>
              <BsSearch size="2.5rem" />
            </S.searchBox>
          </S.InputBox>
        </S.Box>
        <S.TagContainer>
          <S.TagBox>추천 검색어</S.TagBox>
          <S.Wrap>
            {searchData.productType === 'loan'
              ? ['주부', '모바일', '제1금융권'].map((item, index) => (
                  <S.Tag onClick={() => tagHandler(item)} key={index}>
                    {item}
                  </S.Tag>
                ))
              : ['주부', '게임', '20대'].map((item, index) => (
                  <S.Tag
                    value={item}
                    onClick={() => tagHandler(item)}
                    key={index}
                  >
                    {item}
                  </S.Tag>
                ))}
          </S.Wrap>
        </S.TagContainer>
        {submit && <SearchBox data={searchData} />}
      </S.Container>
    </>
  )
}

export default Search
