'use-client'
import image1 from '../images/slide-11.jpg';
import Image from '../../../node_modules/next/image';


const Services = () => {
    return(
<div className='about'>
            <div className="about_container">
                     <Image alt="picture" src={image1} width={2000} height={1400}/>
                </div>
           </div>
    )
}

export default Services;