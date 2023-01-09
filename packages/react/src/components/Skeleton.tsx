import { keyframes } from '@stitches/react'
import { CircleNotch } from 'phosphor-react'
import { ComponentProps } from 'react'
import { styled } from '../styles'

const spin = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
})

export const Spinner = styled(CircleNotch, {
  animation: `${spin} 1s linear infinite`,
  color: '$gray100',

  variants: {
    size: {
      sm: {
        fontSize: '$lg',
      },
      md: {
        fontSize: '$2xl',
      },
      lg: {
        fontSize: '$4xl',
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export interface SpinnerProps extends ComponentProps<typeof Spinner> {}

Spinner.displayName = 'Spinner'
