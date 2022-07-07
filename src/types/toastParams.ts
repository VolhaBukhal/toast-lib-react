export type IToastParams = {
  mode: string
  message: string
  title: string
  animationType: string
  backgroundColor?: string
  position: string
  // reverse: boolean
  // onClose: () => void
}

export interface IToast extends IToastParams {
  id: string
}

// title, id, mode, message, onClose, animationType, backgroundColor
