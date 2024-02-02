'use-client'
"use client"
import {Card, CardHeader, CardBody, CardFooter, Button} from "@nextui-org/react";
import image1 from '../images/slide-11.jpg';
import Image from '../../../node_modules/next/image';
import image2 from '../images/slide-4.jpg';
import image3 from '../images/slide-7.jpg';
import image4 from '../images/slide-8.jpg';
import {Camera} from 'react-feather';

const list = [
    {
      title: "Photography",
      path: image3,
    },
    {
      title: "Videography",
      path: image4,
    },
    {
      title: "Editing",
      path: image1,
    },
];
const Services = () => {
    return(
        <div>
        <div className='about'>
            <div className="about_container">
                     <Image alt="picture" src={image1} width={2000} height={1400}/>
                    
            </div>
            </div>


    <div className="px-48 py-32 z-10">
                <div className='grid grid-rows-3 gap-8 '>
                <div className="backdrop-blur-3xl lg:bg-white/30 px-8 py-6 rounded-3xl hover:blur-lg">
      <Image
        alt="Woman listing to music"
        className="object-cover rounded-xl float-center"
        height={1000}
        src={image2}
        width={1000}
      />
      <h4 className="font-bold text-transparent absolute text-9xl bg-clip-text bg-gradient-to-r from-gray-200  to-gray-200 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">PHOTOGRPAHY</h4>    
</div>
<div className="backdrop-blur-3xl bg-white/30 px-8 py-6 rounded-3xl hover:blur-lg">
      <div>
      <Image
        alt="Woman listing to music"
        className="object-cover rounded-xl float-right"
        height={500}
        src={image2}
        width={1000}
      />
    <h4 className="font-bold text-transparent absolute text-9xl bg-clip-text bg-gradient-to-r from-gray-200  to-gray-200 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">VIDEOGRAPHY</h4>
      </div>
</div>
<div className="backdrop-blur-3xl bg-white/60 px-8 py-6 rounded-3xl hover:blur-lg">
      <div>
      <Image
        alt="Woman listing to music"
        className="object-cover rounded-xl float-left"
        height={1000}
        src={image2}
        width={1000}
      />
     <h4 className="font-bold text-transparent absolute text-9xl bg-clip-text bg-gradient-to-r from-gray-200  to-gray-200 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">EDITING</h4>
        </div>
</div>
    </div>
    </div>
             
            </div>
    )
}

export default Services;