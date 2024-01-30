"use client"
import React from 'react'
import Navbar from "@/app/components/Navbar";
import image1 from '../images/slide-1.jpg';
import Image from '../../../node_modules/next/image';

const About = () => {
    return(
        
        <div className="px-48 py-32 z-10"> 
            <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400  to-gray-300">    About
                </span>
            </h1>
            <div className="grid grid-cols-2">
                <div className="col-auto">
                    <Image alt="picture" src={image1} style ={{maxWidth:500, height: 350,}}/>
                  </div>
                   
                <div className='py-24'>
                Welcome to Llama's world of timeless wedding photography! I am thrilled to be part of your journey, capturing the most precious moments on one of the most significant days of your life.   
                    <h1 className="text-white mb-4 text-4xl lg:text-2xl font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400  to-gray-400">    The Artist Behing the Lens
                        </span>
                    </h1>
                    <h1>
                            I'm Namgyal Lama, a passionate wedding photographer with a keen eye for detail and a heart that beats for storytelling through visuals. Photography, for me, is not just about clicking pictures; it's about freezing moments in time, turning them into everlasting memories that you can cherish forever.
                    </h1>
                </div>
            </div>
        </div>
                                       
    )
}

export default About;