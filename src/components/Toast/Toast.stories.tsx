import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Toast } from '.'

import { ToastMode, AnimationMode } from './types'

export default {
  title: 'Toast',
  component: Toast,
  argTypes: {
    mode: {
      options: Object.values(ToastMode),
      control: { type: 'radio' },
    },
    backgroundColor: {
      control: 'color',
    },
    animationType: {
      options: Object.values(AnimationMode),
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Toast>

const Template: ComponentStory<typeof Toast> = (args) => <Toast {...args} />

export const Info = Template.bind({})
Info.args = {
  title: 'Info',
  mode: ToastMode.INFO,
  message: 'Info Toast',
  animationType: AnimationMode.FADE,
}

export const Success = Template.bind({})
Success.args = {
  title: 'Success',
  mode: ToastMode.SUCCESS,
  message: 'Success Toast',
  animationType: AnimationMode.SCALE,
}

export const Warning = Template.bind({})
Warning.args = {
  title: 'Warning',
  mode: ToastMode.WARNING,
  message: 'Warning Toast',
  animationType: AnimationMode.MOVE,
}

export const Error = Template.bind({})
Error.args = {
  title: 'Error',
  mode: ToastMode.ERROR,
  message: 'Error Toast',
}
