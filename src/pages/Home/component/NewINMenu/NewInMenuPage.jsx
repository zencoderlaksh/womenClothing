import React from 'react'
import IMAGES from '../../../../assets/images/projectImage'

const NewInMenuPage = () => {
    return (
        <>

            <div className='container  mx-auto flex justify-center gap-[190px] mt-5'>
                <div className='lfet flex justify-between gap-[100px] items-baseline'>
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
                    <div className='capitalize'>
                        <h6>trending </h6>
                        <ul >
                            <li className='flex flex-col gap-4 mt-5 text-lg'>
                                <a href="">plus size</a>
                                <a href="">fall collection</a>
                                <a href="">modiweek</a>
                            </li>

                        </ul>
                    </div>

                </div>

                <div className="right flex gap-[24px] ">
                    <div>
                        <img src={IMAGES.NewInMenuImgOne} alt="" className='h-[420px] w-[250px]' />
                        <h6 className='mt-3 cursor-pointer'>Fall Collection</h6>

                    </div>
                    <div>
                        <img src={IMAGES.NewInMenuImgTwo} alt="" className='h-[420px] w-[250px]' />
                        <h6 className='mt-3 cursor-pointer'>Boluses</h6>
                    </div>

                    <div>
                        <img src={IMAGES.imgThree} alt="" className='h-[420px] w-[250px]' />
                        <h6 className='mt-3 cursor-pointer'>Dresses</h6>
                    </div>

                </div>



            </div>
        </>
    )
}

export default NewInMenuPage