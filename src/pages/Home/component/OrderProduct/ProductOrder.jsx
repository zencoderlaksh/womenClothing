import React, { useState } from 'react';
import IMAGES from '../../../../assets/images/projectImage';

const ProductOrder = () => {
    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    return (
        <>
            <div className="container mx-auto flex justify-between items-center gap-[24px]">

                <div className="left flex gap-3 w-[600px]">
                    <div className="imges w-[100px] h-[400px] flex flex-col gap-3 overflow-y-auto
                        [&::-webkit-scrollbar]:w-[6px]
                        [&::-webkit-scrollbar-track]:bg-gray-100
                        [&::-webkit-scrollbar-thumb]:bg-gray-300
                        dark:[&::-webkit-scrollbar-track]:bg-neutral-700
                        dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
                    >
                        {[...Array(6)].map((_, i) => (
                            <img key={i} src={IMAGES.ModiweekOne} alt="" className='w-full h-[60px]' />
                        ))}
                    </div>
                    <div className="big-image w-[400px]">
                        <div className='shadow-lg'>
                            <img src={IMAGES.ModiweekOne} alt="" className='w-full h-[400px]' />
                        </div>
                    </div>
                </div>


                <div className="right w-[600px] mb-[9rem] mr-[12rem]">
                    <div>
                        <h3 className='font-bold text-[32px]'>wrap top</h3>
                        <p>Versatile and universally flattering...</p>
                    </div>

                    <div>
                        <div className='flex justify-end items-end'>
                            <p>size guide</p>
                        </div>

                        <div className='relative w-[600px]'>
                            <select className='border border-gray-400 w-full py-3'>
                                <option selected disabled>Size</option>
                                <option>M</option>
                                <option>XL</option>
                                <option>XXL</option>
                                <option>LG</option>
                            </select>
                        </div>

                        <div className='mt-6'>
                            <button className='w-full bg-[#5A6D57] py-3 text-white'>Add To Cart  +$160 </button>
                        </div>

                        <div className='flex justify-between gap-2 items-center mt-6'>
                            <div className='flex gap-2 items-center'>
                                <i className="fa-solid fa-truck text-[#868686]"></i>
                                <span className='text-[#868686]'>Easy return</span>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <i className="fa-regular fa-heart text-[#868686]"></i>
                                <span className='text-[#868686]'>Add to wish list</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='container flex justify-center items-baseline flex-col mx-auto'>

                {[
                    {
                        title: 'Fitting',
                        content: (
                            <div className="bg-gray-50 text-gray-800 text-sm px-4 pb-4 space-y-1">
                                <p><strong className='text-[#748C70] font-bold'>Fabric & care </strong></p>
                                <p>Fabric</p>
                                <p>Tailored Stretch,</p>
                                <p>Made in Italy62% Nylon, 38% Elastane, 100% vegan materials</p>
                                <p> Care:</p>
                                <p> Cold machine wash, line dry</p>
                                <p> Do not tumble dry or dry clean, Do not use bleach or fabric softener</p>
                            </div>
                        )
                    },
                  
            

                    {
                        title: 'Fabric & Care',
                        content: (
                            <div className="bg-gray-50 text-gray-800 text-sm px-4 pb-4 space-y-1">
                                <p><strong>Shipping And Return</strong></p>
                                <p>Shipping:</p>
                                <p>Is free on US , Canada orders are $175</p>
                                <p> Returns:</p>
                                <p>Unwashed, unworn items are eligible for returns or exchanges within 30 days of purchase. Final Sale items are not eligible for returns or exchanges.</p>
                            </div>
                        )
                    }
                ].map((section, index) => (
                    <div key={index} className="border border-gray-300 w-[600px] mb-4">
                        <div
                            className="p-4 flex justify-between items-center cursor-pointer"
                            onClick={() => toggleSection(index)}
                        >
                            <span className={`font-bold ${openSection === index ? 'text-green-700' : 'text-gray-900'}`}>
                                {section.title}
                            </span>
                            <span className={`text-2xl ${openSection === index ? 'text-green-700' : 'text-gray-600'}`}>
                                {openSection === index ? '−' : '+'}
                            </span>
                        </div>

                        {openSection === index && section.content}
                    </div>
                ))}
            </div>

        </>
    );
};

export default ProductOrder;
