import { useSession } from "../context/SessionContext"
import { Navigate, Outlet } from "react-router-dom"

export default function ProtectedRoleRoute() {
  
  const { session } = useSessionContext()

  

  return (role === session?.role)?
    <Outlet />    
  :
    < Navigate to={'/'} replace={true} />

}