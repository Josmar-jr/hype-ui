import React from 'react'
import * as DialogPrimite from '@radix-ui/react-dialog'
import {
  StyledModalWrapper,
  StyledModalContent,
  StyledModalOverlay,
  StyledModalTitle,
  SyledModalHeader,
  StyledIconButton,
  StyledModalActions,
} from './styles'
import { X } from 'phosphor-react'
import { Heading } from '../Heading'

export interface ModalProps
  extends React.ComponentProps<typeof DialogPrimite.Root> {
  overlay?: boolean
}

export function Modal({ children, overlay, ...props }: ModalProps) {
  return (
    <DialogPrimite.Root {...props}>
      {overlay && <StyledModalOverlay />} {children}
    </DialogPrimite.Root>
  )
}

export interface ModalWrapperProps
  extends React.ComponentProps<typeof StyledModalWrapper> {
  width?: number
  maintainDimentions?: boolean
}

export function ModalWrapper({
  children,
  width = 700,
  maintainDimentions = false,
  ...props
}: ModalWrapperProps) {
  return (
    <StyledModalWrapper
      {...props}
      css={{
        '--max-with': `${width}px`,
        ...(!maintainDimentions && {
          [`@media (max-width: ${width}px)`]: {
            width: '100vw',
            height: '100vh',
            borderRadius: 0,
          },
        }),
      }}
    >
      {children}
    </StyledModalWrapper>
  )
}

export const ModalTitle = StyledModalTitle

export interface ModalHeaderProps {
  children: React.ReactNode
  closeButton?: boolean
}

export const ModalClose = DialogPrimite.DialogClose

export function ModalHeader({
  children,
  closeButton = true,
}: ModalHeaderProps) {
  return (
    <SyledModalHeader>
      <StyledModalTitle asChild>
        <Heading>{children}</Heading>
      </StyledModalTitle>

      {closeButton && (
        <ModalClose asChild>
          <StyledIconButton>
            <X />
          </StyledIconButton>
        </ModalClose>
      )}
    </SyledModalHeader>
  )
}

export interface ModalFooterProps {
  children: React.ReactNode
  align?: 'left' | 'right' | 'center'
}

export function ModalActions({ children, align }: ModalFooterProps) {
  return (
    <StyledModalActions css={{ '--justify-content': align }}>
      {children}
    </StyledModalActions>
  )
}
ModalActions.displayName = 'ModalActions'

export const ModalTrigger = DialogPrimite.Trigger
ModalTrigger.displayName = 'ModalTrigger'

export const ModalContent = StyledModalContent
ModalContent.displayName = 'ModalContent'
