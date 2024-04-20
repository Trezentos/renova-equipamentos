import axios from 'axios'

export function getAPIClient() {
  const api = axios.create({
    baseURL: process.env.DB_HOST,
  })

  return api
}
