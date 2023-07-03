import { formatDate } from '@/utils'
import { type IUser } from '@/interfaces'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'

interface TableProps {
  responseData: IUser[]
}

export const UserTable: React.FC<TableProps> = ({ responseData }) => {
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
              <DeleteForeverIcon className='ml-4 transition-colors duration-1000 hover:text-red-500' />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
