import { useState, useEffect } from 'react'

import { ToastProps, AnimationMode } from './types'
import { ToastPortalPosition } from '@/components/ToastPortal/types'
import { StyledToast, StyledTitle, StyledCloseToast } from './styles'

export const Toast = ({
  title = 'Infor',
  mode = 'info',
  message = 'Example of info toast',
  backgroundColor,
  animationType = AnimationMode.SCALE,
  position = ToastPortalPosition.TOP_RIGHT,
  onClose,
  onDragDelete,
}: ToastProps) => {
  const [reverse, setReverse] = useState(false)

  useEffect(() => {
    setReverse(false)
  }, [setReverse])

  const onToastClose = () => {
    setReverse(true)
    onClose()
  }

  return (
    <StyledToast
      mode={mode}
      backgroundColor={backgroundColor}
      reverse={reverse}
      animationType={animationType}
      position={position}
      draggable
      onClick={onToastClose}
      onDragEnd={onDragDelete}
    >
      <StyledTitle>{title}</StyledTitle>
      <p>{message}</p>
      <StyledCloseToast onClick={onToastClose}>&#10005;</StyledCloseToast>
    </StyledToast>
  )
}
