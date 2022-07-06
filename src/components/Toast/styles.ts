import styled from 'styled-components'
import { css, keyframes } from 'styled-components'

import { theme } from '@/theme'

import { StyledToastProps, ToastMode, AnimationMode } from './types'

const fadeIn = keyframes`
 0% { opacity: 0 }
 100% { opacity: 1 }
`
const scaleUp = keyframes`
 0% { transform: scale(0) }
 100% {transform: scale(1) }
`

const fromRight = keyframes`
 0% { right: -110%; }
 100% { right: 0%; }
`

export const StyledToast = styled.div<StyledToastProps>`
  width: ${theme.widths[1]}px;
  display: flex;
  flex-direction: column;
  min-height: ${theme.widths[0]}px;
  position: relative;
  right: ${theme.positions[0]}%;
  align-items: center;
  justify-content: center;
  background-color: ${({ mode, backgroundColor }) => {
    if (backgroundColor) {
      return backgroundColor
    } else {
      switch (mode) {
        case ToastMode.SUCCESS: {
          return theme.colors.success
        }
        case ToastMode.WARNING: {
          return theme.colors.warning
        }
        case ToastMode.ERROR: {
          return theme.colors.error
        }
        default:
          return theme.colors.info
      }
    }
  }};

  opacity: 1;
  padding: ${theme.spaces[1]}px ${theme.spaces[3]}px ${theme.spaces[3]}px ${theme.spaces[3]}px;
  color: ${theme.colors.white};
  border-radius: ${theme.borderRadius}px;
  box-sizing: border-box;
  box-shadow: ${theme.boxShadow};

  animation-name: ${({ animationType }) => {
    switch (animationType) {
      case AnimationMode.FADE: {
        return fadeIn
      }
      case AnimationMode.SCALE: {
        return scaleUp
      }
      default:
        return fromRight
    }
  }};
  animation-duration: ${theme.duration.ms300}s;
  animation-direction: ${({ reverse }) => (reverse ? 'reverse' : 'normal')};
  animation-fill-mode: forwards;

  &:hover {
    transition: ${theme.duration.ms300}s;
    transform: scale(0.95);
    box-shadow: ${theme.boxShadowHover};
  }
`

export const StyledCloseToast = styled.div`
  position: absolute;
  top: ${theme.positions[1] / 2}px;
  right: ${theme.positions[1]}px;
  color: ${theme.colors.white};
  cursor: pointer;
`

export const StyledTitle = styled.div`
  align-self: start;
`
