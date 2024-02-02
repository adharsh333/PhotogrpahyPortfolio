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
                <div className='grid grid-rows-3 gap-8'>
                <div className="backdrop-blur-3xl lg:bg-white/30 py-6 rounded-3xl">
    <Card
      isFooterBlurred
      radius="lg"
      className="border-solid border-rounded-lg px-8 hover:blur-lg"
    >
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        
      </CardHeader>
      <div>
      <Image
        alt="Woman listing to music"
        className="object-cover rounded-xl float-left"
        height={500}
        src={image2}
        width={1000}
      />
      <h4 className="font-bold text-transparent absolute text-9xl bg-clip-text bg-gradient-to-r from-gray-200  to-gray-200 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">PHOTOGRPAHY</h4>
       </div>
      <CardFooter className="before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny text-white/80">### Photography</p>
        <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
         <Camera/>
        </Button>
      </CardFooter>
    </Card>
</div>
<div className="backdrop-blur-3xl bg-white/30 rounded-3xl">
    <Card
      isFooterBlurred
      radius="lg"
      className="border-solid border-rounded-lg px-8 hover:blur-lg"
    >
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
      </CardHeader>
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
      <CardFooter className="before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny text-white/80">### Photography</p>
        <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
         <Camera/>
        </Button>
      </CardFooter>
    </Card>
</div>
<div className="backdrop-blur-3xl bg-white/60 rounded-3xl">
    <Card
      isFooterBlurred
      radius="lg"
      className="border-solid border-rounded-lg px-8 hover:blur-lg"
    >
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
      </CardHeader>
      <div>
      <Image
        alt="Woman listing to music"
        className="object-cover rounded-xl float-left"
        height={500}
        src={image2}
        width={1000}
      />
     <h4 className="font-bold text-transparent absolute text-9xl bg-clip-text bg-gradient-to-r from-gray-200  to-gray-200 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">EDITING</h4>
        </div>
      <CardFooter className="before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny text-white/80">### Photography</p>
        <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
         <Camera/>
        </Button>
      </CardFooter>
    </Card>
</div>
    </div>
    </div>
             
            </div>
    )
}

export default Services;