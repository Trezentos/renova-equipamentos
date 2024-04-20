import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export function successToast(message: string) {
  return toast.success(message, {
    position: 'top-right',
    autoClose: 3500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: 'light',
  })
}

export function errorToast(message: string) {
  return toast.error(message, {
    position: 'top-right',
    autoClose: 3500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: 'light',
  })
}

export const SUCCESS_SENDING_TEXT = 'Email enviado com sucesso'
export const ERROR_SENDING_TEXT = 'Email enviado com sucesso'
