import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, TextArea, TextAreaProps } from '@hype-ui/react'

export default {
  title: 'Form/Text Area',
  component: TextArea,
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
  args: {
    disabled: false,
    placeholder: 'Placeholder',
  },
  argTypes: {
    disabled: {
      type: 'boolean',
    },
  },
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
}
