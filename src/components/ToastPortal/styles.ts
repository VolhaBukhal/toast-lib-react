import styled, { css } from 'styled-components'
import { theme } from '@/theme'

import { ToastPortalProps, ToastPortalPosition } from './types'

const setPosition = (position: string) => {
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

export const ToastContainer = styled.div<ToastPortalProps>`
  display: flex;
  flex-direction: column;
  gap: ${theme.positions[1]}px;
  background-color: yellow;
  position: fixed;
  ${({ position }) => setPosition(position)}
`
