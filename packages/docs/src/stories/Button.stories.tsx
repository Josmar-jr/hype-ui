import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@hype-ui/react'
import { Envelope } from 'phosphor-react'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Primary',
    size: 'sm',
    variant: 'primary',
    disabled: false,
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'inline-radio' },
    },
    variant: {
      options: ['primary', 'outline', 'dashed'],
      control: { type: 'inline-radio' },
    },
    disabled: {
      type: 'boolean',
    },
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Outline: StoryObj<ButtonProps> = {
  args: {
    children: 'Outline',
    variant: 'outline',
  },
}

export const Dashed: StoryObj<ButtonProps> = {
  args: {
    children: 'Dashed',
    variant: 'dashed',
  },
}

export const Danger: StoryObj<ButtonProps> = {
  args: {
    children: 'Danger',
    danger: true,
  },
}

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Enviar
        <Envelope />
      </>
    ),
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
}

export const LoadingState: StoryObj<ButtonProps> = {
  args: {
    isLoading: true,
  },
}
