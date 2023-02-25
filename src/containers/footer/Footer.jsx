import React from 'react';
import gpt3Logo from '../../logo.svg';
import './footer.css';

const Footer = () => (
  <div className="footer_container section__padding">
    <div className="footer_heading">
      <h1 className="gradient__text">Do you want to step in to the future before others</h1>
    </div>

    <div className="footer_btn">
      <p>Request Early Access</p>
    </div>

    <div className="footer_links">
      <div className="footer_links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p>Olutunde Sokunbi Olushola <br /> All Rights Reserved</p>
      </div>
      <div className="footer_links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="footer_links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="footer_links_div">
        <h4>Get in touch</h4>
        <p>olutunde sokunbi</p>
        <p>+2348165484078</p>
        <p>olutundesokunbi@gmail.com</p>
      </div>
    </div>

    <div className="footer_copyright">
      <p>@2023 GPT-3. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
