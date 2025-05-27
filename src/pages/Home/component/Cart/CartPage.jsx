import React from 'react'
import IMAGES from '../../../../assets/images/projectImage'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const CartPage = () => {
    return (
        <>
            <div className=' mx-auto flex justify-between items-center w-[90%]'>
                <div className='flex  items-center gap-[40px]'>
                    <button className='text-[#5A6D57] ml-[4rem]'>Back</button>
                    <h3 className='text-[32px] font-bold'>Your Cart</h3>
                </div>

                <div>
                    <p>continue shopping</p>
                </div>
            </div>

            <div className=' mx-auto w-[90%] flex justify-between items-center'>
                <div>
                    <p className='font-normal text-[18px]'>order summary</p>
                </div>

                <div>
                    <ul className='flex items-center gap-[14rem]'>
                        <li>Price</li>
                        <li>Quantity</li>
                        <li>Total</li>
                    </ul>
                </div>
            </div>
            <div className='bg-[#868686] h-[1px] w-[90%] mx-auto my-4'></div>
            <div className='w-[90%] mx-auto flex justify-between'>
                <div className='left'>
                    <div className='flex justify-between w-[600px]'>
                        <div className='image'>
                            <img className='w-[143px] h-[162px]' src={IMAGES.ModiweekOne} alt="" />
                        </div>
                        <div>
                            <div className='mt-2'>
                                <h6 className='font-bold text-[16px]'>Wrap Top</h6>
                            </div>
                            <div className='w-[352px] mr-[3rem] pt-3'>
                                <p>Size:S</p>
                                <p className='mt-3'>Color:White</p>
                            </div>
                        </div>
                        <div className='mt-4'>
                            <FontAwesomeIcon icon={faTimes} />
                        </div>
                    </div>
                    <div className='flex justify-between w-[600px]'>
                        <div className='image'>
                            <img className='w-[143px] h-[162px]' src={IMAGES.ModiweekOne} alt="" />
                        </div>
                        <div>
                            <div className='mt-2'>
                                <h6 className='font-bold text-[16px]'>Wrap Top</h6>
                            </div>
                            <div className='w-[352px] mr-[3rem] pt-3'>
                                <p>Size:S</p>
                                <p className='mt-3'>Color:White</p>
                            </div>
                        </div>
                        <div className='mt-4'>
                            <FontAwesomeIcon icon={faTimes} />
                        </div>
                    </div>
                    <div className='flex justify-between w-[600px]'>
                        <div className='image'>
                            <img className='w-[143px] h-[162px]' src={IMAGES.ModiweekOne} alt="" />
                        </div>
                        <div>
                            <div className='mt-2'>
                                <h6 className='font-bold text-[16px]'>Wrap Top</h6>
                            </div>
                            <div className='w-[352px] mr-[3rem] pt-3'>
                                <p>Size:S</p>
                                <p className='mt-3'>Color:White</p>
                            </div>
                        </div>
                        <div className='mt-4'>
                            <FontAwesomeIcon icon={faTimes} />
                        </div>
                    </div>

                </div>

                <div className="right">

                    <div className='flex justify-between gap-[10rem]'>
                        <div>
                            $160.00
                        </div>
                        <div className='bg-[#D1D9CF] flex gap-4 items-center px-2 ' >
                            <button className='text-2xl cursor-pointer'>-</button>
                            <span className='text-[16px]'>1</span>
                            <button className='text-2xl cursor-pointer'>+</button>
                        </div>

                        <div>
                            $160.00
                        </div>
                    </div>

                    <div className='h-[1px] bg-[#868686] mt-4'></div>


                    <div className='w-[600px] flex flex-col gap-3 mt-4'>
                        <div className='flex justify-between'>
                            <p>Subtotal (3)</p>
                            <p>$485.00</p>
                        </div>
                        <div className='flex justify-between'>
                            <p>Tax</p>
                            <p>$38.80</p>
                        </div>

                        <div className='flex justify-between'>
                            <p>  shipping</p>
                            <p>Free</p>
                        </div>

                        <div className='flex justify-between'>
                            <p>  Total Orders:</p>
                            <p>$523.80</p>
                        </div>
                        <div>
                            <p>The total amount you pay includes all applicable customs duties & taxes. We guarantee no additional charges on delivery</p>
                        </div>
                        <div className='flex justify-end items-end'>
                            <button className='bg-[#5A6D57] px-[3.4rem] py-2 text-white'>Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartPage