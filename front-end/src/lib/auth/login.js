
import customAxios from "../../axios/customAxios"

//username, email, password

export default async function login(
  email,
  password
){

  const response = await customAxios.post('/api/user', {
    email,
    password
  })

  const data = response.data

  return data

}