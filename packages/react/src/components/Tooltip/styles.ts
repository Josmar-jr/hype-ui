import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { styled } from '../../styles'

export const Content = styled(TooltipPrimitive.Content, {
  borderRadius: '$sm',
  padding: '$1 $2',
  fontSize: '$sm',
  fontFamily: '$default',
  lineHeight: '$base',
  color: '$gray100',
  background: '$gray500',
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  'user-select': 'none',
})

export const Arrow = styled(TooltipPrimitive.Arrow, {
  fill: '$gray500',
})

export const Trigger = styled(TooltipPrimitive.Trigger, {
  all: 'unset',
})
