import { ComponentProps, ReactNode } from 'react'
import { TextInputContainer, Prefix, Input } from './styles'

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string
  suffix?: string
  error?: boolean
  leftIcon?: ReactNode
  rightIcon?: ReactNode
}

export function TextInput({
  prefix,
  suffix,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  error,
  ...props
}: TextInputProps) {
  const hasIcon = LeftIcon || RightIcon

  return (
    <TextInputContainer error={error}>
      {LeftIcon}

      {!!prefix && !hasIcon && <Prefix>{prefix}</Prefix>}
      <Input {...props} />
      {!!suffix && !hasIcon && <Prefix>{suffix}</Prefix>}

      {RightIcon}
    </TextInputContainer>
  )
}

TextInput.displayName = 'TextInput'
