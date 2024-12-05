import './cv.css';
import { MdArrowOutward } from "react-icons/md";
import Fnav from '../../components/footerNav/fNav';

const handleDownloadCV = () => {
    const cv = document.createElement('a');
    cv.href = '/data/Elizabeth-Oluwadamilola-Adeniji.pdf';  // Path to your file in the public folde
    cv.download = 'Elizabeth-Oluwadamilola-Adeniji.pdf';
    cv.click();
}

const Cv = () => {
    return ( 
        <>
            <div className="container cv">
                <h3 className="pack pageHeadings">CV</h3>
                <p className="">Versatile technology professional combining strong coding skills with UX design expertise. I am passionate about creating user-friendly solutions, I bring a unique approach to developing robust and intuitive applications. I am eager to leverage my skills in JavaScript, HTML, CSS, prototyping, and QA testing to build impactful digital experiences that make a real difference.</p>
                <div className="cvPack">
                    <div className="pack">            
                        <p className='cvSubHead'>Education</p>
                        <ul>
                            <li >
                                <p className="cvExp">MSc User Experience Design</p>
                                <p className='aboutUni'>Birmingham City University</p>
                                <p className="aboutDate">2023 - 2024</p>
                            </li> 
                            <br />
                            <li>
                                <p className="cvExp">BSc Computer Science</p>
                                <p className='aboutUni'>Caleb University</p>
                                <p className="aboutDate">2016 - 2020</p>
                            </li> 
                        </ul>                   
                    </div>
                    <div className="pack">            
                        <p className='cvSubHead'>Work Experience</p>
                        <ul>
                            <li >
                                <p className="cvExp">Engineering Graduate Intern</p>
                                <p className='aboutUni'>Cavista Technology</p>
                                <p className="aboutDate">May 2022 - July 2022</p>
                            </li> 
                            <br />
                            <li>
                                <p className="cvExp">Development Executive</p>
                                <p className='aboutUni'>Healthbetter Limited (NYSC)</p>
                                <p className="aboutDate">April 2021 – February 2022</p>
                            </li> 
                            <br />
                            <li >
                                <p className="cvExp">QA Tester</p>
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
                </div>
                <div className="pack">
                    <p className='cvSubHead'>Projects</p>
                    <p className="cvEmail">adenijioluwadamilola9@gmail.com</p>
                    <button className="button cvBtn" onClick={handleDownloadCV} >View CV <MdArrowOutward className='arrow' size={17} /></button>
                </div>

            </div>
            <Fnav />
        </>
        
    );
}
 
export default Cv;