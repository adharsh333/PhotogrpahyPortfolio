"use client"
import React from 'react'
import {Card, CardHeader, CardBody, CardFooter, Button} from "@nextui-org/react";
import Image from '../../../node_modules/next/image';
import { TypeAnimation } from 'react-type-animation';
import image3 from '../images/slide-5.jpg';
import image4 from '../images/slide-2.jpg';
import image5 from '../images/slide-6.jpg';
import image6 from '../images/slide-3.jpg';

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
                  <div className='pt-48'>
                    <div className='pt-36'>
                    This is where absolute ends
                    </div>
                  </div>
<div className='pt-8'>
<section className=" bg-gray-900 bg-opacity-65">
<Card className="card hover:scale-105">
<a className="absolute inset-0 z-10 backdrop-blur-0 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100  hover:backdrop-blur-3xl duration-200">
      <h1  className=" tracking-wider font-bold text-transparent absolute text-6xl bg-clip-text bg-gradient-to-r from-gray-400  to-gray-400 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" >See More</h1>
        </a>

   

        <Image
        alt="Woman listing to music"
        className="object-cover float-center p-6" src={image3}  objectFit="cover" layout="fill"
      />
       <p className='text-transparent absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <h4 className="font-bold  text-6xl bg-clip-text bg-gradient-to-r from-gray-200  to-gray-200 ">Gallery        </h4>    
       </p>


  </Card>
  </section>
  <div className='fixed'>
  <Image
        alt="Woman listing to music"
        className="object-cover float-center p-6" src={image6}  objectFit="cover" layout="fill"
      />
  </div>
  <section className=" bg-gray-900 bg-opacity-65">
<Card className="card hover:scale-105">

    <a className="absolute inset-0 z-10 backdrop-blur-0 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100  hover:backdrop-blur-3xl duration-200">
      <h1  className=" tracking-wider font-bold text-transparent absolute text-6xl bg-clip-text bg-gradient-to-r from-gray-400  to-gray-400 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" >See More</h1>
        </a>
   

        <Image
        alt="Woman listing to music"
        className="object-cover float-center p-6" src={image4}  objectFit="cover" layout="fill"
      />
        <h4 className="font-bold text-transparent absolute text-6xl bg-clip-text bg-gradient-to-r from-gray-200  to-gray-200 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Services</h4>    

   


  </Card>
  </section>
  <section className=" bg-gray-900 bg-opacity-65">
<Card className="card hover:scale-105">

<a className="absolute inset-0 z-10 backdrop-blur-0 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100  hover:backdrop-blur-3xl duration-200">
      <h1  className=" tracking-wider font-bold text-transparent absolute text-6xl bg-clip-text bg-gradient-to-r from-gray-400  to-gray-400 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" >See More</h1>
        </a>
   

        <Image
        alt="Woman listing to music"
        className="object-cover float-center p-6" src={image5}  objectFit="cover" layout="fill"
      />
        <h4 className="font-bold text-transparent absolute text-6xl bg-clip-text bg-gradient-to-r from-gray-200  to-gray-200 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">About</h4>    

   


  </Card>
  </section>
  </div>
        </section>
    )
};
export default HeroSection;