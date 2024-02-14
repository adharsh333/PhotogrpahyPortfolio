"use client"
import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import Navbar from "@/app/components/Navbar";
import image1 from '../images/slide-6.jpg';
import image2 from '../images/slide-7.jpg';
import image3 from '../images/MainLogo.png';
import image4 from '../images/slide-10.jpg';
import image5 from '../images/slide-11.jpg';
import image6 from '../images/panaroma-4.jpg';
import Image from '../../../node_modules/next/image';
import { FormEvent } from 'react';

const About = () => {
    return(
        <div>
         <div className='about'>
            <div className="about_container w-full opacity-75">
                     <Image alt="picture" src={image6} />
                    
            </div>
            </div>
            
        <div className="px-48 pt-32 z-10 ">
        <div className='grid grid-cols-2 '>
            <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400  to-gray-300">    About
                </span>
                </h1>

            <div className="col-auto text-[#d1d5db] py-24 px-48 text-center">
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
                </div>
                <div className='px-48 pt-12 backdrop-blur-xl'>
            <div className="grid grid-cols-4 ">
                <div className='col-span-2'>
                
               <h1 className='pb-8 '>
                Welcome to Llama's world of timeless wedding photography! I am thrilled to be part of your journey, capturing the most precious moments on one of the most significant days of your life.   
                    <br></br>
                   <br></br>
                   
                            I'm Namgyal Lama, a passionate wedding photographer with a keen eye for detail and a heart that beats for storytelling through visuals. Photography, for me, is not just about clicking pictures; it's about freezing moments in time, turning them into everlasting memories that you can cherish forever.
                    </h1>
                    
                    
                </div>
                <div className=' flex item-center justify-center col-span-2'>
               <Image alt="picture" src={image3} width={200} height={250} loading='lazy'/>
               </div>
               
            </div>
       
            <div className="imagecontainer">
               
                    <Image alt="picture" src={image2} width={600} height={350} layout="responsive" placeholder="blur"/>
                    <Image alt="picture" src={image1} width={600} height={350} layout="responsive" placeholder="blur" loading='lazy'/>
                    <Image alt="picture" src={image4} width={600} height={350} layout="responsive" placeholder="blur" />
                    
                  </div>
                 
                  <div className='pt-16'>
            
            <section className="bg-gray-900 bg-opacity-65">
  <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
      <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl"> Want to send feedback about an recent event? Need details about our Event plan? Let us know.</p>
      <form action="#" className="space-y-8">
          <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
              <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@gmail.com" required>
          </input>
          </div>
          <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
              <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required>
          </input>
          </div>
          <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
              <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-gray-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
      </form>
  </div>
</section>
   
    </div>
    </div>
        </div> 
   
         
    )
}

export default About;