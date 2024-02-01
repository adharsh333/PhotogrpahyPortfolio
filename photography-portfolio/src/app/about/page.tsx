"use client"
import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import Navbar from "@/app/components/Navbar";
import image1 from '../images/slide-6.jpg';
import image2 from '../images/slide-7.jpg';
import image3 from '../images/MainLogo.png';
import image4 from '../images/slide-10.jpg';
import image5 from '../images/slide-11.jpg';
import Image from '../../../node_modules/next/image';

const About = () => {
    return(
        <div>
        <div className="section-border">
                     <div className="section-background">  
                     <Image alt="picture" src={image5} fill/>
                </div>
           </div>
        <div className="px-48 py-32 z-10">
                     
        <div className='grid grid-cols-2'>
            <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400  to-gray-300">    About
                </span>
                </h1>

            <div className="col-auto text-[#ADB7BE] py-0 px-48">
                    <TypeAnimation
                        sequence={[
                            
                            'Artist Behind The Lens',
                            1000,
                            '',1000,
                            
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{ fontSize: '2em', display: 'inline-block' }}
                        repeat={Infinity}
                    />
                </div>
                </div>
            <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-1">
            
                   
                <div className='col-span-2'>
                Welcome to Llama's world of timeless wedding photography! I am thrilled to be part of your journey, capturing the most precious moments on one of the most significant days of your life.   
                    
                   
                    <h1 className='pb-8'>
                            I'm Namgyal Lama, a passionate wedding photographer with a keen eye for detail and a heart that beats for storytelling through visuals. Photography, for me, is not just about clicking pictures; it's about freezing moments in time, turning them into everlasting memories that you can cherish forever.
                    </h1>
                </div>
               <div className='col-auto flex items-center justify-center'>
               <Image alt="picture" src={image3} width={200} height={250} loading='lazy'/>
               </div>
            </div>
            <div className="imagecontainer">
                    <Image alt="picture" src={image2} width={600} height={350} layout="responsive" placeholder="blur"/>
                    <Image alt="picture" src={image1} width={600} height={350} layout="responsive" placeholder="blur" loading='lazy'/>
                    <Image alt="picture" src={image4} width={600} height={350} layout="responsive" placeholder="blur" />
                  </div>
        </div>   
        </div>   
    )
}

export default About;