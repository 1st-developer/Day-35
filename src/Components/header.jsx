import { useState } from "react";
import "../styles/header.scss"
import {Link} from "react-router-dom"

function Header({toggleMenu}) {


    const [activeTab, setActiveTab] = useState(null);

    const handleClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div>
            <header>
            <div className="logo"><ion-icon name="logo-apple"></ion-icon></div>
            <nav>
                <Link to="/" className={activeTab === "home" ? "show" : ""} onClick={() => handleClick("home")}> Home</Link>
                <Link to="/about" className={activeTab === "about" ? "show" : ""} onClick={() => handleClick("about")} >About </Link>
                <Link to="/contact" className={activeTab === "contact" ? "show" : ""} onClick={() => handleClick("contact")}>Contact</Link>
                <Link to="/services" className={activeTab === "services" ? "show" : ""} onClick={() => handleClick("services")}>Services</Link>
                <Link to="/technology" className={activeTab === "technology" ? "show" : ""} onClick={() => handleClick("technology")}>Technology</Link>
                <Link to="/help" className={activeTab === "help" ? "show" : ""} onClick={() => handleClick("help")}>help</Link>
            </nav>
            <div className="btn">
            <button className="btn-more">Explore</button>
            <button onClick={toggleMenu} className="menu-icon"><ion-icon name="menu-outline"></ion-icon></button>
            <button className="btn-profile">
                <img src="https://w7.pngwing.com/pngs/954/328/png-transparent-computer-icons-user-profile-avatar-heroes-head-recruiter-thumbnail.png" />
            </button>
            </div>
        </header>
        </div>
    );
}

export default Header;