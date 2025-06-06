import React from 'react';
import IMAGES from '../../../../assets/images/projectImage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const CartPage = () => {
    return (
        <>

            <div className="container mx-auto flex flex-col gap-4 px-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6 md:max-w-[1200px] md:gap-8">
                <div className="flex items-center gap-4 sm:gap-8">
                    <button className="text-[#5A6D57] text-sm sm:text-base md:text-lg ">Back</button>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">Your Cart</h3>
                </div>
                <p className="text-xs sm:text-sm md:text-base text-gray-600  sm:block">
                    Continue Shopping
                </p>
            </div>


            <div className="container mx-auto px-4 py-4 sm:py-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:w-[95%] mx-auto">
                    <p className="text-base sm:text-lg font-medium">Order Summary</p>
                    <ul className="hidden sm:flex justify-between sm:justify-end gap-4 sm:gap-8 md:gap-[8rem] text-xs sm:text-sm md:text-base">
                        <li className="w-20 text-center">Price</li>
                        <li className="w-20 text-center">Quantity</li>
                        <li className="w-20 text-center">Total</li>
                    </ul>
                </div>
            </div>
            <div className="h-[1px] bg-[#868686] w-full max-w-[90%] mx-auto my-2 sm:my-4"></div>


            <div className="container mx-auto flex flex-col lg:flex-row justify-between px-4 gap-6 sm:gap-8 md:gap-10 max-w-[90%] md:max-w-[1200px]">

                <div className="flex flex-col gap-6 w-full lg:w-3/5">
                    {[...Array(3)].map((_, index) => (
                        <div key={index} className="flex items-start justify-between w-full gap-4">
                            <div>
                                <img
                                    className="w-24 h-28 sm:w-32 sm:h-36 md:w-36 md:h-40  "
                                    src={IMAGES.ModiweekOne}
                                    alt="Wrap Top"
                                />
                            </div>
                            <div className="flex flex-col flex-grow max-w-[70%] sm:max-w-[60%]">
                                <h6 className="font-bold text-sm sm:text-base md:text-lg">Wrap Top</h6>
                                <div className="pt-2 text-xs sm:text-sm md:text-base">
                                    <p>Size: S</p>
                                    <p className="mt-1">Color: White</p>
                                    <div className="flex items-center mt-3 sm:hidden">
                                        <div className='bg-[#D1D9CF] flex items-center'>
                                            <button className="text-lg sm:text-xl md:text-2xl px-2 ">-</button>
                                            <span className="text-xs sm:text-sm md:text-base px-2">1</span>
                                            <button className="text-lg sm:text-xl md:text-2xl px-2">+</button>
                                        </div>
                                        <div className='relative'>
                                            <div className="text-xs sm:text-sm md:text-base absolute left-[7rem] top-[-8px]">$160.00</div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="flex items-start">
                                <FontAwesomeIcon
                                    icon={faTimes}
                                    className=" text-gray-600 hover:text-red-500 text-sm sm:text-base"
                                />
                            </div>
                        </div>
                    ))}
                </div>


                <div className="w-full lg:w-2/5 flex flex-col gap-4">
                    {[...Array(3)].map((_, index) => (
                        <div key={index} className="hidden sm:flex items-center justify-between gap-4 sm:gap-6">
                            <div className="text-xs sm:text-sm md:text-base">$160.00</div>
                            <div className="flex items-center bg-[#D1D9CF] px-2 py-1 ">
                                <button className="text-lg sm:text-xl md:text-2xl px-2 ">-</button>
                                <span className="text-xs sm:text-sm md:text-base px-2">1</span>
                                <button className="text-lg sm:text-xl md:text-2xl px-2">+</button>
                            </div>
                            <div className="text-xs sm:text-sm md:text-base">$160.00</div>
                        </div>
                    ))}
                    <div className="h-[1px] bg-[#868686] my-4"></div>
                    <div className="flex flex-col gap-3 text-xs sm:text-sm md:text-base">
                        <div className="flex justify-between">
                            <p>Subtotal (3)</p>
                            <p>$485.00</p>
                        </div>
                        <div className="flex justify-between">
                            <p>Tax</p>
                            <p>$38.80</p>
                        </div>
                        <div className="flex justify-between">
                            <p>Shipping</p>
                            <p>Free</p>
                        </div>
                        <div className="flex justify-between ">
                            <p>Total Orders:</p>
                            <p>$523.80</p>
                        </div>
                        <p className="text-xs sm:text-sm text-gray-600">
                            The total amount you pay includes all applicable customs duties & taxes. We guarantee no
                            additional charges on delivery.
                        </p>
                        <div className="flex justify-end">
                            <button className="bg-[#5A6D57] text-white px-6 sm:px-8 py-2">
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CartPage;