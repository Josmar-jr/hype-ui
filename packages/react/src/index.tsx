import { styled } from './styles'

export const Button = styled('button', {
  fontFamily: '$default',
  background: '$gray500',
  padding: '$2 $4',
})

export function App() {
  return <Button>Hello World</Button>
}
