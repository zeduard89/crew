import { type IProject } from '@/interfaces'
import { useModalAuthStore, useUserIdStore } from '@/store'
import { createOrder } from '@/utils'
import { useState } from 'react'

interface FundModalProps {
  project: IProject
  modalFund: boolean
  setModalFund: React.Dispatch<React.SetStateAction<boolean>>
}

export const FundModal: React.FC<FundModalProps> = ({
  project,
  setModalFund,
}) => {
  const [fundInput, setfundInput] = useState(0)
  const { userId } = useUserIdStore()
  const { setModalAuth } = useModalAuthStore()

  return (
    <div
      className='fixed -top-20 z-10 flex h-[120%] w-screen items-center justify-center bg-black bg-opacity-40'
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setModalFund(false)
        }
      }}
    >
      <div
        className='flex flex-col rounded-md bg-white p-4'
        style={{ maxWidth: '500px', width: '100%' }}
      >
        <div className='flex w-full items-center justify-between'>
          <p className='font-bold uppercase text-secondaryDark'>Funding</p>
          <button
            className='text-2xl font-bold text-gray-400'
            onClick={() => {
              setModalFund(false)
            }}
          >
            X
          </button>
        </div>
        <p className='mb-1 text-2xl font-bold'>
          Make a contribution to {project.title}
        </p>
        <div className='flex h-28 items-center justify-center border bg-gray-50'>
          <div className='border bg-white'>
            <span className='pl-2 font-semibold text-gray-400'>$</span>
            <input
              className='h-8 pl-1 outline-none'
              type='text'
              placeholder='Enter amount'
              value={fundInput}
              onChange={(e) => {
                if (!isNaN(Number(e.target.value))) {
                  setfundInput(+e.target.value.trim())
                }
              }}
            />
            <span className='pr-2 font-semibold text-gray-400'>ARS</span>
          </div>
          <button
            className='ml-4 rounded-md bg-secondaryDark px-4 py-1 text-white'
            onClick={() => {
              if (userId === '') {
                setModalFund(false)
                setModalAuth('login')
              }

              void createOrder({
                userId,
                projectId: project.id,
                currencyId: 'ARS',
                quantityNumber: 1,
                titleProject: project.title,
                unitePrice: fundInput,
              })
            }}
          >
            Fund
          </button>
        </div>
      </div>
    </div>
  )
}
