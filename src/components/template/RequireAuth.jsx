import { useLocation, Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCurrentToken } from '../../store/slices/authSlice'

const RequireAuth = () => {
  const token = useSelector(selectCurrentToken)
  console.log(token)
  const location = useLocation()
  return (
    <>
      token ? (
      <Outlet />
      ) : (
      <Navigate to="/signin" state={{ from: location }} replace />)
    </>
  )
}
export default RequireAuth
