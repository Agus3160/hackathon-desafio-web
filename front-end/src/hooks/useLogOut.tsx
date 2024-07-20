import { useSession } from '../context/SessionContext';
import { useNavigate } from 'react-router-dom';

export default function useLogOut() {
  
  const { setSession } = useSession();

  const navigator = useNavigate();

  const logOut = () => {
    setSession({
      accessToken: null,
      refreshToken: null,
      user: null,
    })
    localStorage.clear()
    navigator('/login', {replace: true})
  }

  return { logOut }

}