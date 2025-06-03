import { faLessThan, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import IMAGES from '../../../../assets/images/projectImage'
import { Box, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import React from 'react';

const ShippingPage = () => {
    const steps = ['Cart', 'Info', 'Shipping', 'Payment'];
    const currentStep = 1; // 0-based index (Info)

    return (
        <>

            <div className=' container mx-auto px-4'>
                <Box display="flex" sm:justifyContent="start" alignItems="center" mb={2} >
                  
                    <Box display="flex" alignItems="center" gap={1}>
                        {steps.map((label, index) => (
                            <React.Fragment key={label}>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        fontWeight: index === currentStep ? 'bold' : 'normal',
                                        color: index === currentStep ? 'black' : '#7E917B',
                                    }}
                                >
                                    {label}
                                </Typography>
                                {index !== steps.length - 1 && (
                                    <Typography variant="body1" color="#999">
                                        /
                                    </Typography>
                                )}
                            </React.Fragment>
                        ))}
                    </Box>
                </Box>

            </div>
            <div className="container mx-auto flex  gap-6 flex-col sm:flex-row justify-between sm:gap-8 md:gap-12 w-full md:max-w-[1200px]">
                <div className="left w-full px-4 md:max-w-[50%] mt-[7rem]">
                    <div className='flex justify-between items-center gap-3'>
                        <p>Contact</p>
                        <p className='text-[#748C70]'>Change</p>
                    </div>
                    <div className='bg-[#868686] h-[1px] w-full md:max-w-[600px]  my-6'></div>


                    <div className='flex justify-between items-center gap-3'>
                        <p>Ship to</p>
                        <p className='text-[#748C70]'>Change</p>

                    </div>
                    <div className='my-3'>
                        <h5 className='font-bold text-[20px]'>Delivery Options</h5>
                    </div>
                    <div className='bg-[#868686] h-[1px] w-full md:max-w-[600px] my-6'></div>


                    <div className='flex justify-between items-center gap-3'>
                        <p className='text-[#868686] text-[16px]'>Express Courier (Air)</p>
                        <p className='font-bold text-[16px]'>Free</p>

                    </div>
                    <div >
                        <p className='text-[#868686] text-[16px] mt-4 '>3 to 4 Business Days</p>
                    </div>

                    <div className='flex justify-between gap-3 mt-[3rem]'>
                        <div >
                            <h6 className='text-[#868686] font-bold'>Expected Date: </h6>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <p className='text-[#202020]'><input type="radio" className='scale-125' /> Monday, August 14 </p>
                            <p className='text-[#202020]'><input type="radio" className='scale-125' /> Tuesday, August 22 </p>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <p className='text-[#202020]'><input type="radio" className='scale-125' /> Wednesday, August 16</p>
                            <p className='text-[#202020]'><input type="radio" className='scale-125' /> Friday, August 25</p>
                        </div>
                    </div>

                    <div className='bg-[#868686] h-[1px] w-full sm:w-[600px] px-4 my-6'></div>


                    <div>
                        <div className='flex justify-between'>
                            <div className='flex flex-col gap-2'>
                                <h6 className='font-bold text-[#868686] text-[16px]'>Guaranteed by: </h6>
                                <p className='font-semibold text-[14px] text-[#606060]'>UPS Next Day Air Saver</p>
                            </div>
                            <div className='flex flex-col gap-5 mt-2'>
                                <p className='font-normal text-[16px] text-[#202020]'><input type="radio" className='scale-125' /> Wednesday, August 11th by 8 PM</p>
                                <p className='font-normal text-[16px] text-[#202020]'><input type="radio" className='scale-125' /> Wednesday, August 11th  By Noon</p>
                            </div>

                            <div className='flex flex-col gap-5 mt-2'>
                                <p className='font-semibold text-[14px] text-[#202020]'>$24.00</p>
                                <p className='font-semibold text-[14px] text-[#202020]'>$24.00</p>
                            </div>

                        </div>
                    </div>

                    <div>
                        <div className='flex justify-between items-center mt-6'>
                            <Box display="flex" alignItems="center" sx={{ cursor: 'pointer' }} onClick={() => window.history.back()}>
                                <ArrowBackIcon sx={{ color: '#7E917B' }} />
                                <Typography variant="body1" sx={{ color: '#7E917B', ml: 0.5 }}>
                                    Return To Cart
                                </Typography>
                            </Box>
                            <button className='bg-[#5A6D57] text-white px-5 py-2'>Continue To Payment</button>
                        </div>
                    </div>
                </div>
                <div className="right container hidden sm:block bg-[#F0F2EF] px-4 w-full md:max-w-[50%]">
                    <div className='my-5'>
                        <h5 className='fon-bold text-[20px] text-center'>Your Cart</h5>
                    </div>

                    <div className='flex flex-col gap-[4rem]'>
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
                        <div className='w-[500px]  flex justify-between'>
                            <div className='img relative w-[142px] h-[163px] '>
                                <img src={IMAGES.ModiweekFour} alt="" className='w-full' />
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
                        <div className='w-[500px]  flex justify-between'>
                            <div className='img relative w-[142px] h-[163px] '>
                                <img src={IMAGES.ModiweekThree} alt="" className='w-full' />
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
                    </div>

                    <div className='mt-[4rem] flex flex-col gap-3  pb-8'>
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

export default ShippingPage