import './cv.css';
import { MdArrowOutward } from "react-icons/md";
import Fnav from '../../components/footerNav/fNav';
const Cv = () => {
    return ( 
        <>
            <div className="container cv">
                <h3 className="pack pageHeadings">CV</h3>
                <p className="">Lorem ipsum dolor sit amet consectetur. Rhoncus mattis id euismod ut. Enim odio ipsum et morbi. Diam quis mi quam feugiat. Lorem ipsum dolor sit amet consectetur. Rhoncus mattis id euismod ut. Enim odio ipsum et morbi. Diam quis mi quam feugiat.</p>
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
                                <p className="cvExp">MSc User Experience Design</p>
                                <p className='aboutUni'>Birmingham City University</p>
                                <p className="aboutDate">2023 - 2024</p>
                            </li> 
                        </ul>                   
                    </div>
                    <div className="pack">            
                        <p className='cvSubHead'>Work Experience</p>
                        <ul>
                            <li >
                                <p className="cvExp">MSc User Experience Design</p>
                                <p className='aboutUni'>Birmingham City University</p>
                                <p className="aboutDate">2023 - 2024</p>
                            </li> 
                            <br />
                            <li>
                                <p className="cvExp">MSc User Experience Design</p>
                                <p className='aboutUni'>Birmingham City University</p>
                                <p className="aboutDate">2023 - 2024</p>
                            </li> 
                            <br />
                            <li >
                                <p className="cvExp">MSc User Experience Design</p>
                                <p className='aboutUni'>Birmingham City University</p>
                                <p className="aboutDate">2023 - 2024</p>
                            </li> 
                            <br />
                            <li>
                                <p className="cvExp">MSc User Experience Design</p>
                                <p className='aboutUni'>Birmingham City University</p>
                                <p className="aboutDate">2023 - 2024</p>
                            </li> 
                        </ul>                   
                    </div>
                    <div className="pack">            
                        <p className='cvSubHead'>Awards</p>
                        <ul>
                            <li >
                                <p className="cvExp">MSc User Experience Design</p>
                                <p className='aboutUni'>Birmingham City University</p>
                                <p className="aboutDate">2023 - 2024</p>
                            </li> 
                            <br />
                            <li>
                                <p className="cvExp">MSc User Experience Design</p>
                                <p className='aboutUni'>Birmingham City University</p>
                                <p className="aboutDate">2023 - 2024</p>
                            </li> 
                            <br />
                            <li >
                                <p className="cvExp">MSc User Experience Design</p>
                                <p className='aboutUni'>Birmingham City University</p>
                                <p className="aboutDate">2023 - 2024</p>
                            </li> 
                            <br />
                            <li>
                                <p className="cvExp">MSc User Experience Design</p>
                                <p className='aboutUni'>Birmingham City University</p>
                                <p className="aboutDate">2023 - 2024</p>
                            </li> 
                        </ul>                   
                    </div>
                </div>
                <div className="pack">
                    <p className='cvSubHead'>Work Experience</p>
                    <p className="cvEmail">adenijioluwadamilola9@gmail.com</p>
                    <button className="button">View CV <MdArrowOutward className='arrow' size={17} /></button>
                </div>

            </div>
            <Fnav />
        </>
        
    );
}
 
export default Cv;