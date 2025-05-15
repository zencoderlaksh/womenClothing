
import React from 'react';
import IMAGES from '../assets/images/projectImage';

const Login = () => {


    return (

        <>

            <div className='  sm:w-[100%] pl-[15px] mx-auto flex flex-row items-center justify-around mt-[20rem] md:mt-0 px-5 '>

                <div className="left my-[142px] flex justify-center">
                    <img src={IMAGES.RegisteImage} className='hidden sm:block  md:w-[600px] h-[600px] ' />
                </div>

                <div className="right md:ml-8 flex justify-center">
                    <div className="container">
                        <div className='text-conatiner sm:mx-auto flex items-center justify-center md:mx-auto '>
                            <h3 className='sm:text-[16px] text  font-bold mb-4 md:text-[32px]'>Log in </h3>
                        </div>
                        <div className="input-container">
                            <input type="text" placeholder='Email' className='inp1  border-1 border-gray-400  w-[400px]   px-[10px] py-[15px] mb-2' /> <br />
                            <input type="text" placeholder='password' className='inp2 border-1 border-gray-400  w-[400px]   px-[10px] py-[15px]    ' />
                        </div>
                        <div className="password hidden sm:block ">
                            <p className='bg text-gray-400'>Forgot your password?</p>
                        </div>
                        <div className="button">
                            <button  className='btn bg-[#5A6D57] text-[#FFFFFF] p-4  flex items-center justify-center  w-[400px]   px-[10px] py-[15px]  mt-4'>log in</button>
                        </div>
                        <div className="or">
                            <p className=' sm:font-medium text-center mt-3'>or</p>
                        </div>

                        <div className="images flex items-center justify-center gap-3 mt-6">
                            <img src={IMAGES.Apple} className='img1 w-[35px] h-[35px]' />
                            <img src={IMAGES.google} className='img2 w-[35px] h-[35px]' />
                            <img src={IMAGES.facebook} className='img3 w-[35px] h-[35px]' />
                        </div>
                        <div className="create text-center  mt-4">
                            <a href="#" className='create-acount  sm:font-medium'>New to modimal? <span className='text-gray-400'>create an account</span></a>
                        </div>
                    </div>
                </div>


            </div>

        </>
    );
};

export default Login;

