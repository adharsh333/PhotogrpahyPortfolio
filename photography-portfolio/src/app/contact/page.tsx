"use client"
import Navbar from '@/app/components/Navbar';
import React from 'react'
import Image1 from '../images/slide-6.jpg';
import image2 from '../images/slide-11.jpg';
import Image from 'next/image';
import image6 from '../images/panaroma-4.jpg';

const Contact = () => {

    return(

<section>
            <div>
            <div className='about'>
            <div className="about_container">
              
                     <Image alt="picture" src={image6} />
                </div>
           </div>
                <div className="col-span-5 px-48 py-32">    
                    <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400  to-gray-300">    Contact Me
                        </span>
                    </h1>
         
            <div className='grid grid-cols-2 grid-rows-1'>
       <div>
       <Image className=""alt="picture" src={Image1} width={600}/>
       </div>
            <div className="container cols-auto backdrop-blur-3xl lg:bg-white/10">
           
    </div>
            </div>
            </div>
            </div>
        </section>

    )
}

export default Contact;