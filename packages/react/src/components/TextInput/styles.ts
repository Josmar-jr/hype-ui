import { styled } from '../../styles'

export const TextInputContainer = styled('div', {
  backgroundColor: '$gray900',
  height: '3rem',
  padding: '0 $4',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $gray900',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  transition: 'border-color 0.2s ease 0s',

  svg: {
    paddingRight: '$3',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '$gray400',
    fontSize: '$lg',
  },

  '&:has(input:focus)': {
    borderColor: '$indigo500',

    svg: {
      color: '$indigo500',
    },
  },

  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  variants: {
    error: {
      true: {
        borderColor: '$danger',

        svg: {
          color: '$danger',
        },
      },
    },
  },
})

export const TextInputIcon = styled('span', {
  fontSize: '$4',
  width: '$8',
  color: '$gray300',
})

export const Prefix = styled('span', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$gray400',
  fontWeight: 'regular',
})

export const Input = styled('input', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$white',
  fontWeight: 'regular',
  background: 'transparent',
  border: 0,
  width: '100%',

  '&:focus': {
    outline: 0,
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&:placeholder': {
    color: '$gray400',
  },
})
