import InstagramIcon from './InstagramIcon';
import FacebookIcon from './FacebookIcon';
import YoutubeIcon from './YoutubeIcon';


const Socialbar = () => {
    return(
        <div className="fixed object-center py-20 top-20 bg right-0 z-50 p-5 ">
            <ul className="space-y-2">
                <InstagramIcon />
                <FacebookIcon />
                <YoutubeIcon />
            </ul>
        </div>
    );
};

export default Socialbar;

