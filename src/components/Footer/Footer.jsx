import React from "react";
import "./Footer.css";
// import Logo from '../../assets/logo-black.png'
import Logo from "../../assets/logo-black.png";

const Footer = () => {
  return (
    <div className="footer">

       <ul className="footer-content" type="none">
        <li>
          <span className="footer-year">
          <img src={Logo} alt='icon' width={'56px'}></img>
           © 2024 </span>
        </li>
        
        <li>About</li>
        <li>Accessibility</li>
        <li>User Agreement</li>
        <li>Privacy Policy</li>
        <li>Cookie Policy</li>
        <li>Copyright Policy</li>
        <li>Brand Policy</li>
        <li>Guest Controls</li>
        <li>Community Guidelines</li>
        <li>Language</li>
        </ul>
    </div>
  );
};
export default Footer;

