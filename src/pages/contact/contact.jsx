import './contact.css';
import { Link } from 'react-router-dom';
import { FaPhone, FaSquareWhatsapp, FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import me from '../../img/DAMI.jpg';
import Fnav from '../../components/footerNav/fNav';
const Contact = () => {

    return ( 
        <div className="contact">
            
            <div className="container">
                <div className="contPart">
                    <div className="det">
                        <h2>Contact Me</h2>
                        <p className='detSubTitle'>Need help with somthing? Get in touch</p>
                        <div className="contactDet">
                            <div className="contItems">
                               <Link target='_blank'> <div className="contIcon"><FaSquareWhatsapp /> <p>WhatsApp</p></div> </Link> 
                                <p>Interested in placing an order or learning more about our product offering, or looking forward to partnering with us, kindly reach out to us through the contact lines below.</p>
                                <p></p>
                            </div>
                            <div className="contItems">
                                <Link target='_blank'><div className="contIcon"> <FaPhone /><p>Phone Number</p> </div></Link>                                
                                <p>Interested in placing an order or learning more about our product offering, or looking forward to partnering with us, kindly reach out to us through the contact lines below.</p>
                                <p className='it'>+44 7599 475092</p>
                            </div>
                            <div className="contItems">
                                <Link target='_blank' to="https://www.linkedin.com/in/oluwadamilola-adeniji-24527920b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"><div className="contIcon"><FaLinkedin /> <p>LinkedIn</p></div></Link> 
                                <p>Interested in placing an order or learning more about our product offering, or looking forward to partnering with us, kindly reach out to us through the contact lines below.</p>
                                <p className='it'>@Oluwadamilola Adeniji</p>
                            </div>
                            <div className="contItems">
                                <Link target='_blank' to="https://www.linkedin.com/in/oluwadamilola-adeniji-24527920b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"><div className="contIcon"><MdEmail /> <p>Email</p></div></Link> 
                                <p>Interested in placing an order or learning more about our product offering, or looking forward to partnering with us, kindly reach out to us through the contact lines below.</p>
                                <p className='it'>adenijioluwadamilola9@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <img src={me} alt="owners" />
                </div>
            </div>
            <br /><br /><br />
            <Fnav />
        </div>
    );
}
 
export default Contact;