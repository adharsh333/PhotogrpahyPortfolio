import React from 'react';
import { SocialIcon } from 'react-social-icons/component';
import 'react-social-icons/youtube';
import 'react-social-icons/instagram';
import 'react-social-icons/facebook';
import InstagramIcon from '../components/InstagramIcon';
import FacebookIcon from '../components/FacebookIcon';
import YoutubeIcon from '../components/YoutubeIcon';
import TwitterIcon from '../components/TwitterIcon';

/*
const Socialmedia=()=>{
return(
    <div className="relative h-32 w-32">
 <div className="fixed z-10 right-2 w-12 h-screen flex flex-col item-center justify-center">
<SocialIcon bgColor="black" fgColor="white" url="https://youtube.com" />
<SocialIcon bgColor="black" fgColor="white" url="https://facebook.com" />
<SocialIcon bgColor="black" fgColor="white" url="https://instagram.com" />
</div>
</div>
)
}

*/
const Socialmedia=()=>{
    return(
<div className="social-ico-block">

<InstagramIcon/>
<FacebookIcon/>
<YoutubeIcon/>

</div>




)
}
export default Socialmedia;