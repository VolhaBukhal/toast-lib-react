import { ToastPortalPosition } from '@/components/ToastPortal/types'

export const setPosition = (position: string) => {
  switch (position) {
    case ToastPortalPosition.BOTTOM_LEFT: {
      return css`
        bottom: 10px;
        left: 10px;
      `
    }
    case ToastPortalPosition.TOP_LEFT: {
      return css`
        top: 10px;
        left: 10px;
      `
    }

    case ToastPortalPosition.BOTTOM_RIGHT: {
      return css`
        bottom: 10px;
        right: 10px;
      `
    }
    default:
      return css`
        top: 10px;
        right: 10px;
      `
  }
}
