import React from 'react'

const Contact = () => {
    return (
        <>
            <div className='w-[90%] mx-auto'>
                <div className='mt-10'>
                    <h3 className='font-semibold text-3xl text-[#0C0C0C]'>Contact Us</h3>
                </div>
                <div className='bg-[#F0F2EF] py-[8px] px-[16px] mt-10'>
                    <p className='capitalize font-normal text-base/7 text-[#0C0C0C]'>
                        We always love hearing from our customers! Please do not hesitate to contact us should you have any questions regarding our products and sizing recommendations or inquiries about your current order.
                    </p>
                    <p className='capitalize font-normal text-base/7 text-[#0C0C0C] mt-4'>
                        Contact our Customer Care team through the contact form below, email us at hello@modimal.com or live chat with us via our chat widget on the bottom right hand corner of this page.
                    </p>
                    <p className='capitalize font-normal text-base/7 text-[#0C0C0C] mt-4'>
                        We will aim to respond to you within 1-2 business days.
                    </p>
                </div>
                <div className='w-[80%] mx-auto mt-10'>
                    <div className='flex items-center gap-5'>
                        <i class="fa-regular fa-envelope text-[#0C0C0C] text-xl"></i> <h4 className='font-bold text-2xl'>Write Us</h4>
                    </div>
                    <div>
                        <h5 className='font-bold text-xl text-[#0C0C0C] mt-5'>Your Information</h5>
                    </div>
                    <div className='flex flex-col mt-5 gap-5'>
                        <input type="text" placeholder='Full Name' className='border-b-1 py-2 pl-5 text-[#606060] border-gray-400' />
                        <input type="email" placeholder='Email' className='border-b-1 py-2 pl-5 text-[#606060] border-gray-400' />
                        <input type="text" placeholder='Subject' className='border-b-1 py-2 pl-5 text-[#606060] border-gray-400' />
                        <input type="text" placeholder='Order Number' className='border-b-1 py-2 pl-5 text-[#606060] border-gray-400' />
                        <input type="text" placeholder='Message' className='border-b-1 py-2 pl-5 text-[#606060] border-gray-400' />
                        <p className='font-normal text-[#0C0C0C] text-[14px]flex items-center'><input type="checkbox" /> I Have Read And Understood The Contact Us Privacy And Policy.</p>

                        <div className='flex justify-end'>
                            <button className='bg-[#5A6D57] text-white py-2 w-[288px] cursor-pointer'>Send</button>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col gap-4 sm:flex-row justify-between mt-15 mb-10'>
                    <div className='bg-[#F0F2EF] flex flex-col justify-center items-center p-[16px] gap-[10px]'>
                        <div><i class="fa-regular fa-message"></i></div>
                        <div><h6 className='font-bold text-[16px]'>Chat with us</h6></div>
                        <div><p className='font-normal text-[12px]'>We Are Here And Ready To Chat</p></div>
                        <div><button className='border-1 border-[#5A6D57] text-[#5A6D57] w-[320px] py-2 cursor-pointer'>Start chat</button></div>
                    </div>
                    <div className='bg-[#F0F2EF] flex flex-col justify-center items-center p-[16px] gap-[10px]'>
                        <div><i class="fa-regular fa-user"></i></div>
                        <div><h6 className='font-bold text-[16px]'>Call us</h6></div>
                        <div><p className='font-normal text-[12px]'>We're Here To Talk To You</p></div>
                        <div><button className='border-1 border-[#5A6D57] text-[#5A6D57] w-[320px] py-2 cursor-pointer'>+1(929)460-3208</button></div>
                    </div>
                    <div className='bg-[#F0F2EF] flex flex-col justify-center items-center p-[16px] gap-[10px]'>
                        <div><i class="fa-regular fa-envelope"></i></div>
                        <div><h6 className='font-bold text-[16px]'>Email Us</h6></div>
                        <div><p className='font-normal text-[12px]'>You Are Welcome To Send Us An Email</p></div>
                        <div><button className='border-1 border-[#5A6D57] text-[#5A6D57] w-[320px] py-2 cursor-pointer'>Send Email</button></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
