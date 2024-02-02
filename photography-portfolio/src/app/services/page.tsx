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
                <div className='grid grid-rows-3'>
                <Card>
      <Image
        alt="Woman listing to music"
        className="serviceimage object-cover float-center hover:blur-lg" src={image2}
      />
      <h4 className="font-bold text-transparent absolute text-9xl bg-clip-text bg-gradient-to-r from-gray-200  to-gray-200 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">PHOTOGRAPHY</h4>    
</Card>

<Card>
      <Image
        alt="Woman listing to music"
        className="serviceimage object-cover float-center hover:blur-lg" src={image2}
      />
      <h4 className="font-bold text-transparent absolute text-9xl bg-clip-text bg-gradient-to-r from-gray-200  to-gray-200 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">VIDEOGRAPHY</h4>    
</Card>

<Card>
      <Image
        alt="Woman listing to music"
        className="serviceimage object-cover float-center hover:blur-lg" src={image2}
      />
      <h4 className="font-bold text-transparent absolute text-9xl bg-clip-text bg-gradient-to-r from-gray-200  to-gray-200 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">EDITING</h4>    
</Card>

    </div>
    </div>
             
            </div>
    )
}

export default Services;