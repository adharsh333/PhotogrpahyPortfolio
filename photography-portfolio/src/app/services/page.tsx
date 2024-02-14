'use-client'
"use client"
import {Card, CardHeader, CardBody, CardFooter, Button} from "@nextui-org/react";
import { TypeAnimation } from 'react-type-animation';
import Image from '../../../node_modules/next/image';
import image2 from '../images/slide-4.jpg';
import image3 from '../images/slide-7.jpg';
import image4 from '../images/slide-11.jpg';
import {Camera} from 'react-feather';
import image6 from '../images/panaroma-4.jpg';

const Services = () => {
    return(
        <div>
        <div className='about'>
           <div className="about_container w-full">
                    <Image alt="picture" src={image6} />
                   
           </div>
           </div>
           
       <div className="px-48 py-32 z-10 ">
       <div className='grid grid-cols-2 '>
           <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold pb-10">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400  to-gray-300">    Services
               </span>
               </h1>

           
               </div>
               </div>
               <div className="grid grid-rows-3 gap-2 text-[#d1d5db] text-center backdrop-blur-xl px-48">


<section className="grid grid-cols-3 m-2 bg-gray-900 bg-opacity-65">
<Card className="card hover:scale-105">

        <Image
        alt="Woman listing to music"
        className="object-center float-center p-6" src={image2}  objectFit="cover" layout="fill"
      />
        <h4 className="font-bold text-transparent absolute text-6xl bg-clip-text bg-gradient-to-r from-gray-200  to-gray-200 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">PHOTOGRAPHY</h4>    
  </Card>
  <div className="relative col-span-2 ">
        <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-3xl">Investment & Pricing</h1>
        <br></br>
        Portrait Session:
Description: A personalized portrait session lasting up to 1 hour at the location of your choice.
Includes: 15 high-resolution edited photos.
Price: $250
<br></br>
Wedding Package:

Description: Comprehensive coverage of your special day, including ceremony, reception, and portraits.
Includes: Up to 8 hours of photography, 200+ high-resolution edited photos, online gallery.
Price: $2000
<br></br>
Event Coverage:

Description: Photography coverage for corporate events, parties, and celebrations.
Includes: Flexible hourly rates, minimum booking of 2 hours.
Price: $150/hour
         </p>
    </div>
  </section>
  <section className="grid grid-cols-3 m-2 bg-gray-900 bg-opacity-65">
    <div className="relative col-span-2 ">
        <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-3xl">Investment & Pricing</h1>
        <br></br>
        Portrait Session:

Description: A personalized portrait session lasting up to 1 hour at the location of your choice.
Includes: 15 high-resolution edited photos.
Price: $250
<br></br>
Wedding Package:

Description: Comprehensive coverage of your special day, including ceremony, reception, and portraits.
Includes: Up to 8 hours of photography, 200+ high-resolution edited photos, online gallery.
Price: $2000
<br></br>
Event Coverage:

Description: Photography coverage for corporate events, parties, and celebrations.
Includes: Flexible hourly rates, minimum booking of 2 hours.
Price: $150/hour
         </p>
    </div>
<Card className="card hover:scale-105">

    <a className="absolute inset-0 z-10 backdrop-blur-0 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100  hover:backdrop-blur-3xl duration-200">
      <h1  className=" tracking-wider font-bold text-transparent absolute text-6xl bg-clip-text bg-gradient-to-r from-gray-400  to-gray-400 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" >Title</h1>
      <p  className=" top-3/4 mx-auto font-bold text-transparent absolute  bg-clip-text bg-gradient-to-r from-gray-400  to-gray-400">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
      </a>
   

        <Image
        alt="Woman listing to music"
        className="object-cover float-center p-6" src={image3}  objectFit="cover" layout="fill"
      />
        <h4 className="font-bold text-transparent absolute text-6xl bg-clip-text bg-gradient-to-r from-gray-200  to-gray-200 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">VIDEOGRAPHY</h4>    

   


  </Card>
  </section>
<section className="grid grid-cols-3 m-2 bg-gray-900 bg-opacity-65">
<Card className="card hover:scale-105">

        <Image
        alt="Woman listing to music"
        className="object-center float-center p-6" src={image2}  objectFit="cover" layout="fill"
      />
        <h4 className="font-bold text-transparent absolute text-6xl bg-clip-text bg-gradient-to-r from-gray-200  to-gray-200 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">EDITING</h4>    
  </Card>
  <div className="relative col-span-2 ">
        <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <h1 className="text-3xl">Investment & Pricing</h1>
            <br></br>
            Portrait Session:

Description: A personalized portrait session lasting up to 1 hour at the location of your choice.
Includes: 15 high-resolution edited photos.
Price: $250
<br></br>
Wedding Package:

Description: Comprehensive coverage of your special day, including ceremony, reception, and portraits.
Includes: Up to 8 hours of photography, 200+ high-resolution edited photos, online gallery.
Price: $2000
<br></br>
Event Coverage:

Description: Photography coverage for corporate events, parties, and celebrations.
Includes: Flexible hourly rates, minimum booking of 2 hours.
Price: $150/hour
         </p>
    </div>
  </section>
    </div>
</div>


    )
}

export default Services;