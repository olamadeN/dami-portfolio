import './fNav.css';
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaSquareEnvelope } from "react-icons/fa6";
import { FaPhoneSquareAlt } from "react-icons/fa";
import {  FaLinkedin} from "react-icons/fa6";

const Fnav = () => {
    return ( 
        <div className="fNav">
            <div className="container fnavSocials">
                <p>Damilola Adeniji ⏤ 2024</p>
                
                <ul className='aboutSocials'>
                    <li >
                        <FaSquareWhatsapp size={40} />
                    </li>                         
                    <li >
                        <FaLinkedin size={40}/>
                    </li> 
                    <li>
                        <FaSquareEnvelope size={40} />
                    </li>
                        
                    <li >
                        <FaPhoneSquareAlt size={40} />
                    </li>                          
                </ul>  
                
            </div>
        </div>
    );
}
 
export default Fnav;