import { useLocation, Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCurrentToken } from '../../store/slices/authSlice'

const RequireAuth = () => {
  console.log(selectCurrentToken, 'here')
  const location = useLocation()
  return (
    <>
      {selectCurrentToken ? (
        <Outlet />
      ) : (
        <Navigate to="/login" state={{ from: location }} replace />
      )}
    </>
  )
}
export default RequireAuth
