import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ToastPortal } from '.'

import { ToastPortalPosition } from './types'

export default {
  title: 'ToastPortal',
  component: ToastPortal,
  argTypes: {
    position: {
      control: 'select',
      options: Object.values(ToastPortalPosition),
    },
  },
} as ComponentMeta<typeof ToastPortal>

const Template: ComponentStory<typeof ToastPortal> = (args) => <ToastPortal {...args} />

export const Default = Template.bind({})
Default.args = {
  position: ToastPortalPosition.TOP_RIGHT,
  autoClose: true,
  autoCloseTime: 3000,
}
