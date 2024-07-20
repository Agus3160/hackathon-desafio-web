import { useSession } from '../context/SessionContext';

export default function useLogOut() {
  
  const { setSession } = useSession();

  const logOut = () => {
    setSession({
      accessToken: null,
      refreshToken: null,
      user: null,
    })
  }

  return { logOut }

}