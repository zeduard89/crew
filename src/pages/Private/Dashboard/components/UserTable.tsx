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
    const updatedData = responseData.map((u) =>
      u.id === user.id ? { ...u, verified: !u.verified } : u
    )
    queryClient.setQueryData(['allUsers'], updatedData)
    await queryClient.invalidateQueries(['allUsers'])
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
          <th className='px-6 py-3'>User Status</th>
        </tr>
      </thead>
      <tbody className='divide-y divide-gray-200'>
        {responseData?.map((user: IUser) => (
          <tr key={user.id} className='text-white'>
            <td className='px-6 py-4'>{user.name}</td>
            <td className='px-6 py-4'>{user.lastName}</td>
            <td className='px-6 py-4'>{user.email}</td>
            <td className='px-6 py-4'>{user.country}</td>
            <td className='px-6 py-4 text-sm'>{formatDate(user.createdAt)}</td>
            <td className='px-6 py-4'>
              {user.admin !== null
                ? user?.admin
                  ? 'Admin'
                  : 'Common User'
                : 'Unknown'}
            </td>
            <td className='flex flex-row px-6 py-4'>
              {user?.verified ? (
                <p className='mr-2.5 text-green-500'>Active</p>
              ) : (
                <p className='text-red-500'>Disable</p>
              )}
              <button
                onClick={async () => {
                  await deleteUser(user)
                }}
              >
                {user?.verified ? (
                  <DeleteForeverIcon className='ml-4 text-green-500 transition-colors duration-1000 hover:scale-110' />
                ) : (
                  <RestoreFromTrashIcon className='ml-4 text-red-500 transition-colors duration-1000 hover:scale-110 ' />
                )}
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
