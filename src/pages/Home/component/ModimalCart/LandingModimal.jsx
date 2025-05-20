import React from 'react'
import IMAGES from '../../../../assets/images/projectImage'

const LandingModimal = () => {
    return (
        <>
            <div className="text-content sm: mx-auto  w-[74%] flex items-center justify-between mt-[88px]">
                <div className="left">
                    <h3 className=' text-3xl font-bold mb-[24px]'>Follow us @modimal</h3>
                </div>

            </div>

            <div className="images-container  flex justify-center items-center flex-wrap mb-[48px]">
                <div className="image-left ">
                    <img src={IMAGES.ModimalOne} alt="" />
                </div>
                <div className="image-right  w-[40%] flex items-center flex-wrap">
                    <img src={IMAGES.ModimalTwo} alt="" />
                    <img src={IMAGES.ModimalThree} alt="" />
                    <img src={IMAGES.ModimalFour} alt="" />
                    <img src={IMAGES.ModimalFive} alt="" />
                </div>
            </div>

        </>
    )
}

export default LandingModimal