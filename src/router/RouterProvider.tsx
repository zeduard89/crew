// import { Layout } from '@/components'
// import { AuthGuard } from '@/guards/AuthGuard'
// import {
//   Home,
//   Profile,
//   ProjectForm,
//   Projects,
//   Search,
//   Dashboard,
// } from '@/pages'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'

// export const PublicRoutes = {
//   home: '/',
//   projects: '/projects',
//   search: '/search',
//   profile: '/userProfile',
// }

// export const PrivateRoutes = {
//   createProject: '/createProject',
//   dashboard: '/dashboard',
// }

// export const RouterProvider: React.FC = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route element={<Layout />}>
//           <Route path={PublicRoutes.home} element={<Home />} />
//           <Route path={`${PublicRoutes.projects}/:id`} element={<Projects />} />
//           <Route path={PublicRoutes.search} element={<Search />} />
//           <Route path={`${PublicRoutes.profile}/:id`} element={<Profile />} />
//           <Route element={<AuthGuard />}>
//             <Route
//               path={PrivateRoutes.createProject}
//               element={<ProjectForm />}
//             />
//           </Route>
//           <Route path={PrivateRoutes.dashboard} element={<Dashboard />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   )
// }

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

const adminId = '420fdf38-78f9-4be4-99b7-b9ab93afee85'

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
  console.log(userId)
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
