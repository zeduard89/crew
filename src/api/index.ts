import axios from 'axios'

// const URL = 'http://localhost:3001' asi funciona local
// const URL = import.meta.env.VITE_CREWDB_URL ?? 'http://localhost:3001'
const URL = `https://backcrew-production.up.railway.app/`

export const CrewApi = axios.create({
  baseURL: URL,
  headers: {
    'Content-Type': 'application/json',
  },
})
