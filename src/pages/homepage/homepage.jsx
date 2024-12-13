import './homepage.css';
import userImg from '../../img/userImg.png';
import HomeCarousel from '../../components/carousel/carousel';
import Cards from '../../components/cards/cards';
import React, { useEffect, useState } from 'react';
/* import { MdArrowOutward } from "react-icons/md"; */
import Footer from '../../components/footer/footer'
const Homepage = () => {
    const [data, setData] = useState(null)
    useEffect(()=> {
        (data === null) ? (
            fetch('/data/caseStudies.json')
            .then(response => response.json())
            .then(data=>setData(data))
            .then(console.log(data))
            
        ): console.log("already fetched");
    })

    return ( 
        <div>            
            <header className="theGap">
                <div className="container">
                    <div data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-delay="200" data-aos-duration="600" className="user">
                        <img src={userImg} alt="project sample" className="userImg" />
                        <p className="userName">Hello, my name is Oluwadamilola Elizabeth Adeniji</p>
                    </div>
                    <br />
                    <div data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-delay="200" data-aos-duration="600" className="headings">
                        <h1>I'm a <span className='shaded'>Product Designer</span> who focuses on <span className='shaded'>creating delightful & intuitive</span> user experiences.</h1>
                    </div>
                    <div data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-delay="200" data-aos-duration="600" className="availability">
                        <span className="green"></span>
                        I am currently open for work
                    </div>
                </div>
            </header>
            <div data-aos="fade-down" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-delay="200" data-aos-duration="600">
                <HomeCarousel />
            </div>            
            <section className='container'>
                <div data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-delay="200" data-aos-duration="600">
                    <h4 className="subHeading">Case Studies</h4>
                    <br />
                    <div className="caseStudy">
                        {(data != null )&& data.caseStudy.map(cases => (
                            <Cards key={cases.id} id={cases.id} title={cases.title} img={cases.thumb} body={cases.caption}/>
                        ))}
                    </div>  
                </div>                
               {/*  <div>
                    <h4 className="subHeading">Other Projects</h4>
                    <div className="otherProjects">
                        <div className="otherTxt">
                            <p className="otherTitle">Student Zen Website</p>
                            <p className="othercaption">Bridging the recycling gap in Nigeria with a mobile app that promotes recycling and addresses waste management challenges.</p>
                        </div>
                        <button className='otherBtn'>View Project <MdArrowOutward className='arrow' size={20} /></button>    
                    </div>
                    <div className="otherProjects">
                        <div className="otherTxt">
                            <p className="otherTitle">Waec Website</p>
                            <p className="othercaption">Bridging the recycling gap in Nigeria with a mobile app that promotes recycling and addresses waste management challenges.</p>
                        </div>
                        <button className='otherBtn'>View Project <MdArrowOutward className='arrow' size={20} /></button>    
                    </div>
                    <div className="otherProjects">
                        <div className="otherTxt">
                            <p className="otherTitle">Travel Website</p>
                            <p className="othercaption">Bridging the recycling gap in Nigeria with a mobile app that promotes recycling and addresses waste management challenges.</p>
                        </div>
                        <button className='otherBtn'>View Project <MdArrowOutward className='arrow' size={20} /></button>    
                    </div>
                </div> */}
            </section>
            <Footer />
        </div>
    );
}
 
export default Homepage;