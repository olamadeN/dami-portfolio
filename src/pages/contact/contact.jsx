import './contact.css';
import workImg from '../../img/work/work.jpeg';
import { useLocation, Link } from 'react-router-dom';
import { MdArrowOutward } from "react-icons/md"; 
import Fnav from '../../components/footerNav/fNav';
import { useEffect, useState } from 'react';
import DOMPurify from 'dompurify';
const Contact = () => {
    const location = useLocation();
    const { id } = location.state || {};
    const [project, setProject] = useState(null)

    useEffect(()=> {
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
            console.log(project)
          } else {
            console.log('Case study not found');
          }
        })
        .catch((error) => {
          console.error('There has been a problem with your fetch operation:', error);
        });
      
    },[id])

    if (!project) return <p>there has been an error</p>;

    return ( 
        <div className="contact">
            <div className="container">
                <h3 className="contactHeadings">{project.title}</h3>
                <div className="bla">
                    <div className="tags contactTags">
                        <span className="workTag">{project.date}</span>
                        <span className="workTag">{project.category}</span>
                    </div>
                    <Link to={project.demo}><button className="button">View Prototype <MdArrowOutward size={12} /></button></Link>
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
                    <pre className="contactTxt" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(project.header2) }}></pre>
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
                        {project.result}
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