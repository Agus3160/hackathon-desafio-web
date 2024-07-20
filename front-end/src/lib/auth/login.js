
import customAxios from "../../axios/customAxios"

export default async function login(
  email,
  password
){

  const response = await customAxios.post('/api/security/login', {
    email,
    password
  })

  const data = response.data

  return data

}