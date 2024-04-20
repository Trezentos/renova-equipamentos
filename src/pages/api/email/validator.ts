import * as yup from 'yup'

export const contactEmailSchema = yup.object().shape({
  name: yup.string().required('Nome é obrigatório'),
  telephone: yup.string().required('Telefone é obrigatório'),
  email: yup.string().email('Email inválido').required('Email é obrigatório'),
  city: yup.string().required('Cidade é obrigatória'),
  estate: yup.string().required('Estado é obrigatório'),
  message: yup.string().required('Mensagem é obrigatória'),
})
