import { useState, useEffect } from 'react'
import { CrewApi } from '@/api'
import { type IPayments } from '@/interfaces'
import { Table } from '../components'

interface ContributionsProps {
  userId: string
  isUser: boolean
}

export const Contributions: React.FC<ContributionsProps> = ({
  userId,
  isUser,
}) => {
  const [responseData, setResponseData] = useState<IPayments[] | null>(null)

  useEffect(() => {
    async function fetchData(): Promise<void> {
      try {
        const response = await CrewApi.get(
          `/paymentRoute/info/getAllPaymentsFromOneUser?userId=${userId}`
        )
        setResponseData(response.data)
      } catch (error) {
        console.error('Ocurrió un error al hacer la petición:', error)
      }
    }

    fetchData().catch((error) => {
      console.error('Ocurrió un error al obtener los datos:', error)
    })
  }, [userId])

  return (
    <div>
      {responseData !== null && responseData.length > 0 ? (
        <div className='mb-8 flex min-h-[550px] flex-col'>
          <Table responseData={responseData} isUser={isUser} />
        </div>
      ) : (
        <div className='flex h-[400px] flex-col'>
          <h2 className='mt-32 flex h-[400px] w-full justify-center text-3xl font-semibold'>
            You have not contributed to any project yet!
          </h2>
        </div>
      )}
    </div>
  )
}
