import Loader from '../../components/layout/Loader'
import Filter from '../../components/common/Filter'
import IfTab from '../../components/template/IfTab'
import useFilter from '../../components/Hook/useFilter'
import { useGetFavoritesQuery } from '../../store/slices/favoriteApiSlice'

function Favorites() {
  const [isActive, setIsActive] = useFilter()
  const { data: products, isLoading, isError } = useGetFavoritesQuery()

  if (isLoading) {
    return <Loader />
  }

  if (isError || !products) {
    return <div>오류발생!</div>
  }

  return (
    <>
      <Filter onFilterHandler={setIsActive} item={isActive} />
      <IfTab tab={isActive} items={products} />
    </>
  )
}

export default Favorites
