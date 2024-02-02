"use client"
import Navbar from '@/app/components/Navbar';
import React from 'react'
import Image1 from '../images/slide-6.jpg';
import image2 from '../images/slide-11.jpg';
import Image from 'next/image';

const Contact = () => {

    return(

<section>
            <div>
            <div className='about'>
            <div className="about_container">
                     <Image alt="picture" src={image2} width={2000} height={1400}/>
                </div>
           </div>
                <div className="col-span-5 px-48 py-32">    
                    <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400  to-gray-300">    Contact Me
                        </span>
                    </h1>
         
            <div className='grid grid-cols-2 grid-rows-1'>
       <div>
       <Image className="rounded-3xl"alt="picture" src={Image1} width={600}/>
       </div>
            <div className="container cols-auto backdrop-blur-3xl lg:bg-white/10 rounded-3xl">
            <form>
      <div className="email block">
        <label htmlFor="frm-email">Email</label>
        <input
          id="frm-email"
          type="email"
          name="email"
          autoComplete="email"
          required
        />
      </div>
      <div className="block phone">
        <label htmlFor="frm-phone">Phone</label>
        <input
          id="frm-phone"
          type="text"
          name="phone"
          autoComplete="tel"
          required
        />
      </div>
      <div className="message block">
        <label htmlFor="frm-message">Message</label>
        <textarea id="frm-message" rows="3" name="message"></textarea>
      </div>
      <div className="button block">
        <button type="submit">Submit</button>
      </div>
    </form>
    </div>
            </div>
            </div>
            </div>
        </section>

    )
}

export default Contact;