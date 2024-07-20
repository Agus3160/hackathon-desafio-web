
import axios from 'axios'

const HOST_URL = "http://192.168.1.81:3000"

const customAxios = axios.create({
  baseURL: HOST_URL, 
  timeout: 10000, 
  headers: {
    'Content-Type': 'application/json',
  },
});

export default customAxios