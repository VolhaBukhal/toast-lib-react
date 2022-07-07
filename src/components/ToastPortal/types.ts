export type ToastPortalProps = {
  autoClose: boolean
  autoCloseTime: number
  position: string
  margin: string
}

export enum ToastPortalMargin {
  NONE = 'none',
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

export enum ToastPortalPosition {
  TOP_RIGHT = 'topRight',
  TOP_LEFT = 'topLeft',
  BOTTOM_RIGHT = 'bottomRight',
  BOTTOM_LEFT = 'bottomLeft',
}
