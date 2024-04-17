import CustomersSection from '@/components/HomeSections/Customers'
import EquipamentsBenefits from '@/components/HomeSections/EquipamentBenefits'
import FormSection from '@/components/HomeSections/FormSection'
import MainSection from '@/components/HomeSections/MainSection'
import MotivationSection from '@/components/HomeSections/MotivationSection'
import WhatsButton from '@/components/WhatsButton'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useCallback, useEffect, useRef, useState } from 'react'

export default function Home() {
  const ref = useRef(null)

  useEffect(() => {
    console.log(ref.current)
  }, [])

  return (
    <>
      <Parallax
        ref={ref}
        pages={5}
        style={{
          backgroundImage:
            'radial-gradient(circle at 50% 130%, #827a58 4%, rgba(0, 0, 0, 1) 50%)',
        }}
      >
        <ParallaxLayer offset={0}>
          <MainSection />
        </ParallaxLayer>
        <ParallaxLayer offset={1}>
          <CustomersSection />
        </ParallaxLayer>
        <ParallaxLayer offset={2}>
          <EquipamentsBenefits />
        </ParallaxLayer>
        <ParallaxLayer offset={3}>
          <MotivationSection />
        </ParallaxLayer>
        <ParallaxLayer offset={4}>
          <FormSection />
        </ParallaxLayer>
      </Parallax>
      <WhatsButton />
    </>
  )
}
