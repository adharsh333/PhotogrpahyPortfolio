"use client"
import Navbar from '@/app/components/Navbar';
import React from 'react'

const Contact = () => {

    return(

<section>
            <div className="grid grid-cols-1 lg:grid-cols-12">
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
                </div>
            </div>
            <div>
                
            </div>

        </section>

    )
}

export default Contact;