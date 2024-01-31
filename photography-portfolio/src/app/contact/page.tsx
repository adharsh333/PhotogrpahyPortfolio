"use client"
import Navbar from '@/app/components/Navbar';
import React from 'react'
import Image1 from '../images/slide-9.jpg';
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
            <div className='col-auto py-16'>
            <Image alt="picture" src={Image1} width={600} height={350} layout="responsive" loading='lazy'/>
            </div>
            <form className="container col-auto">
                <h1>Get In Touch !!!</h1>
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
      <div className="name block">
        <div>
          <label htmlFor="frm-first">First Name</label>
          <input
            id="frm-first"
            type="text"
            name="first"
            autoComplete="given-name"
            required
          />
        </div>
        <div>
          <label htmlFor="frm-last">Last Name</label>
          <input
            id="frm-last"
            type="text"
            name="last"
            autoComplete="family-name"
            required
          />
        </div>
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
        </section>

    )
}

export default Contact;