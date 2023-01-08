import type { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '@hype-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Lorem ipsum dolor',
  },
  argTypes: {
    size: {
      type: {
        name: 'enum',
        value: ['sm', 'md', 'lg', '2xl', '3xl', '4xl', '5xl', '6xl'],
      },
    },
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 text',
    as: 'h1',
    size: 'lg',
  },
  parameters: {
    docs: {
      description: {
        story:
          'By default the Heading will always be `h2`, but we can change it with property `as`.',
      },
    },
  },
}
