import { type AuthModalProps } from '@/interfaces/AuthModalProps'
import { Login, Register } from './components'

export const Auth: React.FC<AuthModalProps> = ({ modalAuth, setModalAuth }) => {
  if (modalAuth === 'closed') return null
  return (
    <div
      className='fixed -top-20 z-10 flex h-[120%] w-screen items-start justify-center bg-black bg-opacity-40'
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setModalAuth('closed')
        }
      }}
    >
      {modalAuth === 'register' && <Register setModalAuth={setModalAuth} />}
      {modalAuth === 'login' && <Login setModalAuth={setModalAuth} />}
    </div>
  )
}
