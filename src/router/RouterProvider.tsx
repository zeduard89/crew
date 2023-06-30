import { Layout } from '@/components'
import { AuthGuard } from '@/guards/AuthGuard'
import { Home, Profile, ProjectForm, Projects, Search } from '@/pages'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export const PublicRoutes = {
  home: '/',
  projects: '/projects',
  search: '/search',
  profile: '/userProfile',
}

export const PrivateRoutes = {
  createProject: '/createProject',
}

export const RouterProvider: React.FC = () => {
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
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
