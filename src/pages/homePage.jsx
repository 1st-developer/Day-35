import React from "react";
import "../styles/homePage.scss"

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
                    <button className="options">Product</button>
                    <button className="options">Sell</button>
                    <button className="options">Cost</button>
                    <button className="options">Top Edits</button>
                    <button className="options">Secure</button>
                    <button className="options">Secure</button>
                    <button className="options">Secure</button>
                    <button className="options">Secure</button>
                    </div>
                    <button className="other">Explore Other Options</button>
                </div>
            </div>

            <div className="hero-image">
                <img src="https://images.pexels.com/photos/2417848/pexels-photo-2417848.jpeg?auto=compress&cs=tinysrgb&w=600" />
            </div>

            <div className="right">
                <div className="terget"></div>
            </div>

        </div>
    );
}


export default HomePage;