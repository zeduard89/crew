import { formatDate, deleteUserFetcher } from '@/utils'
import { type IUser } from '@/interfaces'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import RestoreFromTrashIcon from '@mui/icons-material/RestoreFromTrash'
import { useQueryClient } from '@tanstack/react-query'

interface TableProps {
  responseData: IUser[]
}

export const UserTable: React.FC<TableProps> = ({ responseData }) => {
  const queryClient = useQueryClient()
  const deleteUser = async (user: IUser): Promise<void> => {
    await deleteUserFetcher(user)
    const updatedData = responseData.filter((u) => u.id !== user.id)
    queryClient.setQueryData(['allUsers'], updatedData)
  }

  return (
    <table className='w-full divide-y divide-gray-200 text-secondary'>
      <thead>
        <tr className='text-left text-lg text-[#3a86ff]'>
          <th className='px-6 py-3'>Name</th>
          <th className='px-6 py-3'>Last Name</th>
          <th className='px-6 py-3'>Email</th>
          <th className='px-6 py-3'>Country</th>
          <th className='px-6 py-3'>Register Date</th>
          <th className='px-6 py-3'>User Type</th>
        </tr>
      </thead>
      <tbody className='divide-y divide-gray-200'>
        {responseData.map((user: IUser) => (
          <tr key={user.id} className='text-white'>
            <td className='px-6 py-4'>{user.name}</td>
            <td className='px-6 py-4'>{user.lastName}</td>
            <td className='px-6 py-4'>{user.email}</td>
            <td className='px-6 py-4'>{user.country}</td>
            <td className='px-6 py-4'>{formatDate(user.createdAt)}</td>
            <td className='px-6 py-4'>
              {user.admin !== null
                ? user?.admin
                  ? 'Admin'
                  : 'User'
                : 'Unknown'}
              <button
                onClick={async () => {
                  await deleteUser(user)
                }}
              >
                {user?.verified ? (
                  <DeleteForeverIcon className='ml-4 transition-colors duration-1000 hover:text-red-500' />
                ) : (
                  <RestoreFromTrashIcon className='ml-4 transition-colors duration-1000 hover:text-green-500' />
                )}
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

// import { formatDate } from '@/utils'
// import { type IUser } from '@/interfaces'
// import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
// import { useDeleteUser } from '../hooks'

// interface TableProps {
//   responseData: IUser[]
// }
// interface ILogicUserDelete {
//   message: string
// }

// const HandleDelete = (user: IUser): ILogicUserDelete | undefined => {
//   const { deleteUser } = useDeleteUser(user)
//   return deleteUser
// }
// export const UserTable: React.FC<TableProps> = ({ responseData }) => {
//   return (
//     <table className='w-full divide-y divide-gray-200 text-secondary'>
//       <thead>
//         <tr className='text-left text-lg text-[#3a86ff]'>
//           <th className='px-6 py-3'>Name</th>
//           <th className='px-6 py-3'>Last Name</th>
//           <th className='px-6 py-3'>Email</th>
//           <th className='px-6 py-3'>Country</th>
//           <th className='px-6 py-3'>Register Date</th>
//           <th className='px-6 py-3'>User Type</th>
//         </tr>
//       </thead>
//       <tbody className='divide-y divide-gray-200'>
//         {responseData.map((user: IUser) => (
//           <tr key={user.id} className='text-white'>
//             <td className='px-6 py-4'>{user.name}</td>
//             <td className='px-6 py-4'>{user.lastName}</td>
//             <td className='px-6 py-4'>{user.email}</td>
//             <td className='px-6 py-4'>{user.country}</td>
//             <td className='px-6 py-4'>{formatDate(user.createdAt)}</td>
//             <td className='px-6 py-4'>
//               {user.admin !== null
//                 ? user?.admin
//                   ? 'Admin'
//                   : 'User'
//                 : 'Unknown'}
//               <button onClick={handleDelete(user)}>
//                 <DeleteForeverIcon className='ml-4 transition-colors duration-1000 hover:text-red-500' />
//               </button>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   )
// }
