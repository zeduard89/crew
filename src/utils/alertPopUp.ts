import Swal from 'sweetalert2'
import { type SweetAlertIcon } from 'sweetalert2'

export interface IAlertArgs {
  title: string
  text: string
  icon: SweetAlertIcon
  confirmButtonText: string
}

export const showAlert = async ({
  title,
  text,
  icon,
  confirmButtonText,
}: IAlertArgs): Promise<void> => {
  await Swal.fire({
    title,
    text,
    icon,
    confirmButtonText,
    timer: 2000,
  })
}

/*
  // El de Profile Settings esta en Profile.tsx

  // CREACION DE PROYECTO OK 
  await showAlert({
  title: 'Project was successfully created!',
  text: 'This window will close...',
  icon: 'success',
  confirmButtonText: 'Lets Go!',
  })

  // PAGO OK
  await showAlert({
  title: 'Payment was successfully made!',
  text: 'This window will close...',
  icon: 'success',
  confirmButtonText: 'Okey!',
  })

  // Newsletter OK
  await showAlert({
  title: 'Your mail was successfully register for newsletters!',
  text: 'This window will close...',
  icon: 'success',
  confirmButtonText: 'Thank you!',
  })



  */
