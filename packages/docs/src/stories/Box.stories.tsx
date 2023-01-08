import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@hype-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <>
        <Text>Testando o Box</Text>
      </>
    ),
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
