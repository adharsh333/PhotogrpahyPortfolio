"use client";
import Image from 'next/image';
import React, { useState } from "react";
import Link from 'next/link';
import NavLink from "./NavLink"
import { Bars4Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Logo from '../components/Logo';



const navlinks =[
    
    {
        title:"Home",
        path:"../",
    },
    {
        title:"Services",
        path:"../services",
    },
    {
        title:"Gallery",
        path:"../gallery",
    },
    {
        title:"About",
        path:"../about/",
    },
    {
        title:"Contact",
        path:"../contact",
    }
]

const Navbar = () => {
    const[navbarOpen, setNavbarOpen] = useState(false);
  return (
    <div>
        <div className="flex flex-wrap items-center justify-between mx-auto p-8">
            <Link href={"/"} className= "object-fill"><Logo/></Link>

            <div className="mobile-menu block md:hidden">
                {!navbarOpen ? (
                  <button 
                  onClick={()=> setNavbarOpen(true)} 
                  className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                  >
                    <Bars4Icon className="h-4 w-4"  />
                  </button>
                ):(
                    <button 
                    onClick={()=> setNavbarOpen(false)} 
                    className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                    >
                      <XMarkIcon className="h-4 w-4" />
                    </button>
                )
                }
            </div>
  
            <div className="menu hidden md:block md:w-auto" id="navbar">
            <div className=''>
                <ul className="flex p-4 md:px-16 md:py-5 md:flex-row md:space-x-8">
        
                    {navlinks.map((link,index) =>(
                        <li key={index}>
                            <NavLink href={link.path} title= {link.title}></NavLink>
                        
                        </li>
                    ))}

                </ul>
           </div>
            </div>

        </div>
    </div>
  );
};

export default Navbar;