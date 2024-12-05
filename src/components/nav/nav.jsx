import './nav.css'
import { IconContext } from "react-icons";
import { FaMoon } from "react-icons/fa";
import { HashLink } from 'react-router-hash-link';
const Navbar = () => {
    const selectedTheme = localStorage.getItem("selectedTheme");
    //getting user theme prefrence
    // const prefrence = window.matchMedia("(prefers-color-scheme: dark)").matches;
    //function for dark mode
    const setDarkMode = () => {
        document.querySelector("body").setAttribute("data-theme", "dark")
        localStorage.setItem("selectedTheme", "dark")
    }
    //function for light mode
    const setLighMode = () => {
        document.querySelector("body").setAttribute("data-theme", 'light')
        localStorage.setItem("selectedTheme", "light")
    }
    /*setting default theme to user prefence
    if(prefrence) {
        setDarkMode();
    }*/
    //preventing theme change upon refresh
    if(selectedTheme === 'dark') {
        setDarkMode();
    }
    //theme toggler function
    const toggleTheme = (e) => {
        (e.target.checked) ? setDarkMode() : setLighMode();
    }
    return ( 
        <nav data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-delay="200" data-aos-duration="600">
            <div className="container navFlex">
                <HashLink smooth to="/"><h1 className="navLogo">DA</h1></HashLink>
                <div className="navContent">
                    <ul className='navLinks'>
                        <HashLink smooth to="/about"><li className='navLink'>About</li></HashLink>
                        <HashLink smooth to="/work"><li className='navLink'>Work</li></HashLink>
                        {/* <HashLink smooth to="/cv"><li className='navLink'>CV</li></HashLink> */}
                        <HashLink smooth to="mailto:adenijioluwadamilola9@gmail.com"><li className='navLink'>Contact</li></HashLink>
                        <input type='checkbox' onChange={toggleTheme} id='check'/>
                        <label htmlFor="check">
                            <IconContext.Provider value={{ color: "#484848", className: 'theme', size: '1em' }}>
                                <div>
                                    <FaMoon />
                                </div>
                            </IconContext.Provider>
                        </label>
                        
                    </ul>
                    
                </div>
            </div>
        </nav>
    );
}
 
export default Navbar;