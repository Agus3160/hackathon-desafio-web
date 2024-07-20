import customAxios from "../../axios/customAxios";

export default async function refresh(refreshToken) {
  const response = await customAxios.post("/api/security/refresh-token", {
    refreshToken
  })
  return response.data
}