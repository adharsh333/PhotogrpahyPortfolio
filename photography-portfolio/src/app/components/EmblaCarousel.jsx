"use client"
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import image1 from '../images/slide-1.jpg'
import image2 from '../images/slide-2.jpg'
import image3 from '../images/slide-3.jpg'
import image4 from '../images/slide-8.jpg'
import image5 from '../images/slide-5.jpg'

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel()

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
      <div className="embla__slide">
        <Image alt="picture" src={image1} />
        
        </div>
        <div className="embla__slide">
        <Image alt="picture" src={image2}/>
        
        </div>
        <div className="embla__slide">
        <Image alt="picture" src={image3}/>
        
        </div>
     
        <div className="embla__slide">
        <Image alt="picture" src={image4}/>
        
        </div>
        <div className="embla__slide">
        <Image alt="picture" src={image5} />
        
        </div>
      </div>
    </div>
  )
}
