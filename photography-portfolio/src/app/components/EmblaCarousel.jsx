"use client"
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import image1 from '../images/slide-1.jpg'
export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel()

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
            <img src='https://images.freeimages.com/images/large-previews/8b0/lake-1332261.jpg'/>
        </div>
        <div className="embla__slide">
        <img src='https://images.freeimages.com/images/large-previews/8b0/lake-1332261.jpg'/>
        
        </div>
        <div className="embla__slide">
        <img src='https://images.freeimages.com/images/large-previews/8b0/lake-1332261.jpg'/>
        
        </div>
      </div>
    </div>
  )
}
