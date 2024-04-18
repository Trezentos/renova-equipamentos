import CustomersSection from '@/components/HomeSections/Customers'
import EquipamentsBenefits from '@/components/HomeSections/EquipamentBenefits'
import FormSection from '@/components/HomeSections/FormSection'
import MainSection from '@/components/HomeSections/MainSection'
import MotivationSection from '@/components/HomeSections/MotivationSection'
import WhatsButton from '@/components/WhatsButton'

export default function Home() {
  return (
    <>
      <MainSection />
      <CustomersSection />
      <EquipamentsBenefits />
      <MotivationSection />
      <FormSection />

      <WhatsButton />
    </>
  )
}
