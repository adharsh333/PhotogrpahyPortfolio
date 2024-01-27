"use client";
import React, { useState } from "react";
import Link from 'next/link';
import NavLink from "./NavLink"
import { Bars4Icon, XMarkIcon } from '@heroicons/react/24/solid';



const navlinks =[
    
    {
        title:"Home",
        path:"#home",
    },
    {
        title:"Services",
        path:"#services",
    },
    {
        title:"About",
        path:"#about",

    },
    {
        title:"Contact",
        path:"#contact",
    }
]

const Navbar = () => {
    const[navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav>
        <div className="flex flex-wrap items-center justify-between mx-auto p-8">
            <Link href={"/"} className= "text-xl md:text-5xl text-white font-semibold">Lama</Link>

            <div className="mobile-menu block md:hidden  ">
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
                <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8">
                    { navlinks.map((link,index) =>(
                        <li key={index}>
                            <NavLink href={link.path} title= {link.title}></NavLink>
                        
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    </nav>
  );
};

export default Navbar;