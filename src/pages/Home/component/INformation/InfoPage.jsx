import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faMagnifyingGlass, faMobileScreenButton, faUser } from '@fortawesome/free-solid-svg-icons';
import IMAGES from '../../../../assets/images/projectImage';
import { Box, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const InfoPage = () => {
    const steps = ['Cart', 'Info', 'Shipping', 'Payment'];
    const currentStep = 1;

    return (
        <>
           
            <div className="container mx-auto px-4 py-4 sm:py-6 max-w-[90%] md:max-w-[1200px]">
                <Box display="flex" justifyContent="start" alignItems="center" gap={1} flexWrap="wrap">
                    {steps.map((label, index) => (
                        <React.Fragment key={label}>
                            <Typography
                                variant="body2"
                                sx={{
                                    fontWeight: index === currentStep ? 'bold' : 'normal',
                                    color: index === currentStep ? 'black' : '#7E917B',
                                    fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' },
                                }}
                            >
                                {label}
                            </Typography>
                            {index !== steps.length - 1 && (
                                <Typography
                                    variant="body2"
                                    color="#999"
                                    sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' } }}
                                >
                                    /
                                </Typography>
                            )}
                        </React.Fragment>
                    ))}
                </Box>
            </div>

          
            <div className="container mx-auto flex flex-col lg:flex-row justify-between px-4 gap-6 sm:gap-8 md:gap-10 max-w-[90%] md:max-w-[1200px] py-4">
              
                <div className="w-full lg:w-3/5 flex flex-col gap-6">
                   
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <p className="text-base sm:text-lg font-medium">Contact</p>
                        <p className="text-xs sm:text-sm">
                            Have an Account?{' '}
                            <a href="#" className="text-[#868686] hover:underline">
                                Log in
                            </a>
                        </p>
                    </div>
                    <div className="relative">
                        <input
                            type="email"
                            placeholder="Email"
                            className="border-2 border-gray-300 rounded-md w-full py-2.5 px-10 text-sm sm:text-base focus:outline-none focus:border-[#5A6D57]"
                        />
                        <FontAwesomeIcon
                            icon={faUser}
                            className="absolute top-1/2 left-3 transform -translate-y-1/2 text-[#868686] text-sm"
                        />
                    </div>
                    <div className="flex items-center">
                        <label className="flex items-center gap-2 text-xs sm:text-sm">
                            <input type="checkbox" className="cursor-pointer scale-125" />
                            Email Me With News and Offers
                        </label>
                    </div>

                   
                    <p className="text-base sm:text-lg font-medium mt-4">Shipping Address</p>
                    <div className="flex flex-col gap-3">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Country/Region"
                                className="border-2 border-gray-300 rounded-md w-full py-2.5 px-3 text-sm sm:text-base focus:outline-none focus:border-[#5A6D57]"
                            />
                            <FontAwesomeIcon
                                icon={faTimes}
                                className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer text-[#868686] text-sm"
                            />
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <input
                                type="text"
                                placeholder="First Name"
                                className="border-2 border-gray-300 rounded-md w-full py-2.5 px-3 text-sm sm:text-base focus:outline-none focus:border-[#5A6D57]"
                            />
                            <input
                                type="text"
                                placeholder="Last Name"
                                className="border-2 border-gray-300 rounded-md w-full py-2.5 px-3 text-sm sm:text-base focus:outline-none focus:border-[#5A6D57]"
                            />
                        </div>
                        <input
                            type="text"
                            placeholder="Company (Optional)"
                            className="border-2 border-gray-300 rounded-md w-full py-2.5 px-3 text-sm sm:text-base focus:outline-none focus:border-[#5A6D57]"
                        />
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Address"
                                className="border-2 border-gray-300 rounded-md w-full py-2.5 px-3 text-sm sm:text-base focus:outline-none focus:border-[#5A6D57]"
                            />
                            <FontAwesomeIcon
                                icon={faMagnifyingGlass}
                                className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer text-[#868686] text-sm"
                            />
                        </div>
                        <input
                            type="text"
                            placeholder="Apartment, Suite, etc. (Optional)"
                            className="border-2 border-gray-300 rounded-md w-full py-2.5 px-3 text-sm sm:text-base focus:outline-none focus:border-[#5A6D57]"
                        />
                        <div className="flex flex-col sm:flex-row gap-3">
                            <input
                                type="text"
                                placeholder="Postal Code"
                                className="border-2 border-gray-300 rounded-md w-full py-2.5 px-3 text-sm sm:text-base focus:outline-none focus:border-[#5A6D57]"
                            />
                            <input
                                type="text"
                                placeholder="City"
                                className="border-2 border-gray-300 rounded-md w-full py-2.5 px-3 text-sm sm:text-base focus:outline-none focus:border-[#5A6D57]"
                            />
                        </div>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Phone"
                                className="border-2 border-gray-300 rounded-md w-full py-2.5 px-3 text-sm sm:text-base focus:outline-none focus:border-[#5A6D57]"
                            />
                            <FontAwesomeIcon
                                icon={faMobileScreenButton}
                                className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer text-[#868686] text-sm"
                            />
                        </div>
                        <div className="flex items-center">
                            <label className="flex items-center gap-2 text-xs sm:text-sm">
                                <input type="checkbox" className="cursor-pointer scale-125" />
                                Save this information for next time
                            </label>
                        </div>
                    </div>

                    
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-6">
                        <Box
                            display="flex"
                            alignItems="center"
                            sx={{ cursor: 'pointer' }}
                            onClick={() => window.history.back()}
                        >
                            <ArrowBackIcon sx={{ color: '#7E917B', fontSize: { xs: '1rem', sm: '1.25rem' } }} />
                            <Typography
                                variant="body2"
                                sx={{
                                    color: '#7E917B',
                                    ml: 0.5,
                                    fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' },
                                }}
                            >
                                Return To Cart
                            </Typography>
                        </Box>
                        <button className="bg-[#5A6D57] text-white px-6 sm:px-8 py-2.5 rounded-md hover:bg-[#4a5b47] text-sm sm:text-base">
                            Continue to Shipping
                        </button>
                    </div>
                </div>

               
                <div className="w-full lg:w-2/5 bg-[#F0F2EF] p-4 sm:p-6  flex flex-col gap-6">
                    <h5 className="font-bold text-lg sm:text-xl text-center">Your Cart</h5>
                    {[...Array(1)].map((_, index) => (
                        <div key={index} className="flex justify-between gap-4">
                            <div className="relative flex-shrink-0 w-24 sm:w-32 h-28 sm:h-36">
                                <img src={IMAGES.ModiweekTwo} alt="Wrap Top" className="w-full h-full" />
                                <p className="absolute bg-white py-1 px-2 top-2 right-2 text-xs sm:text-sm">1</p>
                            </div>
                            <div className="flex flex-col gap-4 flex-grow">
                                <h6 className="font-bold text-sm sm:text-base">Wrap Top</h6>
                                <div className="text-xs sm:text-sm">
                                    <p>Size: S</p>
                                    <p>Color: White</p>
                                </div>
                                <div className="flex items-center justify-center bg-[#D1D9CF] px-1 py-1 w-fit">
                                    <button className="text-lg sm:text-xl px-2">-</button>
                                    <span className="text-xs sm:text-sm px-2">1</span>
                                    <button className="text-lg sm:text-xl px-2">+</button>
                                </div>
                            </div>
                            <div className="flex flex-col justify-between items-end">
                                <FontAwesomeIcon
                                    icon={faTimes}
                                    className="cursor-pointer text-[#868686] "
                                />
                                <p className="font-bold text-sm sm:text-base">$160</p>
                            </div>
                        </div>
                    ))}
                    <div className="flex flex-col gap-3">
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
                    </div>
                </div>
            </div>
        </>
    );
};

export default InfoPage;