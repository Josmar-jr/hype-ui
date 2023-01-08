import * as Checkbox from '@radix-ui/react-checkbox'
import { keyframes, styled } from '../../styles'

export const CheckboxContainer = styled(Checkbox.Root, {
  all: 'unset',
  width: '$6',
  height: '$6',
  backgroundColor: '$gray900',
  borderRadius: '$xs',
  lineHeight: 0,
  cursor: 'pointer',
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '2px solid $gray900',

  "&[data-state='checked']": {
    background: '$indigo500',
  },

  '&:focus': {
    border: '2px solid $indigo500',
  },
})

const SlideIn = keyframes({
  from: {
    transform: 'translateY(-100%)',
  },
  to: {
    transform: 'translateY(0)',
  },
})

const SlideOut = keyframes({
  from: {
    transform: 'translateY(0)',
  },
  to: {
    transform: 'translateY(-100%)',
  },
})

export const CheckboxIndicator = styled(Checkbox.Indicator, {
  color: 'white',
  width: '$4',
  height: '$4',

  "&[data-state='checked']": {
    animation: `${SlideIn} 200ms ease-out`,
  },

  "&[data-state='unchecked']": {
    animation: `${SlideOut} 200ms ease-out`,
  },
})
