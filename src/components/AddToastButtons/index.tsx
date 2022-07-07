import React from 'react'

import { ToastMode, AnimationMode } from '@/components/Toast/types'
import { useToastRef } from '@/hooks/useToastRef'
import { ToastPortalProps, ToastPortalPosition } from '@/components/ToastPortal/types'

import { ToastPortal } from '@/components/ToastPortal'

import { ButtonGroup, Button } from './styles'

// export const AddToastButtons = (props: ToastPortalProps) => {
export const AddToastButtons = ({
  autoClose = false,
  autoCloseTime = 4000,
  position = ToastPortalPosition.TOP_RIGHT,
}: ToastPortalProps) => {
  const { toastRef, addToast } = useToastRef()

  const addSuccess = () =>
    addToast({
      title: 'Success',
      mode: ToastMode.SUCCESS,
      message: 'Success message',
      animationType: AnimationMode.FADE,
    })

  const addInfo = () =>
    addToast({
      title: 'Info',
      mode: ToastMode.INFO,
      message: 'Info message',
      animationType: AnimationMode.MOVE,
    })

  const addWarning = () =>
    addToast({
      title: 'Warning',
      mode: ToastMode.WARNING,
      message: 'Warning message',
      animationType: AnimationMode.SCALE,
    })

  const addError = () =>
    addToast({
      title: 'Error',
      mode: ToastMode.ERROR,
      message: 'Error message',
      animationType: AnimationMode.MOVE,
    })

  return (
    <ButtonGroup>
      <Button onClick={addSuccess}>Success Toast</Button>
      <Button onClick={addInfo}>Info Toast</Button>
      <Button onClick={addWarning}>Warning Toast</Button>
      <Button onClick={addError}>Error Toast</Button>
      {/* <ToastPortal ref={toastRef} {...props} /> */}
      <ToastPortal
        ref={toastRef}
        autoClose={autoClose}
        autoCloseTime={autoCloseTime}
        position={position}
      />
    </ButtonGroup>
  )
}
