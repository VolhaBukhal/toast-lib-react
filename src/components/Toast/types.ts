export type ToastProps = {
  title: string
  mode: string
  message: string
  animationType: string
  backgroundColor?: string
  position: string
  onClose: () => void
  onDragDelete: () => void
}

export type StyledToastProps = {
  mode: string
  backgroundColor?: string
  reverse: boolean
  animationType: string
  position: string
}

export enum ToastMode {
  INFO = 'info',
  SUCCESS = 'success',
  WARNING = 'warning',
  ERROR = 'error',
}

export enum AnimationMode {
  FADE = 'fade',
  SCALE = 'scale',
  MOVE = 'move',
}
