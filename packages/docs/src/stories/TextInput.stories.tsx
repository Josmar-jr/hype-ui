import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, TextInput, TextInputProps } from '@hype-ui/react'
import { User } from 'phosphor-react'

export default {
  title: 'Form/Text Input',
  component: TextInput,
  args: {
    placeholder: '',
  },
  argTypes: {
    placeholder: {
      type: 'string',
    },
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}
        >
          <Text>Label</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'github.com/',
  },
}

export const WithSuffix: StoryObj<TextInputProps> = {
  args: {
    suffix: '.com.br',
  },
}

export const WithLeftIcon: StoryObj<TextInputProps> = {
  args: {
    leftIcon: <User />,
  },
}

export const WithRightIcon: StoryObj<TextInputProps> = {
  args: {
    rightIcon: <User />,
  },
}
