import React from "react";
import IMAGES from "../assets/images/projectImage";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="header-topline  py-3 flex justify-center items-center bg-[#5A6D57] text-white">
        Enjoy Free Shipping On All Orders
      </div>
      <div className="header-container flex justify-around p-[24px] items-center">
        <div className="left">
          <img className="w-[184px] h-[46px]" src={IMAGES.Weblogo} alt="" />
        </div>
        <div className="center">
          <div className="nav-links">
            <ul>
              <li className="flex gap-[50px] text-[#404040]">
                <a href="">Collection</a>
                <a href="">NewIn</a>
                <a href="">ModiWeek</a>
                <a href="">Plus Size</a>
                <a href="">Sutainiblity</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="right flex items-center gap-[24px]">
          <img className="w-[24px] h-[24px]" src={IMAGES.headerIcon1} alt="" />
          <img className="w-[24px] h-[24px]" src={IMAGES.headerIcon2} alt="" />
          <img className="w-[24px] h-[24px]" src={IMAGES.headerIcon4} alt="" />
          <img className="w-[24px] h-[24px]" src={IMAGES.headerIcon3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
