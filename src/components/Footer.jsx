import React from "react";
import "./FooterStyles.css";
import {FaGithub} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";



const Footer = () => {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/* column 1 */}
                    <div className="col">
                        <h5 className="font-weight-bold">EXPLORE</h5>
                        <ul className="list-unstyled">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Breathing</a></li>
                            <li><a href="#">r/Meditation</a></li>
                            <li><a href="#">Chart</a></li>
                            <li><a href="#">Account</a></li>
                        </ul>
                    </div>

                    {/* column2 */}
                    <div className="col">
                        <h5  className="font-weight-bold">CONTACT US</h5>
                        <ul className="list-unstyled">
                            <li><a href="#">info@serenity.com</a></li>
                            <li><a href="#">1-367-678-2345</a></li>
                           
                        </ul>
                    </div>

                    {/* column3 */}
                    <div className="col">
                        <h5  className="font-weight-bold">FOLLOW US</h5>
                        <ul className="list-unstyled">
                            <li><a href="#"><span className="icon"><FaGithub /></span> GitHub </a></li>
                            <li><a href="#"><span className="icon"><FaLinkedin /></span> Linkedin</a></li>
                            <li><a href="#"><span className="icon"><FaInstagram /></span> Instagram</a></li>
                        
                        </ul>
                    </div>

                </div>

               <hr/>
                <div className="row">
                    <p className="col-sm text-center">
                        &copy;{new Date().getFullYear()} | Serenity | All right reserved | Terms Of Service | Privacy
                    </p>
                </div>

            </div>

        </div>
    );

}

export default Footer;