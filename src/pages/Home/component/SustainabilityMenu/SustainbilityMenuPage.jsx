import React from 'react'
import IMAGES from '../../../../assets/images/projectImage'

const SustainbilityMenuPage = () => {
    return (
        <>
            <div className='container  mx-auto flex justify-between w-[80%] mt-5'>
                <div className='left flex justify-between gap-[100px] items-baseline'>
                    <div className='capitalize'>
                        <h6>sustainability</h6>
                        <ul >
                            <li className='flex flex-col text-lg gap-4 mt-5 '>
                                <a href="">mission</a>
                                <a href="">materials</a>
                                <a href="">processing</a>
                                <a href="">packaging</a>
                                <a href="">product care</a>
                                <a href="">our suppliers</a>
                               
                            </li>
                        </ul>
                    </div>

 







                </div>

                <div className="right flex gap-[24px] ">
                    <div>
                        <img src={IMAGES.SustainbilityMenuImgOne} alt="" className='' />
                      

                    </div>
                    <div>
                        <img src={IMAGES.SustainbilityMenuImgTwo} alt="" className='' />
                       
                    </div>



                </div>



            </div>
        </>
    )
}

export default SustainbilityMenuPage