import { z } from 'zod'

export const registerFormSchema = z.object({
  name: z.string().min(1, 'Nome completo é necessário'),
  email: z.string().email('Email inválido'),
  whatsapp: z.string().min(1, 'Número do whatsapp é necessário'),
  instagram: z.string().min(1, 'Cidade é necessário'),
})

export type RegisterFormData = z.infer<typeof registerFormSchema>

export const registerFormDefaultValues = {
  name: '',
  email: '',
  whatsapp: '',
  instagram: '',
} as RegisterFormData
