import Image from 'next/image'
import { cardsContent } from './consts'
import Woman from '../../../assets/woman.png'
import { Container, Content, Description } from './styles'
import Slider from '@/components/HomeSections/MotivationSection/Slider'

function MotivationSection() {
  return (
    <Container>
      <Content className="ident-content" id="motivation">
        <h1>
          <strong>Potencialize seu Sucesso</strong> com Equipamentos Estéticos
          Semi-Novos
        </h1>
        <h1>É só benefício</h1>

        <Slider cards={cardsContent} />

        <Description>
          <h1>
            O benefício mais gratificante é o{' '}
            <strong>sorriso nos rostos dos seus clientes.</strong>
          </h1>
          <p>
            <span>Com equipamentos estéticos semi-novos</span>, você pode
            oferecer tratamentos de alta qualidade, conquistando resultados
            excepcionais e transformar vidas.
          </p>
        </Description>

        <Image src={Woman} alt="" />
      </Content>
    </Container>
  )
}

export default MotivationSection
