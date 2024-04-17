import Image from 'next/image'
import { Container, Description } from './styles'
import EquipamentsImgs from '../../../assets/Equipamentos-esteticos-a-laser-la-laser.png'
import Button from '../../Button'

function MainSection() {
  return (
    <Container>
      <div>
        <Image src={EquipamentsImgs} alt="" />
        <Description>
          <h3>
            Compre o seu equipamento Medico/estético seminovo com{' '}
            <span>até 50% de desconto comparado a um novo!</span>
          </h3>
          <strong>+2.000 Clínicas aprovam o nosso método</strong>
          <Button>Clique aqui para iniciar sua jornada de crescimento!</Button>
        </Description>
      </div>
    </Container>
  )
}

export default MainSection
