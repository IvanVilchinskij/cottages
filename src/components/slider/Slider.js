import { useState, useEffect, useRef } from "react"
import { slides } from './const'
import icons from '../../assets/icons.svg'

const Slider = () => {
  const [position, setPosition] = useState(-Math.floor(slides.length/2)*100 )
  const [isNextDisabled, setIsNextDisabled] = useState(false)
  const [isPrevDisabled, setIsPrevDisabled] = useState(false)
  const slider = useRef(null)

  useEffect(() => {
    if (position === -(slides.length - 1) * 100) {
      setIsNextDisabled(true)
    } else {
      setIsNextDisabled(false)
    }

    if (position === 0) {
      setIsPrevDisabled(true)
    } else {
      setIsPrevDisabled(false)
    }
  }, [position])

  const changePosition = (offset) => {
    setPosition(position + offset)
  }

  const slideItems = slides.map((slide, i) => {
    return (
      <div key={i} className="slider__item" style={{transform: `translate(${position}%, 0)`}}>
        <div className="slider__img-first">
          <img src={slide.image} alt="slide"/>
        </div>
        <div className="slider__img-second"> 
          <img src={slide.layout} alt="slide" />
        </div>
      </div>
    )
  })

  const onNextSlide = () => {
    if (position === -(slides.length - 1) * 100) return

    changePosition(-100)
    slider.current.childNodes.forEach(elem => {
      elem.style = `transform: translate(${position}%, 0)`
    })
  }

  const onPrevSlide = () => {
    if (position === 0)  return

    changePosition(100)
    slider.current.childNodes.forEach(elem => {
      elem.style = `transform: translate(${position}%, 0)`
    })
  }

  return (
    <div className="slider">
      <div className="slider__track" ref={slider}>
        {slideItems}
      </div>
      <button 
        className="slider__prev" 
        onClick={onPrevSlide}
        disabled={isPrevDisabled}
      >
        <svg>
          <use href={`${icons}#prev`}></use>
        </svg>
      </button>
      <button 
        className="slider__next" 
        onClick={onNextSlide}
        disabled={isNextDisabled}
      >
        <svg>
          <use href={`${icons}#next`}></use>
        </svg>
      </button>
    </div>
  )
}

export default Slider