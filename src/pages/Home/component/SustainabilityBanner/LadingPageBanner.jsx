import React from 'react'
import sustainability from '../../../../assets/images/sustainability.jpg'

const LadingPageBanner = () => {
  return (
    <>
      <div className="banner-wraper xs:w-[360px] my-6  w-[100%] h-[600px] bg-no-repeat bg-cover bg-center flex items-end justify-end" style={{ backgroundImage: `url(${sustainability})`}}>

        <div className=' md:px-[20px] mb-[95px] mr-[108px]'>
          <p className='leading-10 font-normal'>Stylish sustainability in clothing promotes eco-friendly <br /> choices for a greater future</p>
          <div className=' flex items-end justify-end mr-[43px] gap[12px]'>
            <button className=' bg-white py-3 px-16 font-normal cursor-pointer'>Sustainability</button>
          </div>
        </div>
      </div>

    </>
  )
}

export default LadingPageBanner