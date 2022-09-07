import { useLocation, Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCurrentToken } from '../../store/slices/authSlice'
import { Cookies } from 'react-cookie'
const RequireAuth = () => {
  const location = useLocation()
  const cookies = new Cookies()
  const token = cookies.get('accessToken')
  return (
    <>
      {token ? (
        <Outlet />
      ) : (
        <Navigate to="/login" state={{ from: location }} replace />
      )}
    </>
  )
}
export default RequireAuth
