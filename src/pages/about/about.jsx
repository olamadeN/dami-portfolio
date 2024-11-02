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
    return ( 
        <>
        
            <div className='container about'>
                <aside> 
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
                        <button className='button aboutCvBtn'>View CV <MdArrowOutward size={15}/> </button>
                    </div>
                </aside>
                <article>
                    <div id='bio' className=" bio aboutTxtPri">
                        <p>Lorem ipsum dolor sit amet consectetur. Rhoncus mattis id euismod ut. Enim odio ipsum et morbi. Diam quis mi quam feugiat. Lorem ipsum dolor sit amet consectetur. Rhoncus mattis id euismod ut. Enim odio ipsum et morbi. Diam quis mi quam feugiat.</p>
                        <p>Lorem ipsum dolor sit amet consectetur. Rhoncus mattis id euismod ut. Enim odio ipsum et morbi. Diam quis mi quam feugiat.
                        Lorem ipsum dolor sit amet consectetur. Rhoncus mattis id euismod ut. Enim odio ipsum et morbi. Diam quis mi quam feugiat.</p>
                        <br />
                        <button className="button aboutBtnSm">Let's Connect <BsThreeDots className='arrow' size={15}/></button>
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
                                <p className="aboutExp">MSc User Experience Design</p>
                                <p className='aboutUni'>Birmingham City University</p>
                                <p className="aboutDate">2023 - 2024</p>
                            </li> 
                        </ul>                   
                    </div>
                    <div id='experience' className="aboutRight">
                        <p className='aboutSubHead'>Work Experience</p>
                        <ul>
                            <li >
                                <p className="aboutExp">Product Designer</p>
                                <p className='aboutUni'>caviata</p>
                                <p className="aboutDate">2022 - 2023</p>
                            </li> 
                            <br />
                            <li >
                                <p className="aboutExp">Product Designer</p>
                                <p className='aboutUni'>caviata</p>
                                <p className="aboutDate">2022 - 2023</p>
                            </li> 
                            <br />
                            <li >
                                <p className="aboutExp">Product Designer</p>
                                <p className='aboutUni'>caviata</p>
                                <p className="aboutDate">2022 - 2023</p>
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