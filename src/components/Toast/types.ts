export type ToastProps = {
  title: string
  reverse: boolean
  mode: string
  message: string
  animationType: string
  backgroundColor: string
  onClose: () => void
}

export type StyledToastProps = {
  mode: string
  backgroundColor?: string
  reverse: boolean
  animationType: string
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
