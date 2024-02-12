"use client"
import React from 'react'
import {Card, CardHeader, CardBody, CardFooter, Button} from "@nextui-org/react";
import Image from '../../../node_modules/next/image';
import { TypeAnimation } from 'react-type-animation';
import image2 from '../images/slide-4.jpg';

const HeroSection = () => {
    return(
        <section>
            <div className="grid grid-cols-1 grid-rows-2 lg:grid-cols-12">
                <div className="col-span-5 px-48 py-32">    
                    <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400  to-gray-300">    LLama Studio
                        </span>
                    </h1>

                    <p className="text-[#ADB7BE] text-lg lg:text">
                        Preserve Your Memories
                    </p>
                </div>
                <div className="col-span-8 text-[#ADB7BE] py-0 px-48">
                    <TypeAnimation
                        sequence={[
                            'Videography',
                            1000,
                            'Photography',
                            1000,
                            'Editing',
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{ fontSize: '2em', display: 'inline-block' }}
                        repeat={Infinity}
                    />
                </div>
                  </div>

        </section>
    )
};
export default HeroSection;