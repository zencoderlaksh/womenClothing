import React from "react";

const Footer = () => {
  return (
    <div className="footer-wrapper flex justify-between bg-[#404040]">
      <div className="left"></div>
      <div className="right flex gap-5">
        <div className="about">
          <h2 className="footer-header"> About Modimal</h2>
          <ul>
            <li className="flex flex-col">
              <a href="">Collection</a>
              <a href="">Sustainability</a>
              <a href="">Privacy Policy</a>
              <a href="">Support System</a>
              <a href="">Terms & Condition</a>
              <a href="">Copyright Notice</a>
            </li>
          </ul>
        </div>
        <div className="help">
          <h2 className="footer-header"> Help & Support</h2>
          <ul>
            <li className="flex flex-col">
              <a href=""> Orders & Shipping</a>
              <a href=""> Returns & Refunds</a>
              <a href=""> FAQs</a>
              <a href=""> Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="join">
          <h2 className="footer-header"> Join Up</h2>
          <ul>
            <li className="flex flex-col">
              <a href="">Modimal Club</a>
              <a href="">Careers</a>
              <a href="">Visit Us</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
