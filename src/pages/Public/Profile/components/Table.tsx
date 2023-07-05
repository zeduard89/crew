import { formatDate } from '@/utils'
import { type IPayments } from '@/interfaces'

interface TableProps {
  responseData: IPayments[]
}

export const Table: React.FC<TableProps> = ({ responseData }) => {
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
            <td className='px-6 py-4'>{payment.transactionAmount}</td>
            <td className='px-6 py-4'>{formatDate(payment.dateApproved)}</td>
            <td className='px-6 py-4'>{payment.ordertype}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
