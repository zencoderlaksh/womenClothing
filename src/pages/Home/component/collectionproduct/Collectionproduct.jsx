import React from 'react'
import product4 from '../../../../assets/images/product4.png'
import product5 from '../../../../assets/images/product5.png'
import product6 from '../../../../assets/images/product6.png'
import product7 from '../../../../assets/images/product7.jpg'






const Collectionproduct = ({button}) => {

    return (
        <>
            <div className="images mt-5 ">
                <div className="container lg:mx-auto flex items-center justify-center flex-wrap gap-[3rem] md:mx-auto sm:mx-auto px-3">
                    <div className="img1 relative ">
                        <img src={product4} alt="" className=' sm:w-[600px] h-[518px] ' />
                         <button className='btn bg-white md: absolute right-3 top-110 font-normal py-2 px-10'>{button}Boluses</button>
                        <img src={product6} alt="" className='w-[600px] h-[900px] mt-8 ' />
                        <button className='btn absolute right-3 bottom-10 bg-white px-10 py-3'>{button}Dresses</button>
                        
                          
                    </div>
                    <div className="img2 relative">
                        <img src={product5} alt="" className='w-[600px] h-[800px] ' />
                        <button className='btn bg-white absolute right-3 top-180 px-10 py-3'>{button}Pants</button>
                        <img src={product7} alt="" className='w-[600px] h-[518px] mt-[8.4rem] ' />
                        <button className='btn bg-white absolute right-3 bottom-10 px-10 py-3'>{button}Outwear</button>
                    </div>




                </div>


            </div>

        </>
    )
}

export default Collectionproduct