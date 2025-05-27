import React, { useState } from "react";
import IMAGES from "../assets/images/projectImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [showmenu, setshowmenu] = useState(false)
  const [ismanuopen, setismanuopen] = useState(false)




  const tagglebutton = () => {
    setshowmenu(!showmenu)
  }
  return (
    <>

      <div className="header-wrapper">
        <div className="header-topline  py-3 flex justify-center items-center bg-[#5A6D57] text-white">
          Enjoy Free Shipping On All Orders
        </div>
        <div className="header-container flex justify-around p-[24px] items-center">
          <div className="left">
            <button onClick={() => setismanuopen(!ismanuopen)} className="block md:hidden">
              <FontAwesomeIcon icon={ismanuopen ? faTimes : faBars} />
            </button>
            <img className="w-[184px] h-[46px]" src={IMAGES.Weblogo} alt="" />
          </div>
          <div className="center hidden md:block">
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

            <div>
              <button onClick={tagglebutton} className="cursor-pointer">
                <FontAwesomeIcon
                  icon={showmenu ? faTimes : faMagnifyingGlass}
                />
              </button>
            </div>
            <img className="w-[24px] h-[24px]" src={IMAGES.headerIcon2} alt="" />
            <img className="w-[24px] h-[24px]" src={IMAGES.headerIcon4} alt="" />
            <img className="w-[24px] h-[24px]" src={IMAGES.headerIcon3} alt="" />
          </div>
        </div>
      </div>

      {
        showmenu && (
          <div className="relative w-[82%] mx-auto flex items-center justify-center mb-3">
            <div className="absolute left-3 flex items-center space-x-2">
              <FontAwesomeIcon icon={faMagnifyingGlass} className="text-[#868686] " />
              <span className="text-[#868686] text-[18px] font-medium">Search</span>
            </div>
            <input
              type="text"
              className="w-full border-b-2 border-gray-300 py-3  rounded-md"
            />
          </div>
        )
      }


    </>

  );
};

export default Header;
