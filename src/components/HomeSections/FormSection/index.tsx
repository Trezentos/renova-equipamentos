import Input from '@/components/Inputs/Input'
import { Container } from './styles'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  RegisterFormData,
  registerFormDefaultValues,
  registerFormSchema,
} from './schema'
import Button from '@/components/Button'

function FormSection() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: registerFormDefaultValues,
  })

  const onSubmit = async (data: RegisterFormData) => {
    try {
      console.log(data)
    } catch (error: any) {}
  }

  return (
    <Container>
      <div>
        <h1>
          <strong>Dê o primeiro passo</strong> rumo ao sucesso
        </h1>
        <p>
          Solicite seu contato agora mesmo e descubra como os equipamentos
          estéticos semi-novos podem transformar sua clínica,{' '}
          <strong>não deixe essa oportunidade escapar</strong>.
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            register={register}
            name="name"
            type="text"
            label="Nome"
            errorMessage={errors.name}
          />
          <Input
            register={register}
            name="email"
            type="email"
            label="Email"
            errorMessage={errors.email}
          />
          <Input
            register={register}
            name="Whatsapp"
            type="text"
            label="Whatsapp"
            errorMessage={errors.whatsapp}
          />
          <Input
            register={register}
            name="Instagram"
            type="text"
            label="Instagram"
            errorMessage={errors.instagram}
          />
          <Button typeStyle="form" type="submit">
            Tenho interesse nos produtos
          </Button>
        </form>
      </div>
      <footer>
        <p>© Copyright 2009 – Todos os direitos reservados</p>
      </footer>
    </Container>
  )
}

export default FormSection
