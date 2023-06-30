export interface AuthModalProps {
  modalAuth: 'closed' | 'login' | 'register'
  setModalAuth: (modalAuth: 'closed' | 'login' | 'register') => void
}

export interface LoginProps {
  setModalAuth: (modalAuth: 'closed' | 'login' | 'register') => void
}

export interface RegisterProps {
  setModalAuth: (modalAuth: 'closed' | 'login' | 'register') => void
}
