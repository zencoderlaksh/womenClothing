import React from 'react'
import herobanner from '../../../../assets/images/herobanner.png';
const LandingpageHeroBanner = () => {
    return (
        <>
            <div className="hero-banner relative sm:w-[100%]  mx-auto h-screen bg-cover bg-center flex items-center justify-center flex-wrap " style={{ backgroundImage: `url(${herobanner})` }}>

                <div className='absolute bottom-[10rem] left-8 text-2xl font-normal leading-14 ml-[108px] '>
                    <h4 className='italic font-bold'>Elegance in simplicity,</h4>
                    <h4 className='italic font-bold'>Earth’s harmony</h4>
                </div>

                <div className="btn absolute bottom-[4rem] left-[4rem] ml-[80px]">
                    <button className='bg-white px-16 py-3 mb-8 font-normal'>New IN</button>
                </div>

            </div>

        </>
    )
}

export default LandingpageHeroBanner