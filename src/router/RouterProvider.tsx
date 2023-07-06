import { Layout } from '@/components'
import { AuthGuard } from '@/guards/AuthGuard'
import {
  Home,
  Profile,
  ProjectForm,
  Projects,
  Search,
  Dashboard,
} from '@/pages'
import { useUserIdStore } from '@/store'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const adminId = 'c79a6117-bb44-4a22-855a-58130a075735'

export const PublicRoutes = {
  home: '/',
  projects: '/projects',
  search: '/search',
  profile: '/userProfile',
  error: '/error',
}

export const PrivateRoutes = {
  createProject: '/createProject',
  dashboard: '/dashboard',
}

export const RouterProvider: React.FC = () => {
  const { userId } = useUserIdStore()
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={PublicRoutes.home} element={<Home />} />
          <Route path={`${PublicRoutes.projects}/:id`} element={<Projects />} />
          <Route path={PublicRoutes.search} element={<Search />} />
          <Route path={`${PublicRoutes.profile}/:id`} element={<Profile />} />
          <Route element={<AuthGuard />}>
            <Route
              path={PrivateRoutes.createProject}
              element={<ProjectForm />}
            />
          </Route>
          {userId === `${adminId}` && (
            <Route path={PrivateRoutes.dashboard} element={<Dashboard />} />
          )}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
