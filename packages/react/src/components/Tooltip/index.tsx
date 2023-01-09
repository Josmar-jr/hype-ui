import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { ComponentProps, ReactNode } from 'react'
import { Arrow, Content, Trigger } from './styles'

export interface TooltipProps
  extends ComponentProps<typeof TooltipPrimitive.Root> {}

export function Tooltip(props: TooltipProps) {
  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root {...props} />
    </TooltipPrimitive.Provider>
  )
}

export interface TooltipContentProps extends ComponentProps<typeof Content> {
  children: ReactNode | string
}

export function TooltipContent({ children, ...props }: TooltipContentProps) {
  return (
    <TooltipPrimitive.Portal>
      <Content {...props}>
        {children}
        <Arrow />
      </Content>
    </TooltipPrimitive.Portal>
  )
}

export const TooltipTrigger = Trigger

export interface TooltipTriggerProps extends ComponentProps<typeof Trigger> {}
