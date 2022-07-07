import { useRef } from 'react'

import { ToastPortal } from '@/components/ToastPortal'

import { IToastParams } from '@/types/toastParams'

type ToastPortalRef = React.ElementRef<typeof ToastPortal>

export const useToastRef = () => {
  const toastRef = useRef<ToastPortalRef>(null)

  const addToast = (options: IToastParams) => {
    if (toastRef.current) {
      toastRef.current.addMessage({ ...options })
    }
  }

  return {
    toastRef,
    addToast,
  }
}
