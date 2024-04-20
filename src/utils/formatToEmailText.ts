// Definindo o tipo para os dados de entrada
type ContactInfo = {
  name: string
  email: string
  whatsapp: string
  instagram: string
}

// Função para formatar os dados em uma string para envio de email
export default function formatContactInfoForEmail(
  contactInfo: ContactInfo,
): string {
  return `
      Nome: ${contactInfo.name}
      Email: ${contactInfo.email}
      Whatsapp: ${contactInfo.whatsapp}
      Instagram: ${contactInfo.instagram}
    `
}
