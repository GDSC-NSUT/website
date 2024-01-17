import React from 'react';
import "./footer.css";
import DSC_Logo from "../../Assets/Images/DSC-Logo.png";
import  { Link } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaBehance } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";


export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrapper">
        <div className="vertical-container">
            <div className="horizontal-container">
                <img className="footer-logo" src={DSC_Logo} alt="DSC Logo" />
                <div className="vertical-container">
                    <span className="society-name">Google Developer Student Clubs</span>
                    <span className="college-name">Netaji Subhas University of Technology</span>
                </div>
            </div>
            <div className="social">
                <a href="https://www.instagram.com/gdsc_nsut/" target="_blank" rel="noreferrer" className="instagram"><FaInstagram /></a>
                <a href="https://www.instagram.com/gdsc_nsut/" target="_blank" rel="noreferrer" className="facebook"><FaFacebookF /></a>
                <a href="https://www.instagram.com/gdsc_nsut/" target="_blank" rel="noreferrer" className="linkedin"><RiLinkedinFill /></a>
                <a href="https://www.instagram.com/gdsc_nsut/" target="_blank" rel="noreferrer" className="behance"><FaBehance /></a>
            </div>
        </div>
        <ul className="nav-links">
            <li><Link to="/" >Home</Link></li>
            <li><Link to="/events" >Events</Link></li>
            <li><Link to="/team" >Our Team</Link></li>
            <li><Link to="/blogs" >Blogs</Link></li>
            <li><Link to="/feed" >Feed</Link></li>
            <li><Link to="/contact" >Contact Us</Link></li>
        </ul>
      </div>
    </footer>
  )
}