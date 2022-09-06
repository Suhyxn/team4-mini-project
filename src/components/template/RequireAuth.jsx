import { useLocation, Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCurrentToken } from '../../store/slices/authSlice'

const RequireAuth = () => {
  const location = useLocation()
  return (
    <>
      {useLocation ? (
        <Outlet />
      ) : (
        <Navigate to="/recomended" state={{ from: location }} replace />
      )}
    </>
  )
}
export default RequireAuth
