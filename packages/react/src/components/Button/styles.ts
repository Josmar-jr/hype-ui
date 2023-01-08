import { keyframes } from '@stitches/react'
import { rgba } from 'polished'
import { colors } from '@hype-ui/tokens'
import { styled } from '../../styles'

const spin = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
})

export const ButtonSt = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  fontSize: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
  boxSizing: 'border-box',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  cursor: 'pointer',
  transition: 'background 0.2s ease',

  svg: {
    width: '$4',
    height: '$4',
  },

  '&:disabled': {
    cursor: 'not-allowed',
    opacity: 0.7,
  },

  '.animate-spin': {
    animation: `${spin} 1s linear infinite`,
  },

  '&:focus': {
    boxShadow: `0 0 0 3px ${rgba(colors.indigo400, 0.7)}`,
    border: '1px solid $white',
  },

  border: '1px solid transparent',

  variants: {
    variant: {
      primary: {
        color: '$white',
        background: '$indigo600',

        '&:not(:disabled):hover': {
          background: '$indigo500',
        },

        '&:disabled': {
          opacity: 0.7,
        },
      },

      outline: {
        color: '$gray100',
        border: '1px solid $gray400',

        '&:not(:disabled):hover': {
          background: '$gray100',
          color: '$gray700',
        },

        '&:disabled': {
          color: '$gray200',
          borderColor: '$gray200',
          opacity: 0.5,
        },
      },

      dashed: {
        color: '$gray100',
        border: '1px dashed $gray500',

        '&:not(:disabled):hover': {
          color: '$white',
        },

        '&:disabled': {
          opacity: 0.5,
        },
      },
    },

    danger: {
      true: {
        background: '$danger',

        '&:not(:disabled):hover': {
          background: '$danger-dark',
        },
      },
    },

    size: {
      sm: {
        padding: '$2 $3',
      },
      md: {
        padding: '$2 $4',
      },
      lg: {
        fontSize: '$md',
        padding: '$2 $4',
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})
