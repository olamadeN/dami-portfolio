import './work.css';
import workImg from '../../img/work/work.jpeg';
import { MdArrowOutward } from "react-icons/md"; 
import Fnav from '../../components/footerNav/fNav';
const Work = () => {
    return ( 
        <>
            <div className='container work'>
                <h3 className="pack pageHeadings">Projects</h3>
                <div className="pack workBanner">
                    <img src={workImg} alt="work banner" />
                    <div className="workBannerTxt">
                        <h6 className='aboutExp'>Calculator App - A UX Design Case Study</h6>
                        <p className='workDescription'>Bridging the recycling gap in Nigeria with a mobile app that promotes recycling and addresses waste management challenges. 
                        Bridging the recycling gap in Nigeria with a mobile app that promotes recycling and addresses waste management challenges.</p>
                        <div className="tags">
                            <span className="workTag">Oct 2023 - Jan 2024</span>
                            <span className="workTag">UX Design,Ideation, Health</span>
                        </div>
                        <button className="cardBtn">Read Case Study <MdArrowOutward size={20} /></button>
                    </div>
                </div>
                <div className="pack workCard">
                    <div className="workCardTxt">
                        <h6 className='aboutExp'>Calculator App - A UX Design Case Study</h6>
                        <p className="cardTxt">Bridging the recycling gap in Nigeria with a mobile app that promotes recycling and addresses waste management challenges.</p>
                        <div className="tags">
                            <span className="workTag">Oct 2023 - Jan 2024</span>
                            <span className="workTag">UX Design,Ideation, Health</span>
                        </div>
                        <button className="cardBtn">Read Case Study <MdArrowOutward size={20} /></button>
                    </div>
                    <img src={workImg} alt="" className="workCardImg" />
                </div>
                <div className="pack workCard">
                    <div className="workCardTxt">
                        <h6 className='aboutExp'>Calculator App - A UX Design Case Study</h6>
                        <p className="cardTxt">Bridging the recycling gap in Nigeria with a mobile app that promotes recycling and addresses waste management challenges.</p>
                        <div className="tags">
                            <span className="workTag">Oct 2023 - Jan 2024</span>
                            <span className="workTag">UX Design,Ideation, Health</span>
                        </div>
                        <button className="cardBtn">Read Case Study <MdArrowOutward size={20} /></button>
                    </div>
                    <img src={workImg} alt="" className="workCardImg" />
                </div>
                <div className="pack workCard">
                    <div className="workCardTxt">
                        <h6 className='aboutExp'>Calculator App - A UX Design Case Study</h6>
                        <p className="cardTxt">Bridging the recycling gap in Nigeria with a mobile app that promotes recycling and addresses waste management challenges.</p>
                        <div className="tags">
                            <span className="workTag">Oct 2023 - Jan 2024</span>
                            <span className="workTag">UX Design,Ideation, Health</span>
                        </div>
                        <button className="cardBtn">Read Case Study <MdArrowOutward size={20} /></button>
                    </div>
                    <img src={workImg} alt="" className="workCardImg" />
                </div>
            </div>
            <Fnav />
        </>
        
    );
}
 
export default Work;