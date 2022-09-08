import * as S from './style'
import { useNavigate } from 'react-router-dom'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import {
  useAddLoanToFavoritesMutation,
  useDeleteLoanInFavoriteMutation,
} from '../../../store/slices/favoriteApiSlice'

function Loan({ item }) {
  // const tags = ['중도상환수수료 없음', '무서류', '모바일', '직장인', '2금융권']
  const {
    img: imageURL,
    loanCompany: bank,
    loanName: name,
    rate: rates,
    isfavorite: favorite,
    loanId: id,
    tag: tag,
  } = item
  const tags = tag.split(' ')
  tags.includes('주부')
    ? tags.unshift('중도상환수수료 없음', '무서류')
    : tags.unshift('우대금리 가능', '즉시입금')
  const navigate = useNavigate()

  const [addLoanToFavorites] = useAddLoanToFavoritesMutation()
  const [deleteLoanInFavorite] = useDeleteLoanInFavoriteMutation()
  const addFavoriteHandler = (e) => {
    e.stopPropagation()
    favorite
      ? deleteLoanInFavorite(id)
      : addLoanToFavorites({
          loanId: id,
        })
  }
  return (
    <>
      <S.Container onClick={() => navigate(`/loan/${id}`)}>
        <S.imgBox>
          <S.StyledImg src={imageURL} />
        </S.imgBox>
        <S.InfoBox>
          <S.Title>{bank}</S.Title>
          <S.SubTitle>{name}</S.SubTitle>
          <S.Rate>
            {rates?.split(' ')[0]}~{rates?.split(' ')[1]}%
          </S.Rate>
          <S.TagBox>
            {/* {tags?.includes('주부')} */}
            {tags?.map((tag, index) => (
              <S.Tag index={index} key={index}>
                {tag}
              </S.Tag>
            ))}
          </S.TagBox>
        </S.InfoBox>
        <S.CardFavorite onClick={addFavoriteHandler}>
          {favorite ? (
            <AiFillHeart size={25} />
          ) : (
            <AiOutlineHeart size={25} color="red" />
          )}
        </S.CardFavorite>
      </S.Container>
    </>
  )
}

export default Loan
