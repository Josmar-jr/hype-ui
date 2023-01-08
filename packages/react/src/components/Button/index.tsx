import { CircleNotch } from 'phosphor-react'
import { ComponentProps, ElementType, ReactNode } from 'react'
import { ButtonSt } from './styles'

export interface ButtonProps extends ComponentProps<typeof ButtonSt> {
  as?: ElementType
  isLoading?: boolean
  children: ReactNode
}

export function Button({
  as,
  isLoading = false,
  children,
  ...rest
}: ButtonProps) {
  return (
    <ButtonSt {...rest} disabled={isLoading || rest.disabled}>
      {isLoading ? (
        <>
          {children}
          <CircleNotch
            className="animate-spin"
            size={18}
            weight="bold"
            color="white"
          />
        </>
      ) : (
        children
      )}
    </ButtonSt>
  )
}

Button.displayName = 'Button'
