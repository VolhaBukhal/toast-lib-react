import React, { useState, useEffect, useImperativeHandle, forwardRef } from 'react'
import ReactDOM from 'react-dom'

import { ToastPortalProps, ToastPortalPosition, ToastPortalMargin } from './types'
import { IToastParams } from '@/types/toastParams'
import { useToastPortal } from '@/hooks/useToastPortal'
import toastService from '@/service/ToastService'

import { Toast } from '@/components/Toast'

import { ToastContainer } from './styles'

type RefType = {
  addMessage: (toast: IToastParams) => void
}

export const ToastPortal = forwardRef<RefType, ToastPortalProps>(
  (
    {
      autoClose = false,
      autoCloseTime = 4000,
      position = ToastPortalPosition.TOP_RIGHT,
      margin = ToastPortalMargin.NONE,
    },
    ref
  ) => {
    const { toasts, removeToast, getAllToasts, generateToast, addToast } = toastService
    const { loaded, portalId } = useToastPortal()

    const [removingId, setRemovingId] = useState('')
    const [toastsLength, setToastsLength] = useState(getAllToasts().length)

    useEffect(() => {
      setToastsLength(toasts.length)
    }, [toasts.length])

    useEffect(() => {
      if (autoClose && toasts.length) {
        const lastId = toasts[toasts.length - 1].id
        setTimeout(() => setRemovingId(lastId), autoCloseTime)
      }
    }, [toastsLength, autoClose, autoCloseTime, toasts])

    useEffect(() => {
      if (removingId) {
        removeToast(removingId)
        setToastsLength(getAllToasts().length)
      }
    }, [removingId, setToastsLength, getAllToasts, removeToast])

    useImperativeHandle(ref, () => ({
      addMessage(toast: IToastParams) {
        const newToast = generateToast(toast)
        addToast(newToast)
        setToastsLength(toasts.length)
      },
    }))

    const handleClose = (id: string) => () => {
      removeToast(id)

      setToastsLength(getAllToasts().length)
    }

    return loaded
      ? ReactDOM.createPortal(
          <ToastContainer
            position={position}
            autoClose={autoClose}
            autoCloseTime={autoCloseTime}
            margin={margin}
          >
            {toasts.map(
              ({ title, id, mode, message, animationType, backgroundColor, position }) => (
                <Toast
                  title={title}
                  key={id}
                  mode={mode}
                  message={message}
                  backgroundColor={backgroundColor}
                  animationType={animationType}
                  onClose={handleClose(id)}
                  onDragDelete={handleClose(id)}
                  position={position}
                ></Toast>
              )
            )}
          </ToastContainer>,
          document.getElementById(portalId)!
        )
      : null
  }
)
