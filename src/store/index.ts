import { create } from 'zustand'

interface IUserIdStore {
  userId: string
  isLoaded: boolean //
  setUserId: (userId: string) => void
}

// export const useUserIdStore = create<IUserIdStore>((set) => ({
//   userId: '',
//   setUserId: (userId: string) => {
//     set({ userId })
//   },
// }))

export const useUserIdStore = create<IUserIdStore>((set) => ({
  userId: '',
  isLoaded: false, // Nuevo estado para controlar si se ha recibido una respuesta
  setUserId: (userId: string) => {
    set({ userId, isLoaded: true }) // Marcar como cargado cuando se establece el userId
  },
}))

interface IModalAuthStore {
  modalAuth: 'closed' | 'login' | 'register'
  setModalAuth: (modalAuth: 'closed' | 'login' | 'register') => void
}

export const useModalAuthStore = create<IModalAuthStore>((set) => ({
  modalAuth: 'closed',
  setModalAuth: (modalAuth) => {
    set({ modalAuth })
  },
}))
