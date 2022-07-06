import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ToastPortal } from '.'

export default {
  title: 'ToastPortal',
  component: ToastPortal,
} as ComponentMeta<typeof ToastPortal>

export const Template: ComponentStory<typeof ToastPortal> = () => <ToastPortal />
