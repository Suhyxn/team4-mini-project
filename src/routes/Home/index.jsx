import LoanInfo from '../../components/template/LoanInfo'
import { useNavigate } from 'react-router-dom'
import * as S from './style'
import { BsSearch } from 'react-icons/bs'
import Filter from '../../components/common/Filter'
import IfTab from '../../components/template/IfTab'
import useFilter from '../../components/Hook/useFilter'
import { useGetProductsQuery } from '../../store/slices/productApiSlice'
import Loader from '../../components/layout/Loader'

function Home() {
  const [isActive, setIsActive] = useFilter()
  const { data: products, isLoading, isError } = useGetProductsQuery()
  const navigate = useNavigate()

  if (isLoading) {
    return <Loader />
  }

  if (isError || !products) {
    return <div>오류발생!</div>
  }

  return (
    <>
      <S.SearchBox onClick={() => navigate('/search')}>
        <BsSearch size="2.5rem" />
      </S.SearchBox>
      <LoanInfo />
      <Filter onFilterHandler={setIsActive} item={isActive} />
      <IfTab tab={isActive} items={products} />
    </>
  )
}

export default Home
