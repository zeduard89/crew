import ReactDOM from 'react-dom/client'
import { QueryProvider } from './components'
import './index.css'
import { RouterProvider } from './router/RouterProvider'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryProvider>
    <RouterProvider />
  </QueryProvider>
)
