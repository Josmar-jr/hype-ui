import { ComponentProps } from 'react'
import { styled } from '../styles'

export const Box = styled('div', {
  padding: '$4',
  border: '1px solid $gray600',
  background: '$gray700',
  borderRadius: '$md',
})

export interface BoxProps extends ComponentProps<typeof Box> {}
