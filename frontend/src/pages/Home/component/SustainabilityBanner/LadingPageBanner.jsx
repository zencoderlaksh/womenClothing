import React from 'react'
import sustainability from '../../../../assets/images/sustainability.jpg'

const LadingPageBanner = () => {
  return (
    <>
      <div className="banner-wraper xs:w-[360px] my-6  w-[100%] h-[600px] bg-no-repeat bg-cover bg-center flex items-end justify-end" style={{ backgroundImage: `url(${sustainability})`}}>

        <div className=' text-center md:px-[20px] mb-[3rem] mr-[3rem] md:text-start'>
          <p className='leading-8 capitalize font-normal'>Stylish sustainability in clothing promotes eco-friendly <br /> choices for a greater future</p>
          <div className=' flex items-end justify-end mr-[43px] gap[12px]'>
            <button className=' bg-white py-3 px-16 font-normal cursor-pointer'>Sustainability</button>
          </div>
        </div>
      </div>

    </>
  )
}

export default LadingPageBanner