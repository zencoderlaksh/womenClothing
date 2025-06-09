import React from 'react'
import product4 from '../../../../assets/images/product4.png'
import product5 from '../../../../assets/images/product5.png'
import product6 from '../../../../assets/images/product6.png'
import product7 from '../../../../assets/images/product7.jpg'






const Collectionproduct = ({ button }) => {

    return (
        <>
            <div className="text-content sm: mx-auto  w-[95%] flex items-center justify-between mt-[88px]">
                <div className="left">
                    <h3 className=' text-3xl font-bold'>Collection</h3>
                </div>
            </div>
            <div className="images mt-5 ">
                <div className="  container lg:mx-auto flex items-center justify-center flex-wrap gap-[3rem] md:mx-auto sm:mx-auto px-3">
                    <div className="img1 flex flex-col sm:flex-row gap-6">
                        <div className='relative'>
                            <img src={product4} alt="" className='w-[600px] h-[518px] cursor-pointer' />
                            <button className='btn bg-white md: absolute right-3 top-110 font-normal py-2 px-10 cursor-pointer'>{button}Boluses</button>
                        </div>
                        <div className='relative'>
                            <img src={product5} alt="" className='w-[600px] h-[800px] cursor-pointer ' />
                            <button className='btn bg-white absolute left-3 bottom-[2rem] px-10 py-3 cursor-pointer'>{button}Pants</button>
                        </div>


                    </div>
                    <div className="img2 flex flex-col sm:flex-row sm:gap-6">

                        <div className='relative'>
                            <img src={product6} alt="" className='w-[600px] h-[900px] mt-2 sm:mt-[-15rem] cursor-pointer' />
                            <button className='btn absolute right-3 bottom-10 bg-white px-10 py-3 cursor-pointer'>{button}Dresses</button>
                        </div>
                        <div className='relative' >
                            <img src={product7} alt="" className='w-[600px] h-[518px] mt-4 sm:mt-[8.8rem] cursor-pointer' />
                            <button className='btn bg-white absolute right-3 bottom-[2rem] px-10 py-3 cursor-pointer'>{button}Outwear</button>
                        </div>
                    </div>




                </div>


            </div>

        </>
    )
}

export default Collectionproduct