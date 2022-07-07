import { ComponentStory, ComponentMeta } from '@storybook/react'

import { AddToastButtons } from '.'
import { ToastPortalPosition } from '@/components/ToastPortal/types'

export default {
  title: 'AddToastButtons',
  component: AddToastButtons,
  argTypes: {
    position: {
      control: 'select',
      options: Object.values(ToastPortalPosition),
    },
    autoCloseTime: {
      options: [1000, 2000, 3000, 4000, 5000],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof AddToastButtons>

const Template: ComponentStory<typeof AddToastButtons> = (args) => <AddToastButtons {...args} />

export const Default = Template.bind({})
Default.args = {
  position: ToastPortalPosition.TOP_RIGHT,
  autoCloseTime: 4000,
}

export const BottomRight = Template.bind({})
BottomRight.args = {
  position: ToastPortalPosition.BOTTOM_RIGHT,
}

export const TopLeft = Template.bind({})
TopLeft.args = {
  position: ToastPortalPosition.TOP_LEFT,
}
