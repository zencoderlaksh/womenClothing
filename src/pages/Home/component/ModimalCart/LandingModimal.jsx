import React from 'react'
import IMAGES from '../../../../assets/images/projectImage'

const LandingModimal = () => {
    return (
        <>
            <div className="text-content sm: mx-auto  w-[95%] mt-[88px]">
                <div className="left flex justify-start items-start">
                    <h3 className=' text-3xl font-bold mb-[24px]'>Follow us @modimal</h3>
                </div>

                <div className='grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-0'>
                    <div className=" ">
                        <img className='w-[603px] h-[751px]' src={IMAGES.ModimalOne} alt="" />
                    </div>
                    <div className="grid grid-cols-2" >
                        <img className='w-[310px] h-[375px]' src={IMAGES.ModimalTwo} alt="" />
                        <img className='w-[310px] h-[375px]' src={IMAGES.ModimalThree} alt="" />
                        <img className='w-[310px] h-[375px]' src={IMAGES.ModimalFour} alt="" />
                        <img className='w-[310px] h-[375px]' src={IMAGES.ModimalFive} alt="" />
                    </div>
                </div>

            </div>



        </>
    )
}

export default LandingModimal