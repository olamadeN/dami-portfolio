import './nav.css';
import { HashLink } from 'react-router-hash-link';
import { useState, useEffect } from 'react';

const Navbar = () => {
    // Initial theme from localStorage or default to light mode
    const initialTheme = localStorage.getItem("selectedTheme") || 'dark';

    // State to track the current theme
    const [theme, setTheme] = useState(initialTheme);

    // Function to set dark mode
    const setDarkMode = () => {
        document.querySelector("body").setAttribute("data-theme", "dark");
        localStorage.setItem("selectedTheme", "dark");
        setTheme('dark'); // Update state
    };


    // Effect to initialize the theme on component mount
    useEffect(() => {
        if (theme === 'dark') {
            setDarkMode();
        } else {
            setDarkMode();
        }
    }, [theme]); // Effect runs whenever the `theme` state changes


/*     
    //light and dark mode complete code

    // Initial theme from localStorage or default to light mode
    const initialTheme = localStorage.getItem("selectedTheme") || 'light';

    // State to track the current theme
    const [theme, setTheme] = useState(initialTheme);

    // Function to set dark mode
    const setDarkMode = () => {
        document.querySelector("body").setAttribute("data-theme", "dark");
        localStorage.setItem("selectedTheme", "dark");
        setTheme('dark'); // Update state
    };

    // Function to set light mode
    const setLightMode = () => {
        document.querySelector("body").setAttribute("data-theme", 'light');
        localStorage.setItem("selectedTheme", "light");
        setTheme('light'); // Update state
    };

    // Effect to initialize the theme on component mount
    useEffect(() => {
        if (theme === 'dark') {
            setDarkMode();
        } else {
            setLightMode();
        }
    }, [theme]); // Effect runs whenever the `theme` state changes

    // Theme toggler function (changes theme on checkbox change)
    const toggleTheme = (e) => {
        if (e.target.checked) {
            setDarkMode();
        } else {
            setLightMode();
        }
    };

    // Get the current theme icon: FaMoon for dark mode, FaSun for light mode
    const themeIcon = theme === 'dark' ? <FaSun /> : <FaMoon />; */

    return (
        <nav data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-delay="200" data-aos-duration="600">
            <div className="container navFlex">
                <HashLink smooth to="/"><h1 className="navLogo">DA</h1></HashLink>
                <div className="navContent">
                    <ul className='navLinks'>
                        <HashLink smooth to="/about"><li className='navLink'>About</li></HashLink>
                        <HashLink smooth to="/work"><li className='navLink'>Projects</li></HashLink>
                        <HashLink smooth to="/contact"><li className='navLink'>Contact</li></HashLink>

                        {/* Theme toggle switch   (this is code to handle theme switch in light and dark mode*/}
                        {/* <input 
                            type='checkbox' 
                            checked={theme === 'dark'} // Dynamically update checkbox based on theme state
                            onChange={toggleTheme} // Switches theme on change
                            id='check' 
                        />
                        <label htmlFor="check">
                            <IconContext.Provider value={{ color: "#484848", className: 'theme', size: '1.5em' }}>
                                <div>
                                    {themeIcon}  --- This displays the appropriate icon
                                </div>
                            </IconContext.Provider>
                        </label> */}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
