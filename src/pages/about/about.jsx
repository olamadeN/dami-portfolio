import './about.css';
import { MdArrowOutward } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareEnvelope } from "react-icons/fa6";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import Footer from '../../components/footer/footer';

const About = () => {
    const oneClick = () => {
        const id = document.getElementById("bio")
        const number = document.getElementById("nos1").classList
        
        if (id.classList.contains("hidden")){
            id.classList.remove("hidden")
        }
        if (number.contains("hidden")){
            number.remove("hidden")
            number.add("active")
            document.getElementById("nos1.1").classList.add("active")
        }
        /* removing education classes */
        if(document.getElementById("nos2").classList.contains("active")){
            document.getElementById("nos2").classList.add("hidden")
            document.getElementById("nos2").classList.remove("active")
            document.getElementById("nos2.2").classList.remove("active")
        }
        /* removing experience classes */
        if(document.getElementById("nos3").classList.contains("active")){
            document.getElementById("nos3").classList.add("hidden")
            document.getElementById("nos3").classList.remove("active")
            document.getElementById("nos3.3").classList.remove("active")
        }
    }
    const oneClick2 = () => {
        const id = document.getElementById("bio")
        const number = document.getElementById("nos2").classList
        
        id.classList.add("hidden")

        if (number.contains("hidden")){
            number.remove("hidden")
            number.add("active")
            document.getElementById("nos2.2").classList.add("active")
        }
            /* removing bio classes */
            document.getElementById("nos1").classList.add("hidden")
            document.getElementById("nos1").classList.remove("active")
            document.getElementById("nos1.1").classList.remove("active")
            /* removing experience classes */
            if(document.getElementById("nos3").classList.contains("active")){
                document.getElementById("education").classList.remove("hidden")
                document.getElementById("nos3").classList.add("hidden")
                document.getElementById("nos3").classList.remove("active")
                document.getElementById("nos3.3").classList.remove("active")
            }
        
    }
    const oneClick3 = () => {
        const id = document.getElementById("education")
        const number = document.getElementById("nos3").classList

        id.classList.add("hidden")

        if (number.contains("hidden")){
            number.remove("hidden")
            number.add("active")
            document.getElementById("nos3.3").classList.add("active")
            /* removing bio classes */
            document.getElementById("nos1").classList.add("hidden")
            document.getElementById("bio").classList.add("hidden")
            document.getElementById("nos1").classList.remove("active")
            document.getElementById("nos1.1").classList.remove("active")
            /* removing edu classes */
            document.getElementById("nos2").classList.add("hidden")
            document.getElementById("education").classList.add("hidden")
            document.getElementById("nos2").classList.remove("active")
            document.getElementById("nos2.2").classList.remove("active")
        }
    }

    const handleDownloadCV = () => {
        const cv = document.createElement('a');
        cv.href = '/data/Elizabeth-Oluwadamilola-Adeniji.pdf';  // Path to your file in the public folde
        cv.download = 'Elizabeth-Oluwadamilola-Adeniji.pdf';
        cv.click();
    }
    return ( 
        <>
        
            <div className='container about'>
                <aside data-aos="fade-down" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-delay="200" data-aos-duration="600"> 
                    <div className="cvSections">
                        <div id='section1' className="section">
                            <span id='nos1.1'  className="number active" onClick={oneClick}>1</span>
                            <span id='nos1' className="active">Bio</span> 
                        </div>
                        <div id='section2' className="section">
                            <span id='nos2.2' className="number" onClick={oneClick2}>2</span>
                            <span id='nos2' className="hidden">Education</span>
                        </div>
                        <div id='section3' className="section">
                            <span id='nos3.3' className="number" onClick={oneClick3}>3</span>
                            <span id='nos3' className="hidden">Experience</span>
                        </div>
                        <button className='button aboutCvBtn' onClick={handleDownloadCV}>View CV <MdArrowOutward size={15}/> </button>
                    </div>
                </aside>
                <article>
                    <div data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-delay="200" data-aos-duration="600" id='bio' className=" bio aboutTxtPri">
                        <p>Versatile technology professional combining strong coding skills with UX design expertise. I am passionate about creating user-friendly solutions, I bring a unique approach to developing robust and intuitive applications. I am eager to leverage my skills in JavaScript, HTML, CSS, prototyping, and QA testing to build impactful digital experiences that make a real difference.</p>
                        <br />
                        <button data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-delay="200" data-aos-duration="600" className="button aboutBtnSm">Let's Connect <BsThreeDots className='arrow' size={15}/></button>
                    </div>
                    <div id='education' className="aboutRight">
                        <p className='aboutSubHead'>Education</p>
                        <ul>
                            <li >
                                <p className="aboutExp">MSc User Experience Design</p>
                                <p className='aboutUni'>Birmingham City University</p>
                                <p className="aboutDate">2023 - 2024</p>
                            </li> 
                            <br />
                            <li>
                                <p className="aboutExp">BSc Computer Science</p>
                                <p className='aboutUni'>Caleb University</p>
                                <p className="aboutDate">2016 - 2020</p>
                            </li> 
                        </ul>                    
                    </div>
                    <div id='experience' className="aboutRight">
                        <p className='aboutSubHead'>Work Experience</p>
                        <ul>
                            <li >
                                <p className="aboutExp">Engineering Graduate Intern</p>
                                <p className='aboutUni'>Cavista Technology</p>
                                <p className="aboutDate">May 2022 - July 2022</p>
                            </li> 
                            <br />
                            <li>
                                <p className="aboutExp">Development Executive</p>
                                <p className='aboutUni'>Healthbetter Limited (NYSC)</p>
                                <p className="aboutDate">April 2021 – February 2022</p>
                            </li> 
                            <br />
                            <li >
                                <p className="aboutExp">QA Tester</p>
                                <p className='aboutUni'>Sidmach Technology</p>
                                <p className="aboutDate">November 2020 - December 2020</p>
                            </li> 
                            <br />
                            <li>
                                <p className="cvExp">Software Development Intern</p>
                                <p className='aboutUni'>Sidmach Technology</p>
                                <p className="aboutDate">May 2019 - October 2019</p>
                            </li> 
                        </ul>                   
                    </div> 
                    <div className="aboutRight GIT">
                        <p className='aboutSubHead'>Get in Touch</p>
                        <ul className='aboutSocials'>
                            <li  >
                                <FaSquareInstagram className='arrow aboutArrow' size={50} />
                            </li>                         
                            <li >
                                <FaSquareXTwitter className='arrow aboutArrow' size={50}/>
                            </li> 
                            <li>
                                 <FaSquareEnvelope className='arrow aboutArrow' size={50} />
                            </li>
                               
                            <li >
                                <FaPhoneSquareAlt className='arrow aboutArrow' size={50} />
                            </li>                          
                        </ul>                   
                    </div>
                </article>

            </div>
           <Footer />
        </>
    );
}
 
export default About;