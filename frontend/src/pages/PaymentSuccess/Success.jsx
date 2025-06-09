import React from 'react'

const Success = () => {
  return (
  <>
   <div className='flex flex-col gap-5 items-center justify-center mt-[3rem]'>
      <div><i class="fa-regular fa-circle-check text-[#00966D] text-3xl"></i></div>
      <h2 className="text-[#00966D] font-bold text-2xl sm:text-3xl md:text-[40px]">Payment Successful</h2>
      <p className='font-normal text-[14px] text-center px-8 text-[#0C0C0C] sm:text-[18px] md:text-xl'>Thank you for choosing Modimal, Your order will be generated based on your delivery request. </p>
      <p className='font-normal text-[14px] px-8 text-[#0C0C0C] sm:text-[18px] md:text-xl'>The Receipt has been sent to your email.</p>
      <p className='font-normal text-[14px] text-[#404040] sm:text-[18px] md:text-lg'>Please Contact us for any query  </p>
      <p className='font-normal text-[14px] text-[#404040]'>+1(929)460-3208</p>
      <p className='font-normal text-[14px] text-[#0C0C0C]'>OR</p>
      <p className='font-normal text-[14px] text-[#404040]'>Hello @ modimal.com</p>
   </div>
  </>
  )
}

export default Success
