import { Container } from './styles'
import WhatsLogo from '../../assets/whats-logo.png'
import Image from 'next/image'
import { JULLI_TEL, WHATS_MSG } from '../consts'

function WhatsButton() {
  return (
    <Container>
      <a
        href={`https://wa.me/55${JULLI_TEL}?text=${WHATS_MSG}`}
        target="_blank"
        rel="noreferrer"
      >
        <Image src={WhatsLogo} alt="" width={60} />
      </a>
    </Container>
  )
}

export default WhatsButton
