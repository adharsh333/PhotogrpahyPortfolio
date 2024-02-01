import image1 from '../images/slide-9.jpg';
import Image from '../../../node_modules/next/image';
import PhotoGallery from '../components/PhotoGallery';

const Gallery = () => {
    return(
<div>
            


                <div className="section-border">
                     <div className="section-background">    
                        <Image alt="" src={image1} fill>
                        </Image>
                        <div className="section-background-overlay">

                        </div>
                </div>
            </div>

            <PhotoGallery/>


           </div>
    )
}

export default Gallery;