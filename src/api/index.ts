import axios from 'axios'

// const URL = 'http://localhost:3001'
const URL = 'https://dashboard.render.com'

export const CrewApi = axios.create({
  baseURL: URL,
  headers: {
    'Content-Type': 'application/json',
  },
})
