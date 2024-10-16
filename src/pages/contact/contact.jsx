import './contact.css';
import workImg from '../../img/work/work.jpeg';
import { MdArrowOutward } from "react-icons/md"; 
import Fnav from '../../components/footerNav/fNav';
const Contact = () => {
    return ( 
        <div className="contact">
            <div className="container">
                <h3 className="contactHeadings">Calculator App - A UX Design Case Study</h3>
                <div className="bla">
                    <div className="tags contactTags">
                        <span className="workTag">Oct 2023 - Jan 2024</span>
                        <span className="workTag">UX Design,Ideation, Health</span>
                    </div>
                    <button className="button">View Prototype <MdArrowOutward size={12} /></button>
                </div>                
            </div>
            
            <div className="studyBanner">
                <img src={workImg} alt="work sample" id='studyBannerImg1' className="studyBannerImg" />
                <img src={workImg} alt="work sample" id='studyBannerImg2'className="studyBannerImg" />
            </div>
            <div className="pack">
                <div className="container contactBook">
                    <div className="scope">
                        <p className="contactSubHeading">Scope</p>
                        <p className="contactTxt">
                            Lorem ipsum dolor sit amet consectetur. Mollis sit non blandit in. Auctor proin urna eget integer. Amet condime ntum semper ipsum amet mattis facilisi cum. Pretium mattis lacus imperdiet varius sit arcu cursus.
                        </p>
                    </div>
                    <div className="intro">
                        <p className="contactSubHeading">Introduction</p>
                        <p className="contactTxt">
                            Lorem ipsum dolor sit amet consectetur. Mollis sit non blandit in. Auctor proin urna eget integer. Amet condime ntum semper ipsum amet mattis facilisi cum. Pretium mattis lacus imperdiet varius sit arcu cursus.Lorem ipsum dolor sit amet consectetur. Mollis sit non blandit in. Lorem ipsum dolor sit amet consectetur. Mollis sit non blandit in. Auctor proin urna eget integer. Amet condime ntum semper ipsum amet mattis facilisi cum. Pretium mattis lacus imperdiet varius sit arcu cursus.Lorem ipsum dolor sit amet consectetur.
                        </p>
                    </div>
                </div>
            </div>
            <br />
            <div className="pack">
                <div className="contactCon">
                    <img src={workImg} alt="work sample" />
                    <img src={workImg} alt="work sample" />
                </div>
            </div>
            <div className="pack">
                <div className="container">
                    <p className="contactSubHeading"> Header 2 </p>
                    <p className="contactTxt">
                        Lorem ipsum dolor sit amet consectetur. Mollis sit non blandit in. Auctor proin urna eget integer. Amet condime ntum semper ipsum amet mattis facilisi cum. Pretium mattis lacus imperdiet varius sit arcu cursus.Lorem ipsum dolor sit amet consectetur. Mollis sit non blandit in. Lorem ipsum dolor sit amet consectetur. Mollis sit non blandit in. Auctor proin urna eget integer. Amet condime ntum semper ipsum amet mattis facilisi cum. Pretium mattis lacus imperdiet varius sit arcu cursus.Lorem ipsum dolor sit amet consectetur.
                    </p>
                </div>
            </div>
            <div className="pack">
                <div className="container">
                    <img className='contactImg' src={workImg} alt="work sample" />
                </div>
            </div>
            <div className="pack">
                <div className="container">
                    <p className="contactSubHeading"> The Result </p>
                    <p className="contactTxt">
                        Lorem ipsum dolor sit amet consectetur. Mollis sit non blandit in. Auctor proin urna eget integer. Amet condime ntum semper ipsum amet mattis facilisi cum. Pretium mattis lacus imperdiet varius sit arcu cursus.Lorem ipsum dolor sit amet consectetur. Mollis sit non blandit in. Lorem ipsum dolor sit amet consectetur. Mollis sit non blandit in. Auctor proin urna eget integer. Amet condime ntum semper ipsum amet mattis facilisi cum. Pretium mattis lacus imperdiet varius sit arcu cursus.Lorem ipsum dolor sit amet consectetur.
                    </p>
                </div>
            </div>
            <div className="pack">
                <div className="container">
                    <img className='contactImg' src={workImg} alt="work sample" />
                </div>
            </div>
            <div className="pack">
                <div className="container">
                    <p className="aboutSubHead">
                    More Case Studies
                    </p>
                    <div className="contactBook">
                        <div className="more">
                            <p className="contactSubHeading">Project Title</p>
                            <p className="contactTxt">Lorem ipsum dolor sit amet consectetur. Mollis sit non blandit in. Auctor proin urna eget integer.</p>
                            <button className="cardBtn">Read Case Study</button>
                        </div>
                        <div className="more">
                            <p className="contactSubHeading">Project Title</p>
                            <p className="contactTxt">Lorem ipsum dolor sit amet consectetur. Mollis sit non blandit in. Auctor proin urna eget integer.</p>
                            <button className="cardBtn">Read Case Study</button>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br /><br />
            <Fnav />
        </div>
    );
}
 
export default Contact;