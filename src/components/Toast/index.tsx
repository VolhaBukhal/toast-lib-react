import React, { useState } from 'react'

import { ToastProps, AnimationMode } from './types'
import { StyledToast, StyledTitle, StyledCloseToast } from './styles'

export const Toast = ({
  title,
  mode,
  message,
  backgroundColor,
  animationType = AnimationMode.SCALE,
  onClose,
}: ToastProps) => {
  const [reverse, setReverse] = useState(false)
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
    >
      <StyledTitle>{title}</StyledTitle>
      <p>{message}</p>
      <StyledCloseToast onClick={onToastClose}>&#10005;</StyledCloseToast>
    </StyledToast>
  )
}
