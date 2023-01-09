import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import {
  Box,
  Button,
  Tooltip,
  TooltipContent,
  TooltipContentProps,
  TooltipProps,
  TooltipTrigger,
} from '@hype-ui/react'

export default {
  title: 'Overlay/Tooltip',
  component: Tooltip,
  decorators: [
    (Story) => (
      <Box
        css={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Tooltip>
          <TooltipTrigger>
            <Button>Teste</Button>
          </TooltipTrigger>
          <TooltipContent>Isso é um test</TooltipContent>
        </Tooltip>
      </Box>
    ),
  ],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipContentProps> = {
  args: {
    align: 'start',
  },
  argTypes: {
    align: {
      options: ['start', 'center', 'end'],
      control: { type: 'inline-radio' },
    },
  },
}
