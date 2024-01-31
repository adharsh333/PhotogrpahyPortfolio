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
        <Image alt="picture" src={image1} style ={{maxWidth: '100', height: 'auto',}}layout="responsive"/>
        
        </div>
        <div className="embla__slide">
        <Image alt="picture" src={image2} style ={{maxWidth: '100', height: 'auto',}}layout="responsive"/>
        
        </div>
        <div className="embla__slide">
        <Image alt="picture" src={image3} style ={{maxWidth: '100', height: 'auto',}}layout="responsive"/>
        
        </div>
     
        <div className="embla__slide">
        <Image alt="picture" src={image4} style ={{maxWidth: '100', height: 'auto',}}layout="responsive"/>
        
        </div>
        <div className="embla__slide">
        <Image alt="picture" src={image5} style ={{maxWidth: '100', height: 'auto',}}layout="responsive"/>
        
        </div>
      </div>
    </div>
  )
}
