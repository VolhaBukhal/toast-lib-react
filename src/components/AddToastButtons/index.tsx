import React from 'react'

import { ToastMode, AnimationMode } from '@/components/Toast/types'
import { useToastRef } from '@/hooks/useToastRef'
import { ToastPortalProps } from '@/components/ToastPortal/types'

import { ToastPortal } from '@/components/ToastPortal'

import { ButtonGroup, Button } from './styles'

export const AddToastButtons = (props: ToastPortalProps) => {
  const { toastRef, addToast } = useToastRef()

  const addSuccess = () =>
    addToast({
      title: 'Success',
      mode: ToastMode.SUCCESS,
      message: 'Success message',
      animationType: AnimationMode.FADE,
      position: props.position,
    })

  const addInfo = () =>
    addToast({
      title: 'Info',
      mode: ToastMode.INFO,
      message: 'Info message',
      animationType: AnimationMode.MOVE,
      position: props.position,
    })

  const addWarning = () =>
    addToast({
      title: 'Warning',
      mode: ToastMode.WARNING,
      message: 'Warning message',
      animationType: AnimationMode.SCALE,
      position: props.position,
    })

  const addError = () =>
    addToast({
      title: 'Error',
      mode: ToastMode.ERROR,
      message: 'Error message',
      animationType: AnimationMode.MOVE,
      position: props.position,
    })

  return (
    <ButtonGroup>
      <Button onClick={addSuccess}>Success Toast</Button>
      <Button onClick={addInfo}>Info Toast</Button>
      <Button onClick={addWarning}>Warning Toast</Button>
      <Button onClick={addError}>Error Toast</Button>
      <ToastPortal ref={toastRef} {...props} />
    </ButtonGroup>
  )
}
