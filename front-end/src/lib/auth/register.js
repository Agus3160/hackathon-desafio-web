
import customAxios from "../../axios/customAxios"

//username, email, password

export default async function register(
  username,
  email,
  password
){

  const response = await customAxios.post('/api/user', {
    username,
    email,
    password
  })

  const data = response.data

  return data

}