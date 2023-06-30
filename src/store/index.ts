import { create } from 'zustand'

interface IUserIdStore {
  userId: string
  setUserId: (userId: string) => void
}

export const useUserIdStore = create<IUserIdStore>((set) => ({
  userId: '',
  setUserId: (userId: string) => {
    set({ userId })
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
