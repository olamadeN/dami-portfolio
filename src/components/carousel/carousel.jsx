import './carousel.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import slide1 from '../../img/carousel/slide1.png';
import slide2 from '../../img/carousel/slide2.png';
import slide3 from '../../img/carousel/slide3.png';
const HomeCarousel = () => {
    return ( 
        <div className="CarouselContainer">
            <h4 className='subHeading'>Latest Explorations</h4>
            <Carousel centerMode={true} dynamicHeight={false} centerSlidePercentage={30} showThumbs={false} showIndicators={false} showStatus={false} autoPlay={true} showArrows={false} infiniteLoop={true}>
                <div>
                    <img src={slide1} alt='slider 1' />
                </div>
                <div>
                    <img src={slide2} alt='slider 2' />                
                </div>
                <div>
                    <img src={slide3} alt='slider 3'/>                
                </div>
            </Carousel>
        </div>
        
    );
}
 
export default HomeCarousel;