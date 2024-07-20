
import axios from 'axios'

const HOST_URL = "http://192.168.1.81:27017"

const customAxios = axios.create({
  baseURL: HOST_URL, 
  timeout: 10000, 
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default customAxios