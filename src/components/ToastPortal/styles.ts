import styled, { css } from 'styled-components'
import { theme } from '@/theme'

import { ToastPortalProps, ToastPortalPosition, ToastPortalMargin } from './types'

const setPosition = (position: string) => {
  switch (position) {
    case ToastPortalPosition.BOTTOM_LEFT: {
      return css`
        bottom: ${theme.positions[1]}px;
        left: ${theme.positions[1]}px;
      `
    }
    case ToastPortalPosition.TOP_LEFT: {
      return css`
        top: ${theme.positions[1]}px;
        left: ${theme.positions[1]}px;
      `
    }

    case ToastPortalPosition.BOTTOM_RIGHT: {
      return css`
        bottom: ${theme.positions[1]}px;
        right: ${theme.positions[1]}px;
      `
    }
    default:
      return css`
        top: ${theme.positions[1]}px;
        right: ${theme.positions[1]}px;
      `
  }
}

const setMargin = (margin: string) => {
  switch (margin) {
    case ToastPortalMargin.SMALL: {
      return css`
        margin: ${theme.borderRadius}px;
      `
    }
    case ToastPortalMargin.MEDIUM: {
      return css`
        margin: ${theme.positions[1]}px;
      `
    }

    case ToastPortalMargin.LARGE: {
      return css`
        margin: ${theme.positions[2]}px;
      `
    }
    default:
      return css`
        margin: ${theme.positions[0]}px;
      `
  }
}

export const ToastContainer = styled.div<ToastPortalProps>`
  display: flex;
  flex-direction: column;
  gap: ${theme.positions[1]}px;
  ${({ margin }) => setMargin(margin)};
  position: fixed;
  ${({ position }) => setPosition(position)}
`
