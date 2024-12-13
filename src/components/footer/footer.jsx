import "./footer.css";
import { MdArrowOutward } from "react-icons/md";
import { MdArrowForward } from "react-icons/md";
import { MdArrowUpward } from "react-icons/md";
import { HashLink } from "react-router-hash-link";
const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="footerTxt">
                    <button className="button footerBtn">Let’s work together</button>
                    <p className="footerTxt1">Let’s connect and chat about UX design and other collaboration opportunities. Send an email to</p>
                    <p className="footerTxt2">Adenijioluwadamilola9@gmail.com</p>
                </div>
                <div className="footersFooter">
                    <p>Damilola Adeniji ⏤ © 2024</p>
                    <button className="button footerBtn">Back to top <MdArrowUpward className="arrow" size={18} /></button>
                    <div className="footerSocials">
                        <HashLink smooth target="_blank" to="https://www.linkedin.com/in/oluwadamilola-adeniji-24527920b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"><p className="fSocial">Linkedin  <MdArrowForward size={15} /></p></HashLink>
                        <p className="fSocial">WhatsApp <MdArrowOutward size={15} /></p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Footer;