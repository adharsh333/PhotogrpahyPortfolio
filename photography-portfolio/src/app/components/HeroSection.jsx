"use client"
import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
    return(
        <section>
            
            <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="col-span-7 place-self-center">    
                    <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500  to-white">    Photography Portfolio
                        </span>
                    </h1>

                    <p className="text-[#ADB7BE] text-lg lg:text">
                        How is this looking?
                    </p>
                </div>
                <div className="col-span-5 px-8">
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Photography',
                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                            'Videography',
                            1000,
                            'Editing',
                            1000,
                            'More',
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{ fontSize: '2em', display: 'inline-block' }}
                        repeat={Infinity}
                    />
                </div>
            </div>
            <div>
                
            </div>

        </section>
    )
};
export default HeroSection;