import { formatDate } from '@/utils'
import { type IPayments } from '@/interfaces'

interface TableProps {
  responseData: IPayments[]
  isUser: boolean
}

<<<<<<< HEAD

export const Table: React.FC<TableProps> = ({ responseData }) => {
=======
export const Table: React.FC<TableProps> = ({ responseData, isUser }) => {
>>>>>>> 831df2139a3fddee402b25cf930006f5c978b886
  return (
    <table className='min-w-full divide-y divide-gray-200'>
      <thead>
        <tr>
          <th className='px-6 py-3 text-left'>Project</th>
          <th className='px-6 py-3 text-left'>Creator</th>
          <th className='px-6 py-3 text-left'>Amount</th>
          <th className='px-6 py-3 text-left'>Date</th>
          <th className='px-6 py-3 text-left'>Order Type</th>
        </tr>
      </thead>
      <tbody className='divide-y divide-gray-200 bg-white'>
        {responseData.map((payment: IPayments) => (
          <tr key={payment.id}>
            <td className='px-6 py-4'>{payment.description}</td>
            <td className='px-6 py-4'>{payment.firstName}</td>
<<<<<<< HEAD
            <td className='px-6 py-4'>{payment.transactionAmount}</td>
        

=======
            <td className='px-6 py-4'>
              {isUser
                ? '$ ' + payment.transactionAmount.toLocaleString('en-US')
                : '$ *****'}
            </td>{' '}
>>>>>>> 831df2139a3fddee402b25cf930006f5c978b886
            <td className='px-6 py-4'>{formatDate(payment.dateApproved)}</td>
            <td className='px-6 py-4'>{payment.ordertype}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
