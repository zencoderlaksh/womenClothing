import React from 'react'

const Failed = () => {
    return (
        <>
            <div className='flex flex-col gap-5 items-center justify-center mt-[3rem]'>
                <div><i class="fa-solid fa-circle-exclamation text-[#C30000] text-3xl"></i></div>
                <h2 className="text-[#C30000] font-bold text-2xl sm:text-3xl md:text-[40px]">
                    Sorry, Payment Failed
                </h2>
                <p className="font-normal text-base sm:text-lg md:text-xl text-[#0C0C0C]">
                    Unfortunately, your order Cannot Be Completed.
                </p>
                <p className="font-normal text-base sm:text-lg md:text-xl mx-auto text-[#0C0C0C]">
                    Please ensure that the billing address you provided is the same one where your debit/credit card is registered.
                </p>
                <p className="font-normal text-base sm:text-lg md:text-xl text-[#0C0C0C]">
                    Alternatively, please try a different payment method.
                </p>
                <button className='bg-[#5A6D57] text-white py-2 w-[300px] cursor-pointer'>Pay Now</button>
                <button className='text-[#5A6D57] py-2 cursor-pointer'><i class="fa-solid fa-less-than mr-3"></i> Back to My Orders</button>
            </div>
        </>
    )
}

export default Failed
