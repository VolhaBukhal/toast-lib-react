export type ToastPortalProps = {
  autoClose: boolean
  autoCloseTime: number
  position: string
  margin: string
}

export enum ToastPortalMargin {
  NONE = '0px',
  SMALL = '10px',
  MEDIUM = '15px',
  LARGE = '20px',
}

export enum ToastPortalPosition {
  TOP_RIGHT = 'topRight',
  TOP_LEFT = 'topLeft',
  BOTTOM_RIGHT = 'bottomRight',
  BOTTOM_LEFT = 'bottomLeft',
}
