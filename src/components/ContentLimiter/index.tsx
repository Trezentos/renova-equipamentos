import { ReactNode } from 'react'
import { Container } from './styles'

interface ContentLimiter {
  children: ReactNode
}

function ContentIndent({ children }: ContentLimiter) {
  return <Container>{children}</Container>
}

export default ContentIndent
