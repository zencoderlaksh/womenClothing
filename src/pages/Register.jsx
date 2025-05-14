import React from 'react';
import IMAGES from '../assets/images/projectImages';

const Login = () => {
    return (
        <>

            <div className='  sm:w-[100%] mx-auto flex flex-row items-center justify-around mt-[20rem] md:mt-0 px-5 '>

                <div className="left mt-[142px] flex justify-center">
                    <img src={IMAGES.registerOne} className='hidden sm:block  md:w-[600px] h-[600px]' />
                </div>

                <div className="right mt-[-80px] sm:mt-[-100px] ml-[-5px] md:mt-30 md:ml-8 flex justify-center">
                    <div className="container">
                        <div className='sm:mx-auto flex items-center justify-center md:mx-auto'>
                            <h3 className='text-[30px] sm:text-[16px] font-bold mb-4 ml-[-10px] md:text-[32px] text-center'>
                                Create Account
                            </h3>
                        </div>
                        <div className="input-container">
                            <input type="text" placeholder='First Name ' className='inp1 border-1 border-gray-400 w-[400px] px-[10px] py-[15px] mb-2 text-[#606060]' /> <br />
                            <input type="text" placeholder='Last Name ' className='inp1 border-1 border-gray-400 w-[400px] px-[10px] py-[15px] mb-2  text-[#606060]' /> <br />
                            <input type="text" placeholder='Email' className='inp1  border-1 border-gray-400   w-[400px] px-[10px] py-[15px] mb-2 text-[#606060]' /> <br />
                            <input type="password" placeholder='Password' className='inp2 border-1 border-gray-400  w-[400px] px-[10px] py-[15px] text-[#606060] ' />
                        </div>
                        <div className="button">
                            <button className='btn bg-[#5A6D57] text-[#FFFFFF] flex items-center justify-center w-[400px] px-[10px] py-[15px] mt-4'>Register Now</button>
                        </div>

                        <div className='flex justify-center gap-10 mt-[20px] ml-[-5px]'>
                            <p className='font-normal text-[#0C0C0C] text-sm'>Already Have An Account?</p>
                            <p className='font-normal text-[#748C70] text-sm'><a href="#">Log in</a></p>
                        </div>

                        <div className="or">
                            <p className=' sm:font-medium text-center mt-3'>or</p>
                        </div>

                        <div className='flex items-center justify-center gap-5 mt-[25px]'>
                            <img src={IMAGES.registerTwo} alt="" />
                            <img src={IMAGES.registerThree} alt="" />
                            <img src={IMAGES.registerFour} alt="" />
                        </div>
                        <div>
                            <p className='text-xs mt-[25px] ml-[40px] text-[#0C0C0C]'>By Clicking Register Now’’you Agree To <span className='text-[#748C70] underline underline-offset-[1px]'><a href="#">Terms& Conditions</a></span>  And <br /> <span className='text-[#748C70] underline underline-offset-[1px] ml-[120px]'><a href="#">Privacy Policy.</a></span>  </p>
                        </div>
                    </div>
                </div>


            </div>

        </>
    );
};

export default Login;