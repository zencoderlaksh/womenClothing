import React from 'react'
import IMAGES from '../../../../assets/images/projectImage'

const CollectionMenuPage = () => {
    return (
        <>

            <div className='container  mx-auto flex justify-center gap-[190px] mt-5'>
                <div className='lfet flex justify-between gap-[100px] items-baseline'>
                    <div className='capitalize'>
                        <h6>category</h6>
                        <ul >
                            <li className='flex flex-col text-lg gap-4 mt-5 '>
                                <a href="">shop all</a>
                                <a href="">boluses & top</a>
                                <a href="">pants</a>
                                <a href="">Dresses & jumpsuits</a>
                                <a href="">outwear & jackets</a>
                                <a href="">pullovers</a>
                                <a href="">tees</a>
                                <a href="">shorts & skirts</a>
                            </li>

                        </ul>
                    </div>
                    <div className='capitalize'>
                        <h6>featured </h6>
                        <ul >
                            <li className='flex flex-col gap-4 mt-5 text-lg'>
                                <a href="">new in</a>
                                <a href="">modiweek</a>
                                <a href="">plus size</a>
                                <a href="">best seller</a>
                            </li>
                        </ul>
                    </div>

                    <div className='capitalize'>
                        <h6>more</h6>
                        <ul >
                            <li className='flex flex-col gap-4 text-lg mt-5'>
                                <a href="">bundles</a>
                                <a href="">occasion wear</a>
                                <a href="">matching set</a>
                                <a href="">suiting</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="right flex gap-[24px] w-[600px]">
                    <div>
                        <img src={IMAGES.CollectionImgOne} alt="" className='h-[420px]' />
                        <h6 className='mt-3 cursor-pointer'>Blouses</h6>

                    </div>
                    <div>
                        <img src={IMAGES.CollectionImgTwo} alt="" className='h-[420px]' />
                        <h6 className='mt-3 cursor-pointer'>plus size</h6>
                    </div>

                </div>



            </div>
        </>
    )
}

export default CollectionMenuPage