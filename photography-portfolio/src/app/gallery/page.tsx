import image1 from '../images/slide-9.jpg';
import Image from '../../../node_modules/next/image';
import PhotoGallery from '../components/PhotoGallery';
import image6 from '../images/panaroma-1.jpg';


const Gallery = () => {
    return(
<div>
            


         <div className='about'>
            <div className="about_container w-full">
                     <Image alt="picture" src={image6} />
                    
            </div>
            </div>
            <div className="px-48 py-32 z-10 ">
       <div className='grid grid-cols-2 '>
           <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold pb-10">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400  to-gray-300">    Gallery
               </span>
               </h1>

           
               </div>
               </div>
               <div className="grid grid-rows-3 gap-2 text-[#d1d5db] text-center backdrop-blur-xl px-48">
               <section className=" bg-gray-900 bg-opacity-65">
            <PhotoGallery/>
            </section>
</div>

           </div>
    )
}

export default Gallery;