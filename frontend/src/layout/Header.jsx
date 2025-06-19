import React, { useState } from "react";
import IMAGES from "../assets/images/projectImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [showmenu, setshowmenu] = useState(false)
  const [ismanuopen, setismanuopen] = useState(false)
  const [isopenBag, setisopenBag] = useState(false)
  const navigate = useNavigate();




  const tagglebutton = () => {
    setshowmenu(!showmenu)
  }

  const openbag = () => {
    setisopenBag(!isopenBag)
  }

  const profile = () => {
    navigate('/profilepage')
  }
  return (
    <>

      <div className="header-wrapper">
        <div className="header-topline  py-3 flex justify-center items-center bg-[#5A6D57] text-white">
          Enjoy Free Shipping On All Orders
        </div>
        <div className="header-container flex justify-around p-[24px] items-center overflow-x-hidden">
          <div className="left flex items-center">
            <button onClick={() => setismanuopen(!ismanuopen)} className="block md:hidden ">
              <FontAwesomeIcon icon={ismanuopen ? faTimes : faBars} className="text-2xl" />
            </button>
            <img className="w-[184px] h-[46px]" src={IMAGES.Weblogo} alt="" />
          </div>
          <div className="center hidden md:block">
            <div className="nav-links">
              <ul>
                <li className="flex gap-[50px] text-[#404040]">
                  <Link to='/'>Collection</Link>
                  <Link to='/filtershoppage'>NewIn</Link>
                  <Link to='/modiweekpage'>ModiWeek</Link>
                  <Link to='/plussize'>Plus Size</Link>
                  <Link to='/sustainability'>Sutainiblity</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="right flex items-center gap-[24px] flex-nowrap">

            <div>
              <button onClick={tagglebutton} className="cursor-pointer">
                <FontAwesomeIcon
                  icon={showmenu ? faTimes : faMagnifyingGlass}
                  className="" />
              </button>
            </div>
            <div>
              <button onClick={profile} className="cursor-pointer">
                <FontAwesomeIcon icon={faUser} />
              </button>
            </div>
            <img className="w-[24px] h-[24px] " src={IMAGES.headerIcon4} alt="" />
            <div>
              <button onClick={openbag} className="cursor-pointer">
                <FontAwesomeIcon
                  icon={isopenBag ? faTimes : faBagShopping} />

              </button>
            </div>
          </div>
        </div>
      </div>

      {
        showmenu && (
          <div className="relative w-[82%] mx-auto flex items-center justify-center mb-3">
            <div className="absolute left-3 flex items-center space-x-2">
              <FontAwesomeIcon icon={faMagnifyingGlass} className="text-[#868686] " />

            </div>
            <input
              type="text" placeholder="Search..."
              className="w-full border-b-2 border-gray-300 py-3 px-8  rounded-md"
            />
          </div>
        )
      }

      {
        isopenBag && (
          <div className="relative">
            <div className="w-full lg:w-[50%] bg-white absolute z-1  right-1 top-0 p-4 sm:p-6  flex flex-col gap-6">
              <h5 className="font-bold text-lg sm:text-xl text-center">Your Cart</h5>
              {[...Array(1)].map((_, index) => (
                <div key={index} className="flex justify-between gap-4">
                  <div className="relative flex-shrink-0 w-24 sm:w-32 h-28 sm:h-36">
                    <img src={IMAGES.ModiweekTwo} alt="Wrap Top" className="w-full h-full" />
                    <p className="absolute bg-white py-1 px-2 top-2 right-2 text-xs sm:text-sm">1</p>
                  </div>
                  <div className="flex flex-col gap-4 flex-grow">
                    <h6 className="font-bold text-sm sm:text-base">Wrap Top</h6>
                    <div className="text-xs sm:text-sm">
                      <p>Size: S</p>
                      <p>Color: White</p>
                    </div>
                    <div className="flex items-center justify-center bg-[#D1D9CF] px-1 py-1 w-fit">
                      <button className="text-lg sm:text-xl px-2 cursor-pointer">-</button>
                      <span className="text-xs sm:text-sm px-2">1</span>
                      <button className="text-lg sm:text-xl px-2 cursor-pointer">+</button>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between items-end">
                    <FontAwesomeIcon
                      icon={faTimes}
                      className="cursor-pointer text-[#868686] "
                    />
                    <p className="font-bold text-sm sm:text-base">$160</p>
                  </div>
                </div>
              ))}

              <div className="flex justify-center items-center ">
                <button className="bg-[#5A6D57] text-white w-[80%] py-2 mt-[32px] cursor-pointer font-normal">Check Out</button>
              </div>

            </div>
          </div>
        )
      }

    </>

  );
};

export default Header;
