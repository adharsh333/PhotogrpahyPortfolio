import image1 from '../images/slide-9.jpg';
import Image from '../../../node_modules/next/image';
import PhotoGallery from '../components/PhotoGallery';
import image6 from '../images/panaroma-6.jpg';


const Gallery = () => {
    return(
<div>
            


         <div className='about'>
            <div className="about_container w-full">
                     <Image alt="picture" src={image6} />
                    
            </div>
            </div>
            <div className="px-48 z-10">
            <PhotoGallery/>
</div>

           </div>
    )
}

export default Gallery;