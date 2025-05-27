import React from 'react'
import IMAGES from '../../assets/images/projectImage'


const Sustainliblity = () => {
  return (
    <>
      <div className='mt-5'>
        <img src={IMAGES.susbanner} alt="" />
      </div>

      <div className='w-[90%] mx-auto'>
        <div>
          <h3 className='text-3xl font-semibold text-[#0C0C0C] mt-10'>Sustainability At Modimal</h3>
          <p className='text-xl/8 font-normal text-[#0C0C0C] mt-8'>At Modimal, Sustainability Is At The Heart Of Everything We Do. Our Brand Identity, Characterized By Its Simplicity And Elegance, Is A Reflection Of Our Commitment To A More Sustainable Future.</p>
        </div>

        <div className='mt-10'>
          <div>
            <h4 className='text-2xl font-bold tetx-[#0C0C0C]'>Our Mission, The Modimal Six:</h4>
          </div>

          <div className='grid grid-cols-2 gap-40 mt-8'>
            <div>
              <h5 className='font-bold text-xl text-[#0C0C0C]'>Minimalism</h5>
              <p className='text-lg/8 font-normal text-[#0C0C0C] mt-5'>We Believe Less Is More. Our Thoughtfully Design Pieces Embrace Minimalism Ensuring That Garment Becomes A Versatile And Timeless Addition To Your Wardrobe. By Choosing Quality Over Quantity, We Encourage Conscious Consumption. </p>
            </div>
            <div>
              <h5 className='font-bold text-xl text-[#0C0C0C]'>Circular</h5>
              <p className='text-lg/8 font-normal text-[#0C0C0C] mt-5'>Embracing The Circular Economy, We Design With Longevity In Mind. Our Pieces Are Intended To Be Treasured For Years, Encouraging A Shift Away From Disposable Fashion. When You Invest In Our Clothing, You're Investing In A More Sustainable Future.</p>
            </div>
            <div className='mt-[-120px]'>
              <h5 className='font-bold text-xl text-[#0C0C0C]'>Ethical</h5>
              <p className='text-lg/8 font-normal text-[#0C0C0C] mt-5'> Every Stitch Tells A Story. Our Garments Are Meticulously Crafted By Skilled Artisans Who Share Our Values Of Ethical And Fair Labor Practices. This Dedication To Craftsmanship Not Only Ensures Exceptional Quality But Also Supports A Network Of Talented Individuals. </p>
            </div>
            <div className='mt-[-120px]'>
              <h5 className='font-bold text-xl text-[#0C0C0C]'>Transparency</h5>
              <p className='text-lg/8 font-normal text-[#0C0C0C] mt-5'> We Value Openness And Transparency. We're On A Journey To Continuously Improve Our Practices, And We're Committed To Sharing Our Progress With You. From Sourcing To Production, We Want You To Know The Story Behind Each Piece You Wear. We Are Updating All Information Very Six Months.</p>
            </div>
            <div className='mt-[-120px]'>
              <h5 className='font-bold text-xl text-[#0C0C0C]'>Eco - Freindly Materials</h5>
              <p className='text-lg/8 font-normal text-[#0C0C0C] mt-5'> We Are Dedicated To Reducing Our Environmental Impact. Our Clothing Is Made Using Sustainable Materials, Carefully Sourced To Minimize Harm To The Planet. From Organic Fabrics To Innovative Recycled Materials, We Aim To Leave A Lighter Footprint. </p>
            </div>
            <div className='mt-[-120px]'>
              <h5 className='font-bold text-xl text-[#0C0C0C]'>Community And Empowerment</h5>
              <p className='text-lg/8 font-normal text-[#0C0C0C] mt-5'> Our Brand Is A Part Of A Community That Shares A Vision For A Better World. Through Collaborations And Initiatives, We Aim To Inspire And Empower Individuals To Make Conscious Choices And Contribute To Positive Change.</p>
            </div>

          </div>
          <div className='mt-10'>
            <p className='font-normal text-lg/8 tetx-[#0C0C0C]'>Guided By Our Core Missions, We Intertwine Sustainability Into Every Thread Of Our Brand, From Thoughtfully Sourced Materials And Innovative Manufacturing Process To Nurturing Product Longevity And Embracing Eco-Friendly Packaging – All Harmonizing To Create A More Meaningful And Responsible Approach To Fashion.</p>
          </div>
        </div>

        <div>
          <div className='flex justify-between mt-10'>
            <div>
              <img className='w-[500px] h-[400px] mt-[100px]' src={IMAGES.susOne} alt="" />
              <button className='w-[500px] py-2 mt-3 bg-[#5A6D57] text-[#FFFFFF] font-normal text-base'>Processing</button>
            </div>
            <div>
              <img className='w-[500px] h-[600px]' src={IMAGES.susTwo} alt="" />
              <button className='w-[500px] py-2 mt-3 bg-[#5A6D57] text-[#FFFFFF] font-normal text-base'>Materials</button>
            </div>
          </div>
          <div className='flex justify-between'>
            <div>
              <img className='w-[500px] h-[600px]' src={IMAGES.susThree} alt="" />
              <button className='w-[500px] py-2 mt-3 bg-[#5A6D57] text-[#FFFFFF] font-normal text-base'>Packaging </button>
            </div>
            <div>
              <img className='w-[500px] h-[400px] mt-[100px]' src={IMAGES.susFour} alt="" />
              <button className='w-[500px] py-2 mt-3 bg-[#5A6D57] text-[#FFFFFF] font-normal text-base'>Product Caring</button>
            </div>
          </div>
        </div>
        <div>
          <p className='font-normal text-lg/8 text-[#0C0C0C] mt-10'>"With Every Step, Our Quest For Sustainability Is Fortified By Our Trusted Suppliers, United In Our Shared Dedication To Ethical Craftsmanship And A More Conscious Future."</p>
        </div>

        <div className='mt-10'>
          <h4 className='text-2xl font-bold'>People Beyond Us</h4>
          <div className='mt-8'>
            <div className='flex gap-4'>
              <img className='w-[250px] h-[280px]' src={IMAGES.susFive} alt="" />
              <img className='w-[250px] h-[280px]' src={IMAGES.susSix} alt="" />
              <img className='w-[605px] h-[280px]' src={IMAGES.susSeven} alt="" />
            </div>
            <div className='flex justify-between gap-3 mt-5'>
              <img className='w-[400px] h-[280px]' src={IMAGES.susEight} alt="" />
              <img className='w-[200px] h-[280px]' src={IMAGES.susNine} alt="" />
              <img className='w-[200px] h-[280px]' src={IMAGES.susTen} alt="" />
              <img className='w-[288px] h-[280px]' src={IMAGES.susEleven} alt="" />
            </div>
          </div>
        </div>
        <div className='flex items-center justify-center'>
          <button className='w-[600px] mt-5 py-2 mb-5 bg-[#5A6D57] text-[#FFFFFF] cursor-pointer'>Our Suppliers</button>
        </div>
        <div>
          <p className='font-normal text-lg/8 text-[#0C0C0C] mt-5 mb-10'>
            With Modimal, You're Not Just Wearing Fashion – You're Making A Statement. A Statement That Elegance And Sustainability Can Coexist, Shaping A More Responsible And Beautiful Future For Us All.</p>
        </div>
      </div>
    </>
  )
}

export default Sustainliblity
