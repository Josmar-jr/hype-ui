import { colors } from '@hype-ui/tokens'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { rgba } from 'polished'
import { keyframes, styled } from '../../styles'

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
})

const overlayHide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
})

const contentShow = keyframes({
  '0%': {
    opacity: 0,
    transform: 'translate3D(-50%, calc(-50% + 20px), 0) scale(0.96)',
  },
  '100%': {
    opacity: 1,
    transform: 'translate3D(-50%, -50%, 0) scale(1)',
  },
})

const contentHide = keyframes({
  '0%': { opacity: 1, transform: 'translate3D(-50%, -50%, 0) scale(1)' },
  '100%': {
    opacity: 0,
    transform: 'translate3D(-50%, calc(-50% + 20px), 0) scale(0.96)',
  },
})

export const StyledModalWrapper = styled(DialogPrimitive.Content, {
  position: 'fixed',
  top: '50%',
  left: '50%',
  backfaceVisibility: 'hidden',
  transform: 'translate3D(-50%, -50%, 0)',
  width: '100%',
  maxWidth: 'var(--max-with)',
  background: '$gray800',
  borderRadius: '$sm',
  zIndex: 999,
  overflowY: 'auto',

  '&:focus': {
    outline: 'none',
  },

  '&[data-state="open"]': {
    animation: `${contentShow} .3s ease-in`,
  },

  '&[data-state="closed"]': {
    animation: `${contentHide} .3s ease-out`,
  },

  boxShadow: `
    0px 1.8px 2.6px rgba(0, 0, 0, 0.02),
    0px 5px 7.1px rgba(0, 0, 0, 0.02),
    0px 12.1px 17.2px rgba(0, 0, 0, 0.02),
    0px 40px 57px rgba(0, 0, 0, 0.02),
  `,
})

export const StyledModalOverlay = styled(DialogPrimitive.Overlay, {
  backgroundColor: 'rgba(0, 0, 0, .7)',
  position: 'fixed',
  inset: 0,
  zIndex: 995,

  '&[data-state="open"]': {
    animation: `${overlayShow} .2s ease-in`,
  },

  '&[data-state="closed"]': {
    animation: `${overlayHide} .2s ease-in`,
  },
})

export const StyledModalContent = styled('div', {
  padding: '$6',

  'p + p': {
    marginTop: '$4',
  },

  '@mobile': {
    padding: '$4',
  },
})

export const SyledModalHeader = styled('header', {
  py: '$4',
  px: '$6',

  background: '$gray700',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const StyledIconButton = styled('button', {
  all: 'unset',
  color: '$gray300',
  cursor: 'pointer',

  fontSize: '$lg',
  borderRadius: '$sm',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '$1',

  transition: '.3s ease',

  '&:focus': {
    boxShadow: `0 0 0 3px ${rgba(colors.indigo400, 0.7)}`,
  },

  '&:hover': {
    color: '$gray100',
  },
})

export const StyledModalClose = styled(DialogPrimitive.Close, {})

export const StyledModalActions = styled('footer', {
  py: '$4',
  px: '$6',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'var(--justify-content)',

  borderTop: '1px solid $gray500',
})

export const StyledModalTitle = styled(DialogPrimitive.Title, {})
