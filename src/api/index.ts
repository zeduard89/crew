import axios from 'axios'

// const URL = 'http://localhost:3001'
const URL = import.meta.env.VITE_CREWDB_URL ?? 'http://localhost:3001'
export const CrewApi = axios.create({
  baseURL: URL,
  headers: {
    'Content-Type': 'application/json',
  },
})
