import { ButtonHTMLAttributes } from 'react'
import { Container } from './styles'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean
  typeStyle?: 'form'
  size?: 'small'
}

export default function Button({
  size,
  children,
  typeStyle,
  ...rest
}: ButtonProps) {
  return (
    <Container $typeStyle={typeStyle} size={size} {...rest}>
      {children}
    </Container>
  )
}
