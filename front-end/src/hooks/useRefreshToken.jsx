import { useSession } from '../context/SessionContext'
import refresh from '../lib/auth/refresh'

export default function useRefreshToken() {

  const { setSession, session } = useSession()
  const refreshToken = localStorage.getItem('refreshToken')

  const refreshFn = async () => {
    const res = await refresh(refreshToken)
    localStorage.setItem('accessToken', res.accessToken)
    localStorage.setItem('user', res.username)
    setSession({
      ...session,
      accessToken: res.accessToken,
      username: res.username
    })
  }

  return refreshFn
}