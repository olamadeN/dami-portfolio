import './carousel.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import slide1 from '../../img/carousel/slider1.png';
import slide2 from '../../img/carousel/slider2.png';
import slide3 from '../../img/carousel/slider3.png';
import slide4 from '../../img/carousel/slider2.png';
import slide5 from '../../img/carousel/slider3.png';
const HomeCarousel = () => {
    return ( 
        <div className="CarouselContainer">
            <h4 className='subHeading'>Latest Explorations</h4>
            <Carousel centerMode={true} dynamicHeight={false} centerSlidePercentage={48} showThumbs={false} showIndicators={false} showStatus={false} autoPlay={true} showArrows={true} infiniteLoop={true}>
                <div>
                    <img src={slide1} alt='slider 1' />
                </div>
                <div>
                    <img src={slide2} alt='slider 2' />                
                </div>
                <div>
                    <img src={slide3} alt='slider 3'/>
                </div>              
                <div>
                    <img src={slide4} alt='slider 4' />                
                </div>
                <div>
                    <img src={slide5} alt='slider 5'/>                
                </div>
            </Carousel>
        </div>
        
    );
}
 
export default HomeCarousel;