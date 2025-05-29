import React, { useState } from 'react';
import IMAGES from '../../../../assets/images/projectImage';
import SellerCart from '../../../../components/bestsellerscart/SellerCart';
import Colors from '../../../../components/Color/Colors';

const ProductOrder = () => {
    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    const productorderData = [
        {
            id: 1,
            img: IMAGES.filterShopThree,
            title: 'Shirt Dress',
            content: 'Turn It Up Dress',
            price: '$245',
            color: ['#0C0C0C', '#7DC3EB', '#748C70']
        },

        {
            id: 2,
            img: IMAGES.filterShopFour,
            title: 'Rule Zip Jacket',
            content: 'Turn It Up Jacket',
            price: '$199',
            color: ['#909225', '#CA6D29']
        },
        {
            id: 3,
            img: IMAGES.filterShopFive,
            title: 'New Age Linen',
            content: 'Turn It Up Pants',
            price: '$180',
            color: ['#0C0C0C', '#19418E', '#748C70']
        },
    ]

    const colorData = [
        {

            id: 1,
            colors: ['#CA2929','#0C0C0C']
        }
    ]

    return (
        <>
            <div className=" mx-auto flex justify-center items-center gap-[24px]">

                <div className="left flex gap-3 w-[600px]">
                    <div className="imges w-[100px] h-[400px] flex flex-col gap-3 overflow-y-auto
                        [&::-webkit-scrollbar]:w-[6px]
                        [&::-webkit-scrollbar-track]:bg-gray-100
                        [&::-webkit-scrollbar-thumb]:bg-gray-300
                        dark:[&::-webkit-scrollbar-track]:bg-neutral-700
                        dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
                    >
                        {[...Array(6)].map((_, i) => (
                            <img key={i} src={IMAGES.ModiweekOne} alt="" className='w-full h-[60px] cursor-pointer' />
                        ))}
                    </div>
                    <div className="big-image w-[400px]">
                        <div className='shadow-lg'>
                            <img src={IMAGES.ModiweekOne} alt="" className='w-full h-[400px] cursor-pointer' />
                        </div>
                    </div>
                </div>


                <div className="right w-[600px] mb-[9rem] mr-[12rem]">
                    <div>
                        <h3 className='font-bold text-[32px]'>wrap top</h3>
                        <p>Versatile and universally flattering, our wrap boluse can be tied, draped, snapped and wrapped multiple ways.</p>
                    </div>


                    <div>
                        {
                            colorData.map((item, i) => {
                                return (
                                    <div>
                                        <Colors key={i} id={item.id} colors={item.colors} />
                                    </div>

                                )
                            })
                        }
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
                            <button className='w-full bg-[#5A6D57] py-3 text-white cursor-pointer'>Add To Cart  +$160 </button>
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


            <div className='flex'>
                <div className='flex justify-center items-baseline flex-col mx-auto'>

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
                <div className=' w-[600px] bg-[#F0F2EF] p-[16px] mr-[14rem]'>

                    <div className='p-2'>
                        <h4 className='font-normal'>Silk</h4>
                    </div>
                    <div className='h-[3px] bg-[#ADADAD]'></div>
                    <div className='py-3 leading-8'>
                        <p className='text-[#0C0C0C]'>This material is our signature high-stretch fabric that drapes like silk and is soft to the touch. Silk is OEKO-TEX® certified and made in Italy in a mill 100% powered by renewable energy (solar and biomass)</p>

                        <div className='flex gap-4 pt-4'>
                            <button className='py-2 px-6 bg-[#FFFF] font-normal'>quick dry</button>
                            <button className='py-2 px-6 bg-[#FFFF] font-normal'>chemical free</button>
                            <button className='py-2 px-6 bg-[#FFFF] font-normal'>machine washable</button>
                        </div>
                    </div>

                </div>
            </div>

            <div className=' container mx-auto '>
                <h3 className='font-bold text-[32px] ml-[3rem]'>You may also like</h3>
            </div>

            <div className="cart-data sm: mx-auto flex items-center justify-evenly flex-wrap  px-4">

                {
                    productorderData.map((item, i) => {
                        return (
                            <div className="cart">
                                <SellerCart key={i} id={item.id} img={item.img} title={item.title} content={item.content} price={item.price} color={item.color} />

                            </div>

                        )


                    })

                }

            </div>
        </>
    );
};

export default ProductOrder;
