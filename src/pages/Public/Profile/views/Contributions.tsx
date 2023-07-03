// export const Contributions:React.FC = () => {

//   return (
//     <div>
//       <h2 className='mb-20 mt-16 flex w-full justify-center text-3xl font-semibold'>
//         You have not contribute to any project yet!
//       </h2>
//     </div>
//   )
// }

import { useEffect, useState } from 'react'
import axios from 'axios'

const URL: string = import.meta.env.VITE_CREWDB_URL

interface Contribution {
  id: string
  currencyId: string
  dateApproved: string
  dateCreated: string
  description: string
  email: string
  entityType: string
  firstName: string
  identificationNumber: string
  identificationType: string
  lastName: string
  operationType: string
  orderId: string
  ordertype: string
  payerId: string
  paymentMetodId: string
  phoneAreaCode: string
  phoneExtension: string
  phoneNumber: string
  projectId: string
  status: string
  statusDetail: string
  taxesAmount: number
  transactionAmount: number
  transactionAmountRefunded: number
  transactionReceived: number
  type: string
  userId: string
}

interface ContributionsProps {
  userId: string
}

export const Contributions: React.FC<ContributionsProps> = ({ userId }) => {
  const [contributions, setContributions] = useState<Contribution[]>([])

  useEffect(() => {
    const fetchContributions = async (): Promise<void> => {
      try {
        const response = await axios.get(
          `${URL}paymentRoute/info/getAllPaymentsFromOneUser?userId=${userId}`
        )
        const payments = response.data
        setContributions(payments)
      } catch (error) {
        console.error('Error fetching contributions:', error)
      }
    }

    void fetchContributions()
  }, [])

  // Comentario
  return (
    <div>
      {contributions.length === 0 ? (
        <h2 className='mb-20 mt-16 flex w-full justify-center text-3xl font-semibold'>
          You have not contributed to any project yet!
        </h2>
      ) : (
        <div>
          <h2 className='mb-4 text-2xl font-semibold'>Contributions:</h2>
          {contributions.map((contribution) => (
            <div key={contribution.id} className='mb-4 border p-4'>
              <h3 className='text-xl font-semibold'>
                {contribution.description}
              </h3>
              <p>Currency: {contribution.currencyId}</p>
              <p>Date Approved: {contribution.dateApproved}</p>
              <p>Date Created: {contribution.dateCreated}</p>
              <p>Email: {contribution.email}</p>
              <p>Entity Type: {contribution.entityType}</p>
              <p>First Name: {contribution.firstName}</p>
              <p>Identification Number: {contribution.identificationNumber}</p>
              <p>Identification Type: {contribution.identificationType}</p>
              <p>Last Name: {contribution.lastName}</p>
              <p>Operation Type: {contribution.operationType}</p>
              <p>Order ID: {contribution.orderId}</p>
              <p>Order Type: {contribution.ordertype}</p>
              <p>Payer ID: {contribution.payerId}</p>
              <p>Payment Method ID: {contribution.paymentMetodId}</p>
              <p>Phone Area Code: {contribution.phoneAreaCode}</p>
              <p>Phone Extension: {contribution.phoneExtension}</p>
              <p>Phone Number: {contribution.phoneNumber}</p>
              <p>Project ID: {contribution.projectId}</p>
              <p>Status: {contribution.status}</p>
              <p>Status Detail: {contribution.statusDetail}</p>
              <p>Taxes Amount: {contribution.taxesAmount}</p>
              <p>Transaction Amount: {contribution.transactionAmount}</p>
              <p>
                Transaction Amount Refunded:{' '}
                {contribution.transactionAmountRefunded}
              </p>
              <p>Transaction Received: {contribution.transactionReceived}</p>
              <p>Type: {contribution.type}</p>
              <p>User ID: {contribution.userId}</p>
              {/* Render other details of the contribution as needed */}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
