import { Container } from './styles'
import WhatsLogo from '../../assets/whats-logo.png'
import Image from 'next/image'

function WhatsButton() {
  return (
    <Container>
      <Image src={WhatsLogo} alt="" width={60} />
    </Container>
  )
}

export default WhatsButton
