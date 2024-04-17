import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { Cards, Container2 } from './styles'
import Image, { StaticImageData } from 'next/image'

interface SliderProps {
  images: {
    id: string
    img: StaticImageData
  }[]
}

function Slider({ images }: SliderProps) {
  function Arrow(props: { left?: boolean; onClick: (e: any) => void }) {
    return (
      <svg
        onClick={props.onClick}
        className={`arrow ${props.left ? 'arrow--left' : 'arrow--right'}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        {props.left && (
          <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        )}
        {!props.left && (
          <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
        )}
      </svg>
    )
  }

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 3,
      spacing: 15,
    },
    breakpoints: {
      '(max-width: 1024px)': {
        slides: { perView: 3, spacing: 5 },
      },
      '(max-width: 768px)': {
        slides: { perView: 1, spacing: 3, origin: 'center' },
      },
      '(min-width: 1024px)': {
        slides: { perView: 3, spacing: 12 },
      },
    },
  })

  return (
    <Container2>
      <Cards ref={sliderRef} className="keen-slider">
        {images.map((item) => (
          <Image key={item.id} src={item.img} alt="" width={200} />
        ))}
      </Cards>
      <>
        <Arrow
          left
          onClick={(e) => {
            return e.stopPropagation() || instanceRef.current?.prev()
          }}
        />

        <Arrow
          onClick={(e) => {
            return e.stopPropagation() || instanceRef.current?.next()
          }}
        />
      </>
    </Container2>
  )
}

export default Slider
