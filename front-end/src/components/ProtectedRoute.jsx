import { useEffect } from "react"
import useRefreshToken from "../hooks/useRefreshToken"
import { useSession } from "../context/SessionContext"
import { Navigate, Outlet } from "react-router-dom"
import { useNavigate } from "react-router-dom"

export default function ProtectedRoleRoute() {
  
  const { session } = useSession()

  const navigate = useNavigate()

  const user = localStorage.getItem('user')
  const accessToken = localStorage.getItem('accessToken')
  const refreshToken = localStorage.getItem('refreshToken')

  if(!user && !accessToken && !refreshToken) return <Navigate to={'/login'} replace={true} />

  const refreshTokenFn = useRefreshToken()
  
  useEffect(() => {
    const refresh = async () => {
      try {
        await refreshTokenFn()
      } catch (error) {
        navigate('/login', {replace: true})
        localStorage.clear()
      }
    }
    refresh()  
  }, [])

  return (session)?
    <Outlet />    
  :
    < Navigate to={'/'} replace={true} />

}