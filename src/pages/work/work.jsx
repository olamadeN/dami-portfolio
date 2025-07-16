import './work.css';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdArrowOutward } from "react-icons/md"; 
import Fnav from '../../components/footerNav/fNav';
import { Helmet } from 'react-helmet-async';
const Work = () => {
    const navigate = useNavigate();
    const [data, setData] = useState(null)
    useEffect(()=> {
        (data === null) ? (
            fetch('/data/caseStudies.json')
            .then(response => response.json())
            .then(data=>setData(data))            
        ): console.log("already fetched");
    })
  // Handler to go to the details page
    const goToDetails = (id, title) => {
        navigate(`/project/${title}`, { state: { id } });
    };

    return ( 
        <>
            <Helmet>
                <title>Damilola's Portfolio | UI/UX Designer</title>
                <meta name="description" content="Explore Damilola's portfolio showcasing a collection of innovative UI/UX designs, user-centered solutions, and previous design projects." />
                <meta name="keywords" content="web development, UI/UX Designer, User Experience, User Interface, Web Design, Digital Design, Interaction Design," />
                <meta name="author" content="GMTDevs" />
            </Helmet>
            <div className='container work'>
                <h3 data-aos="fade-down" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-delay="200" data-aos-duration="600" className="pack pageHeadings">Projects</h3>
                <div data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-delay="200" data-aos-duration="600" className="pack workBanner">
                    <img src={(data != null )?data.caseStudy[0].thumb: undefined } alt="work banner" />
                    <div className="workBannerTxt">
                        <h6 className='aboutExp'>{(data != null )&&data.caseStudy[0].title}</h6>
                        <p className='workDescription'>{(data != null )&&data.caseStudy[0].caption}</p>
                        <div className="tags">
                            <span className="workTag">{(data != null )&&data.caseStudy[0].date}</span>
                            <span className="workTag">{(data != null )&&data.caseStudy[0].category}</span>
                        </div>
                        <button onClick={()=>goToDetails((data != null )&&data.caseStudy[0].id, (data != null )&&data.caseStudy[0].title)} className="cardBtn">Read Case Study <MdArrowOutward className='arrow' size={20} /></button>
                    </div>
                </div>
                {(data != null )&& data.caseStudy.map(cases => (

                    <div data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-delay="200" data-aos-duration="600"  key={cases.id} className="pack workCard">
                        <div className="workCardTxt">
                            <h6 className='aboutExp'>{cases.title}</h6>
                            <p className="cardTxt">{cases.caption}</p>
                            <div className="tags">
                                <span className="workTag">{cases.date}</span>
                                <span className="workTag">{cases.category}</span>
                            </div>
                            <button onClick={()=>goToDetails(cases.id, cases.title)} className="cardBtn">Read Case Study <MdArrowOutward className='arrow' size={20} /></button>
                        </div>
                        <img src={cases.thumb} alt="project thumbnail" className="workCardImg" />
                    </div>

                ))}
            </div>
            <Fnav />
        </>
        
    );
}
 
export default Work;