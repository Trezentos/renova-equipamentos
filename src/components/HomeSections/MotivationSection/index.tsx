import Image from 'next/image'
import { cardsContent } from './consts'
import Woman from '../../../assets/woman.png'
import { Container, Content, Description, Footer } from './styles'
import Slider from '@/components/HomeSections/MotivationSection/Slider'
import { BsWhatsapp } from 'react-icons/bs'
import { JULLI_TEL, WHATS_MSG } from '@/components/consts'

function MotivationSection() {
  return (
    <>
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
      <Footer>
        <div className="ident-content">
          <p>
            O êxito está próximo. Aposte no seu desenvolvimento e alcance
            resultados extraordinários. Não hesite, realize seu registro e
            entraremos em contato em breve!
          </p>
          <a
            href={`https://wa.me/55${JULLI_TEL}?text=${WHATS_MSG}`}
            target="_blank"
            rel="noreferrer"
          >
            <BsWhatsapp size={18} /> Conversar no Whatsapp
          </a>
        </div>
      </Footer>
    </>
  )
}

export default MotivationSection
