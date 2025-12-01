import axios from 'axios'
import { BASE_URL } from '@/services/config'

const client = axios.create({
  baseURL: BASE_URL,
  timeout: 4000,
  headers: {
    'Content-Type': 'application/json',
  },
})

const get = client.get
const post = client.post
const put = client.put
const patch = client.patch
const del = client.delete

export { get, post, put, patch, del }
