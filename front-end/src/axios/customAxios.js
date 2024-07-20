
import axios from 'axios'

const HOST_URL = "http://localhost:3000"

const customAxios = axios.create({
  baseURL: HOST_URL, 
});

export default customAxios