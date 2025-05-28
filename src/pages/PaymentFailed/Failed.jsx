import React from 'react'

const Failed = () => {
    return (
        <>
            <div className='flex flex-col gap-5 items-center justify-center mt-[3rem]'>
                <div><i class="fa-solid fa-circle-exclamation text-[#C30000] text-3xl"></i></div>
                <h2 className="text-[#C30000] font-bold text-2xl sm:text-3xl md:text-[40px]">
                    Sorry, Payment Failed
                </h2>
                <p className='font-normal text-[15px] text-center px-8 text-[#0C0C0C] sm:text-[18px] md:text-xl'>
                    Unfortunately, your order Cannot Be Completed.
                </p>
                <p className='font-normal text-[14px] text-center px-8 text-[#0C0C0C] sm:text-[18px] md:text-xl'>
                    Please ensure that the billing address you provided is the same one where your debit/credit card is registered.
                </p>
                <p className='font-normal text-[14px] text-center px-8 text-[#0C0C0C] sm:text-[18px] md:text-xl'>
                    Alternatively, please try a different payment method.
                </p>
                <button className='bg-[#5A6D57] text-white py-2 w-[150px] cursor-pointer md:w-[300px]'>Pay Now</button>
                <button className='text-[#5A6D57] py-2 w-[150px] text-[12px] cursor-pointer md:w-[300px]'><i class="fa-solid fa-less-than mr-3"></i> Back to My Orders</button>
            </div>
        </>
    )
}

export default Failed
