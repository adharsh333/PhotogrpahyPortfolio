"use client";
import Image from 'next/image';
import React, { useState } from "react";
import LogoImage from '../images/Logo.png'

const Logo=()=> 
{
    return (
      <Image
        src={LogoImage}
        alt="Logo"
        width={100}
        height={100}
      />
    )
  }

  export default Logo;

