import { Container, Content, VantagesImages } from './styles'
import { cardsContent } from './consts'
import Image from 'next/image'
import vantage1 from '../../../assets/vantage-1.png'
import vantage2 from '../../../assets/vantage-2.png'
import vantage3 from '../../../assets/vantage-3.png'
import vantage4 from '../../../assets/vantage-4.png'
import EquipamentsSlider from '@/components/HomeSections/EquipamentBenefits/Slider'

function EquipamentsBenefits() {
  return (
    <Container>
      <Content className="ident-content">
        <h1>
          Por que optar por adquirir Equipamentos estéticos com a Renova
          Equipamentos?
        </h1>

        <EquipamentsSlider cards={cardsContent} />

        <VantagesImages>
          <Image src={vantage1} width={210} alt="" />
          <Image src={vantage2} width={210} alt="" />
          <Image src={vantage3} width={210} alt="" />
          <Image src={vantage4} width={210} alt="" />
        </VantagesImages>
      </Content>
    </Container>
  )
}

export default EquipamentsBenefits
