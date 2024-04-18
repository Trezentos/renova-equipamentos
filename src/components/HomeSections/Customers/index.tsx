import { Container } from './styles'
import feedback1 from '../../../assets/feedback-1.jpg'
import feedback2 from '../../../assets/feedback-2.jpg'
import Image from 'next/image'

function CustomersSection() {
  return (
    <>
      <Container>
        <div>
          <h1>Oque dizem os nossos clientes?</h1>
          <div>
            <Image src={feedback1} alt="" width={260} />
            <Image src={feedback2} alt="" width={260} />
          </div>
        </div>
        <footer>
          <div>
            <h3>
              Compreendemos que os altos custos de equipamentos novos podem
              parecer um obstáculo difícil.
              <br />
            </h3>
            <p>
              <strong>Mas não se preocupe, estamos aqui para te ajudar!</strong>
            </p>
          </div>
        </footer>
      </Container>
    </>
  )
}

export default CustomersSection
