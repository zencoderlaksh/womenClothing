import React from 'react'

const Success = () => {
  return (
  <>
   <div className='flex flex-col gap-5 items-center justify-center mt-[3rem]'>
      <div><i class="fa-regular fa-circle-check text-[#00966D] text-3xl"></i></div>
      <h2 className="text-[#00966D] font-bold text-2xl sm:text-3xl md:text-[40px]">Payment Successful</h2>
      <p className='font-normal text-xl text-[#0C0C0C]'>Thank you for choosing Modimal, Your order will be generated based on your delivery request. </p>
      <p className='font-normal text-xl text-[#0C0C0C]'>The Receipt has been sent to your email.</p>
      <p className='font-normal text-lg text-[#404040]'>Please Contact us for any query  </p>
      <p className='font-normal text-[14px] text-[#404040]'>+1(929)460-3208</p>
      <p className='font-normal text-[14px] text-[#0C0C0C]'>OR</p>
      <p className='font-normal text-[14px] text-[#404040]'>Hello @ modimal.com</p>
   </div>
  </>
  )
}

export default Success
