import styled from 'styled-components'
import { theme } from '@/theme'

export const ButtonGroup = styled.div`
  margin: ${theme.spaces[0]} auto;
  width: ${theme.widths[0]}%;
  height: ${theme.widths[0]}vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${theme.spaces[3]}px;
`
export const Button = styled.button`
  padding: ${theme.spaces[2]}px ${theme.spaces[3]}px;
  border: none;
  border-radius: ${theme.borderRadius}px;
  color: ${theme.colors.white};
  background-color: ${theme.colors.accent};
  transition: ${theme.duration.ms300}s;
  &:hover {
    cursor: pointer;
    transform: scale(1.03);
  }
`
