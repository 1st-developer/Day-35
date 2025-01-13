import React from "react";
import "../styles/homePage.scss"
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

function HomePage({isMenuVisible}) {

    return(
        <div className="page">
            <div className={`left ${isMenuVisible ? "show" : ""}`}>
                <div className="content">
                    <div className="profile">
                        <div className="picture">
                            <img src="https://w7.pngwing.com/pngs/954/328/png-transparent-computer-icons-user-profile-avatar-heroes-head-recruiter-thumbnail.png" />
                        </div>
                        <div className="search">
                        <input type="search" placeholder="🔍 Search" />
                        </div>
                    </div>
                    <div className="connected">
                        <Link to={"/product"} className="options">Product</Link>
                        <Link to={"/news"} className="options">News</Link>
                        <Link to={"/versions"} className="options">Versions</Link>
                        <Link to={"/top cells"} className="options">Top cells</Link>
                        <Link to={"/work"} className="options">Work</Link>
                        <Link to={"/settings"} className="options">Settings</Link>
                        <Link to={"/account"} className="options">Account</Link>
                        <Link to={"/navigations"} className="options">Navigations</Link>
                    </div>
                    <button className="other">Explore Other Options</button>
                </div>
            </div>

            <div className="hero-image">
                <img src="https://images.pexels.com/photos/2417848/pexels-photo-2417848.jpeg?auto=compress&cs=tinysrgb&w=600" />
            </div>

            <div className="right">
                <div className="targetEl">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}


export default HomePage;