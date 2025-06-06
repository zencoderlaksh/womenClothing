import React from "react";
import IMAGES from "../assets/images/projectImage";

const Footer = () => {
  return (
    <div className="footer-wrapper flex flex-wrap md:flex justify-around bg-[#404040] mt-5">
      <div className="left mt-12">
        <div className="text-[#FFFFFF] font-bold text-[16px] text-center md:text-start sm:text-3xl md:text-xl">
          <h5>Join Our Club, Get 15% Off For Your Birthday</h5>
        </div>
        <div className="inp mt-5 relative px-3 md:px-0">
          <input type="email" placeholder="Enter Your Email Address" className="inp1  border-1 border-gray-400 w-full md:w-[496px] px-2 md:px-[10px] py-[10px] mb-2 text-[#D1D9CF]" />
          <button>
            <img className="absolute top-4 right-5" src={IMAGES.arrowforward} alt="" />
          </button>
        </div>
        <div className="mt-2 flex items-center gap-2 md:w-[500px] px-4 md:px-0">
          <input className="w-[16px] h-[16px] scale-125" type="checkbox" />
          <p className="font-semibold text-xs/4 text-[#FFFFFF] md:tracking-[1px]">
            By Submittng your email, you agree to receive advertising emails from Modimal.
          </p>
        </div>
      </div>
      <div className="right flex gap-12 text-[#FFFFFF] mt-10 px-3 sm:px-5 md:px-0">
        <div className="about">
          <h2 className="footer-header font-bold text-[16px] md:text-xl"> About Modimal</h2>
          <ul>
            <li className="flex flex-col text-[14px] md:text-lg font-normal gap-[8px] mt-5">
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
          <h2 className="footer-header font-bold text-[16px] md:text-xl"> Help & Support</h2>
          <ul>
            <li className="flex flex-col text-[14px] md:text-lg font-normal gap-[8px] mt-5">
              <a href=""> Orders & Shipping</a>
              <a href=""> Returns & Refunds</a>
              <a href=""> FAQs</a>
              <a href=""> Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="join">
          <h2 className="footer-header font-bold text-[16px] md:text-xl"> Join Up</h2>
          <ul>
            <li className="flex flex-col text-[14px] md:text-lg font-normal gap-[8px] mt-5">
              <a href="">Modimal Club</a>
              <a href="">Careers</a>
              <a href="">Visit Us</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-[90%] flex justify-between mb-10">
        <div>
          <div className="social-icons flex items-center gap-[16px] mt-20">
            <img className="w-[24px] h-[24px]" src={IMAGES.instagram} alt="" />
            <img className="w-[24px] h-[24px]" src={IMAGES.facebook} alt="" />
            <img className="w-[24px] h-[24px]" src={IMAGES.pinterest} alt="" />
            <img className="w-[24px] h-[24px]" src={IMAGES.tiktok} alt="" />
          </div>
          <div className="flex items-center gap-3 mt-6">
            <img className="w-[20px] h-[20px]" src={IMAGES.copyright} alt="" />
            <p className="text-[#CBCBCB] font-normal text-xs">2023 Modimal. All Rights Reserved.</p>
          </div>
        </div>
        <div className="footerchatbox mt-[6rem] ml-[5rem]">
          <img src={IMAGES.footerchatbox} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
