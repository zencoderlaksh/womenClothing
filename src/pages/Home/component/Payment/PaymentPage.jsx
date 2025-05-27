import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleExclamation, faCity, faEnvelope, faFileZipper, faHouse, faMobileScreenButton, faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { faFlag } from '@fortawesome/free-solid-svg-icons';
import IMAGES from '../../../../assets/images/projectImage';

const PaymentPage = () => {

    return (
        <>

            <div className='container mx-auto flex gap-[393px]'>
                <div>
                    <h6 className='font-bold'>Billing address</h6>
                </div>

                <div>
                    <h6 className='font-bold'>Payment</h6>
                </div>
            </div>

            <div className='bg-[#868686] h-[2px]'></div>

            <div className='w-[90%]  flex justify-center'>
                <div className="left container mx-auto w-[50%]">
                    <div className='container mx-auto  mt-[16px]'>
                        <div>
                            <p className='font-normal text-[#0C0C0C] flex gap-4 mt-[16px]'><input type="checkbox" className='scale-125' />Default (same as billing address)</p>
                        </div>
                        <div>
                            <p className='font-normal text-[#0C0C0C] flex gap-4 mt-[16px]'><input type="checkbox" className='scale-125' />Add An Alternative Delivery Address</p>
                        </div>
                    </div>

                    <div className=' container w-[400px] my-6'>
                        <div className=' relative'>
                            <input type="text" placeholder='Name' className='w-full border-2 border-gray-300 py-[12px] px-[36px] mt-[8px]' />
                            <FontAwesomeIcon icon={faUserAlt} className='absolute top-6.5 left-3' />
                        </div>

                        <div className=' relative'>
                            <input type="email" placeholder='Email' className='w-full border-2 border-gray-300 py-[12px] px-[36px] mt-[8px]' />
                            <FontAwesomeIcon icon={faEnvelope} className='absolute top-6.5 left-3' />
                        </div>

                        <div className=' relative'>
                            <input type="text" placeholder='Country' className='w-full border-2 border-gray-300 py-[12px] px-[36px] mt-[8px]' />
                            <FontAwesomeIcon icon={faFlag} className='absolute top-6.5 left-3' />
                        </div>


                        <div className=' relative'>
                            <input type="text" placeholder='Address Line1' className='w-full border-2 border-gray-300 py-[12px] px-[36px] mt-[8px]' />
                            <FontAwesomeIcon icon={faHouse} className='absolute top-6.5 left-3' />
                        </div>


                        <div className=' relative'>
                            <input type="text" placeholder='Address Line1' className='w-full border-2 border-gray-300 py-[12px] px-[36px] mt-[8px]' />
                            <FontAwesomeIcon icon={faHouse} className='absolute top-6.5 left-3' />
                        </div>



                        <div className=' relative'>
                            <input type="text" placeholder='City / Suburb' className='w-full border-2 border-gray-300 py-[12px] px-[36px] mt-[8px]' />
                            <FontAwesomeIcon icon={faCity} className='absolute top-6.5 left-3' />
                        </div>

                        <div className=' relative'>
                            <input type="text" placeholder='Zip / Postcode' className='w-full border-2 border-gray-300 py-[12px] px-[36px] mt-[8px]' />
                            <FontAwesomeIcon icon={faFileZipper} className='absolute top-6.5 left-3' />
                        </div>

                        <div className=' relative'>
                            <input type="text" placeholder='Phone' className='w-full border-2 border-gray-300 py-[12px] px-[36px] mt-[8px]' />
                            <FontAwesomeIcon icon={faMobileScreenButton} className='absolute top-6.5 left-3' />
                        </div>
                    </div>
                </div>

                <div className="right">
                    <div>
                        <p>please choose your payment method</p>
                    </div>
                    <div className='flex justify-between items-center gap-[3rem] mt-[24px]'>
                        <img src={IMAGES.visa} alt="" />
                        <img src={IMAGES.International} alt="" />
                        <img src={IMAGES.Masterrcard} alt="" />
                        <img src={IMAGES.amex} alt="" />
                    </div>

                    <div className='flex items-center gap-4 mt-[32px]'>
                        <span>Card number*</span>
                        <input type="text" className='border-2 border-gray-300 px-8 py-2' />

                    </div>

                    <div className='flex justify-between items-center gap-4 mt-[24px]'>
                        <span>expiry date*</span>
                        <input type="text" placeholder='Month' className='border-2 border-gray-300 px-8 py-2' />
                        <input type="text" placeholder='Year' className='border-2 border-gray-300 px-8 py-2' />
                    </div>

                    <div className='flex items-center gap-4 mt-[24px]'>
                        <span>expiry date*</span>
                        <input type="text" placeholder='' className='border-2 border-gray-300 px-8 py-2' />
                        <FontAwesomeIcon icon={faCircleExclamation} />
                        <a href="#" className='text-[#868686] underline'>what is this?</a>

                    </div>
                    <div className='mt-[64px] w-[100%]'>
                        <button className='bg-[#5A6D57] py-3 w-full text-white'>Pay and place order</button>
                    </div>
                   
                </div>
            </div>



        </>
    )
}

export default PaymentPage