import './details.css';
import { useLocation, Link } from 'react-router-dom';
import Loading from '../../components/loading/loading';
import { MdArrowOutward } from "react-icons/md"; 
import Fnav from '../../components/footerNav/fNav';
import { useEffect, useState } from 'react';
import DOMPurify from 'dompurify';
import { Helmet } from "react-helmet-async";
const Details = () => {
    const location = useLocation();
    const { id } = location.state || {};
    const [project, setProject] = useState(null)
    const [loading, setLoading] = useState(null)

    useEffect(()=> {
        setLoading(true)
        fetch('/data/caseStudies.json')
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          const caseStudy = data.caseStudy.find((item) => item.id === id); // Find the specific item by id
          if (caseStudy) {
            setProject(caseStudy);
          } else {
            console.log('Case study not found');
          }
          setLoading(false)
        })
        .catch((error) => {
          console.error('There has been a problem with your fetch operation:', error);
        });
      
    },[id, project])

    if (!loading && !project) return <p>there has been an error</p>;
    if (loading && !project) return <Loading />;


    return ( 
        <>
            <Helmet>
                <title>{project.title} - Damilola Portfolio</title>
                <meta name="description" content={project.introduction || "Learn more about this project and the work done."} />
                <meta name="keywords" content={`${project.category}, ${project.date}, UI/UX Design, Product Design`} />
                <meta name="author" content="GMTDevs" />
                <meta property="og:title" content={project.title} />
                <meta property="og:description" content={project.introduction || "Discover the details of this project and how it was executed."} />
                <meta property="og:image" content={project.img1} />
                <meta property="og:url" content={`https://www.yourwebsite.com/project/${project.id}`} />
            </Helmet>
            {!loading && project && <div className="contact">
                <div className="container">
                    <h3 className="contactHeadings">{project.title}</h3>
                    <div className="bla">
                        <div className="tags contactTags">
                            <span className="workTag">{project.date}</span>
                            <span className="workTag">{project.category}</span>
                        </div>
                        <Link to={project.demo} target='_blank'><button className="button">View Prototype <MdArrowOutward size={12} /></button></Link>
                        
                    </div>                
                </div>
                
                <div data-aos="flip-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-delay="100" data-aos-duration="600" className="studyBanner container">
                    <img src={project.img2} alt="work sample" id='studyBannerImg1' className="studyBannerImg" />
                    {/* <img src={project.thumb} alt="work sample" id='studyBannerImg2'className="studyBannerImg" /> */}
                </div>
                <div className="pack">
                    <div className="container contactBook">
                        <div className="scope">
                            <p className="contactSubHeading">Scope</p>
                            <p className="contactTxt">
                                {project.scope}
                            </p>
                        </div>
                        <div className="intro">
                            <p className="contactSubHeading">Introduction</p>
                            <p className="contactTxt">
                            {project.introduction}
                            </p>
                        </div>
                    </div>
                </div>

                <div data-aos="flip-down" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-delay="150" data-aos-duration="600" className="pack container">
                    <div className="contactCon">
                        <img src={project.img1} alt="work sample" />
                        <img src={project.img2} alt="work sample" />
                    </div>
                </div>
                <div className="pack">
                    <div className="container">
                        {/* <p className="contactSubHeading"> Header 2 </p> */}
                        <pre className="contactTxt" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(project.header2) }}></pre>
                    </div>
                </div>
                <div className="pack">
                    <div className="container">
                        <p className="contactSubHeading"> The Result </p>
                        <p className="contactTxt">
                            {project.result}
                        </p>
                        {project.demo2 && <Link to={project.demo2} target='_blank'><button className="button">View Prototype for Owners <MdArrowOutward size={12} /></button></Link>}
                    </div>
                </div>
                
                <div data-aos="flip-down" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-delay="200" data-aos-duration="600" className="pack">
                    
                    <div className="container">
                        <img className='contactImg' src={project.thumb} alt="work sample" />
                    </div>
                </div>
                <br /><br /><br />
                <Fnav />
            </div>}
        </>
    );
}
 
export default Details;