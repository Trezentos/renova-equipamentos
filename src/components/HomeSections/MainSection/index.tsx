import Image from 'next/image'
import { Container, Description } from './styles'
import EquipamentsImgs from '../../../assets/Equipamentos-esteticos-a-laser-la-laser.png'
import Button from '../../Button'
import { JULLI_TEL, WHATS_MSG } from '@/components/consts'

function MainSection() {
  return (
    <Container>
      <div>
        <Image src={EquipamentsImgs} alt="" />
        <Description>
          <h3>
            Adquira seu equipamento médico/estético seminovo com descontos de
            <span>até 50% em comparação aos novos!</span>
          </h3>
          <strong>Várias Clínicas aprovam o nosso método</strong>
          <Button>
            <a
              href={`https://wa.me/55${JULLI_TEL}?text=${WHATS_MSG}`}
              target="_blank"
              rel="noreferrer"
            >
              Clique aqui para iniciar sua jornada de crescimento!
            </a>
          </Button>
        </Description>
      </div>
    </Container>
  )
}

export default MainSection
