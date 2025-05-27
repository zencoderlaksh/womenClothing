import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faLessThan } from '@fortawesome/free-solid-svg-icons'
import { faMobileScreenButton } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import IMAGES from '../../../../assets/images/projectImage'

const InfoPage = () => {
    return (
        <>
            <div className=' container mx-auto w-full flex justify-between '>
                <div className="left w-[600px] mt-[4rem] ">

                    <div className="wrapper flex justify-between">
                        <div>
                            <p className='font-normal text-[18px]'>contact</p>

                        </div>
                        <div>
                            <p>Have An Account?<a href="#" className='text-[#868686]'>Log in</a></p>
                        </div>
                    </div>
                    <div className='relative'>
                        <input type="Email" placeholder='Email' className='border-2 border-gray-300 rounded-[3px] w-full py-3 px-6 mt-3 ' />
                        <FontAwesomeIcon icon={faUser} className='absolute top-7 left-2 text-[#868686]'  />
                       

                    </div>
                    <div className='flex items-center mt-3'>
                        <p className='flex gap-2'><input type="checkbox" className='cursor-pointer scale-125' />Email Me With News and Offers</p>
                    </div>

                    <div className='flex mt-[24px]'>
                        <p className='text-[18px] font-normal'>Shipping Address</p>
                    </div>


                    <div className='shipping-address-info w-[600px]'>
                        <div className='relative flex justify-between items-center'>
                            <input className=' border-2 border-gray-300 w-full py-2 px-3 flex items-center ' type="text"
                                placeholder='Country/region' />

                            <FontAwesomeIcon icon={faTimes} className='absolute right-3' />
                        </div>

                        <div className='flex gap-4 mt-3'>
                            <input className='border-2 border-gray-300 py-2 px-3 w-full' type="text" placeholder='First Name' />
                            <input className='border-2 border-gray-300 py-2 px-3 w-full' type="text" placeholder='Last Name' />
                        </div>

                        <div className='relative flex justify-between items-center'>
                            <input className=' border-2 border-gray-300 w-full py-2 px-3 mt-3 ' type="text"
                                placeholder='Company(Optional)' />
                        </div>

                        <div className='relative flex justify-between items-center'>
                            <input className=' border-2 border-gray-300 flex items-center w-full py-2 px-3 mt-3 ' type="text"
                                placeholder='Address' />

                            <FontAwesomeIcon icon={faMagnifyingGlass} className='absolute right-3 top-6' />
                        </div>

                        <div className='relative flex justify-between items-center'>
                            <input className=' border-2 border-gray-300 w-full py-2 px-3 mt-3 ' type="text"
                                placeholder='apartment,suite,etc.(optional)' />
                        </div>

                        <div className='flex gap-4 mt-3'>
                            <input className='border-2 border-gray-300 py-2 px-3 w-full' type="text" placeholder='postal code' />
                            <input className='border-2 border-gray-300 py-2 px-3 w-full' type="text" placeholder='city' />
                        </div>
                        <div className='relative flex justify-between items-center'>
                            <input className=' border-2 border-gray-300 w-full py-2 px-3 mt-3 flex items-center' type="text"
                                placeholder='Address' />

                            <FontAwesomeIcon icon={faMobileScreenButton} className='absolute right-3 top-6' />
                        </div>


                        <div className='flex items-center mt-3'>
                            <p className='flex gap-2'><input type="checkbox" className='cursor-pointer scale-125' />save this information for next time</p>
                        </div>
                    </div>


                    <div>
                        <div className='flex justify-between items-center'>
                            <button className='flex gap-2 items-center'> <FontAwesomeIcon icon={faLessThan} className='text-[#5A6D57]' />Return to cart</button>
                            <button className='bg-[#5A6D57] text-white px-5 py-2'>Continue to shipping</button>
                        </div>
                    </div>
                </div>

                <div className="right container bg-[#F0F2EF] w-[628px] px-4">
                    <div className='my-5'>
                        <h5 className='fon-bold text-[20px] text-center'>Your Cart</h5>
                    </div>

                    <div className='w-[500px]  flex justify-between'>
                        <div className='img relative w-[142px] h-[163px] '>
                            <img src={IMAGES.ModiweekTwo} alt="" className='w-full' />
                            <p className='absolute bg-white py-2 px-3 top-4 right-3'>1</p>
                        </div>
                        <div className='flex flex-col gap-6 mr-[12rem]'>
                            <div>
                                <h6 className='font-bold text-[16px]'>wrap top</h6>
                            </div>
                            <div>
                                <p>Size: S</p>
                                <p>Color: White</p>

                            </div>
                            <div className='bg-[#D1D9CF] flex items-center justify-center gap-4'>
                                <button className='text-2xl'>-</button>
                                <span>1</span>
                                <button className='text-2xl'>+</button>

                            </div>

                        </div>
                        <div className=' flex flex-col gap-[7rem]'>
                            <FontAwesomeIcon icon={faTimes} />
                            <div>
                                <p className='font-bold text-[16px]'> $160</p>
                            </div>
                        </div>
                    </div>


                    <div className='mt-[10rem] flex flex-col gap-3 '>
                        <div className='flex justify-between items-center'>
                            <p>Subtotal (3)</p>
                            <p>$485.00</p>
                        </div>

                        <div className='flex justify-between items-center'>
                            <p>Tax</p>
                            <p>$38.80</p>
                        </div>

                        <div className='flex justify-between items-center'>
                            <p>shipping</p>
                            <p>Free</p>
                        </div>
                        <div className='flex justify-between items-center'>
                            <p>Total Orders:</p>
                            <p>$523.80</p>
                        </div>

                        <div>
                            <p>The total amount you pay includes all applicable customs duties & taxes. We guarantee no additional charges on delivery</p>
                        </div>
                    </div>
                </div>



            </div>
        </>
    )
}

export default InfoPage