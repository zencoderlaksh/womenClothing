import React from 'react'
import IMAGES from '../../../../assets/images/projectImage'

const PlusSizeMenuPage = () => {
    return (
        <>
            <div className='container  mx-auto flex justify-between w-[80%] mt-5'>
                <div className='left flex justify-between gap-[100px] items-baseline'>
                    <div className='capitalize'>
                        <h6>category</h6>
                        <ul >
                            <li className='flex flex-col text-lg gap-4 mt-5 '>
                                <a href="">shop all</a>
                                <a href="">tops & boluses</a>
                                <a href="">tees</a>
                                <a href="">pants</a>
                                <a href="">jackets & outwears</a>
                                <a href="">pullovers</a>
                                <a href="">dresses & jumpsuits</a>
                                <a href="">shorts & skirts</a>
                            </li>
                        </ul>
                    </div>



                </div>

                <div className="right flex gap-[24px] ">
                    <div>
                        <img src={IMAGES.PlusSizeMenuImgOne} alt="" className='w-[208px] h-[408px]' />
                        <h6 className='mt-3 cursor-pointer'>Pants</h6>

                    </div>
                    <div>
                        <img src={IMAGES.PlusSizeMenuImgTwo} alt="" className='w-[208px] h-[408px]' />
                        <h6 className='mt-3 cursor-pointer'>Dresses</h6>
                    </div>

                    <div>
                        <img src={IMAGES.PlusSizeMenuImgThree} alt="" className='w-[208px] h-[408px]' />
                        <h6 className='mt-3 cursor-pointer'>Blouses</h6>
                    </div>

                </div>



            </div>

        </>
    )
}

export default PlusSizeMenuPage