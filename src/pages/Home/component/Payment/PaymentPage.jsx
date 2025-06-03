import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleExclamation, faCity, faEnvelope, faFileZipper, faHouse, faMobileScreenButton, faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { faFlag } from '@fortawesome/free-solid-svg-icons';
import IMAGES from '../../../../assets/images/projectImage';

const PaymentPage = () => {

    return (
        <>


            <div className='mx-auto flex w-[90%] '>
                <div className='w-[50%]'>
                    <h6 className='font-bold'>Billing address</h6>
                </div>

                <div className='w-[50%]'>
                    <h6 className='font-bold'>Payment</h6>
                </div>
            </div>



            <div className='bg-[#868686] w-full md:w-[1200px] h-[2px] mt-[16px]'></div>

            <div className=' container mx-auto grid grid-cols-1 md:grid-cols-2 md:max-w-[1200px] px-2'>
                <div className="left container mx-auto px-4 ">
                    <div className='container mx-auto  mt-[16px]'>
                        <div>
                            <p className='font-normal text-[#0C0C0C] flex gap-4 mt-[16px]'><input type="checkbox" className='scale-125' />Default (same as billing address)</p>
                        </div>
                        <div>
                            <p className='font-normal text-[#0C0C0C] flex gap-4 mt-[16px]'><input type="checkbox" className='scale-125' />Add An Alternative Delivery Address</p>
                        </div>
                    </div>

                    <div className=' container w-[350px] md:w-[400px] my-6'>
                        <div className=' relative'>
                            <input type="text" placeholder='Name' className='w-full border-2 border-gray-300  py-[12px] px-[36px] mt-[8px]' />
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

                <div className="right px-4">
                    <div className='mt-4'>
                        <p className='font-normal text-[16px]'>Please Choose Your Payment Method</p>
                    </div>
                    <div className='flex justify-between items-center gap-[2rem]  mt-[24px]'>
                        <img src={IMAGES.visa} alt="" className='cursor-pointer' />
                        <img src={IMAGES.International} alt="" className='cursor-pointer' />
                        <img src={IMAGES.Masterrcard} alt="" className='cursor-pointer' />
                        <img src={IMAGES.amex} alt="" className='cursor-pointer' />
                    </div>

                    <div className='flex flex-col gap-5'>
                        <div className='flex items-start gap-4 mt-[32px]'>
                            <div><span>Card Number*</span></div>
                            <div className='w-[500px]'> <input type="text" className='border-2 border-gray-300 w-full py-2' /></div>

                        </div>

                        <div className='flex items-center gap-8 mt-[24px]'>
                            <span>Expiry Date*</span>
                            <div className='flex  gap-3'>
                                <input type="text" placeholder='Month' className='border-2 border-gray-300 px-2 py-2 w-[105px]' />
                                <input type="text" placeholder='Year' className='border-2 border-gray-300 px-2 py-2 w-[105px]' />
                            </div>
                        </div>

                        <div className='flex items-center gap-4 mt-[24px]'>
                            <div> <span>expiry date*</span></div>
                            <div className='ml-[19px]'>
                                <input type="text" placeholder='' className='border-2 border-gray-300 px-8 py-2' />
                                <FontAwesomeIcon icon={faCircleExclamation} className='ml-2 scale-125' />
                                <a href="#" className='text-[#868686] underline ml-2'>What Is This?</a>
                            </div>

                        </div>
                        <div className='mt-[64px] w-[100%]'>
                            <button className='bg-[#5A6D57] py-3 w-full text-white'>Pay and place order</button>
                        </div>
                        <div>
                            <p className='capitalize'>by clicking on ‘pay and place order’,you agree (i) to make your purchease from global -e as marchant of record for this transaction, subject to global-e’s  term of sale;(ii) that your information will be handled by global-e in accordance with the global-e privacy policy; and (iii) that global-e will share your information (excluding the payment details)with modimal.</p>
                        </div>

                    </div>
                </div>
            </div>



        </>
    )
}

export default PaymentPage