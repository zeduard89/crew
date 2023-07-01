import { create } from 'zustand'

interface IUserIdStore {
  userId: string
  isLoaded: boolean //
  setUserId: (userId: string) => void
}

export const useUserIdStore = create<IUserIdStore>((set) => ({
  userId: '',
  isLoaded: false,
  setUserId: (userId: string) => {
    setTimeout(() => {
      set({ userId, isLoaded: true })
    }, 2500) // Demora de 1 segundo (1000 milisegundos)
    // Mira como parcho tu codigo
  },
}))

interface IModalAuthStore {
  modalAuth: 'closed' | 'login' | 'register'
  setModalAuth: (modalAuth: 'closed' | 'login' | 'register') => void
}

// export const useModalAuthStore = create<IModalAuthStore>((set) => ({
//   modalAuth: 'closed',
//   setModalAuth: (modalAuth) => {
//     set({ modalAuth })
//   },
// }))

export const useModalAuthStore = create<IModalAuthStore>((set) => ({
  modalAuth: 'closed',
  setModalAuth: async (modalAuth) => {
    await new Promise<void>((resolve) => {
      set({ modalAuth })
      resolve()
    })
  },
}))
