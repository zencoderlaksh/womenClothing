import React, { useState } from 'react';
import IMAGES from '../../../../assets/images/projectImage';
import Colors from '../../../../components/Color/Colors';
import SellerCart from '../../../../components/bestsellerscart/SellerCart';

const ProductOrder = () => {
    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    const colorData = [
        {

            id: 1,
            colors: ['#000', '#7DC3EB', '#7DC3EB']
        }
    ]

    const productorderData = [
        {
            id: 1,
            img: IMAGES.essentialdressOne,
            title: 'Shirt Dress',
            content: 'Turn It Up Dress',
            price: '$245',
            color: ['#0C0C0C', '#7DC3EB', '#748C70']
        },

        {
            id: 2,
            img: IMAGES.essentialdressTwo,
            title: 'Rule Zip Jacket',
            content: 'Turn It Up Jacket',
            price: '$199',
            color: ['#CA6D29',]
        },
        {
            id: 3,
            img: IMAGES.essentialdressThree,
            title: 'New Age Linen',
            content: 'Turn It Up Pants',
            price: '$180',
            color: ['#909225', '#7DC3EB']
        },
    ]
    return (
        <>
            <div className="container mx-auto flex flex-col w-full gap-6 sm:flex-row sm:gap-8 md:gap-12 md:max-w-[1200px] p-4">
                <div className="left flex w-full sm:w-[50%] gap-4">

                    <div className="hidden sm:block w-[125px] h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 ">
                        <div className="flex flex-col gap-2">
                            <div className="carousel-item w-[125px] h-[160px]">
                                <img src={IMAGES.ModimalFour} alt="" />
                            </div>
                            <div className="carousel-item w-[125px] h-[160px]">
                                <img src={IMAGES.ModimalFour} alt="" />
                            </div>
                            <div className="carousel-item w-[125px] h-[160px]">
                                <img src={IMAGES.ModimalFour} alt="" />
                            </div>
                            <div className="carousel-item w-[125px] h-[160px]">
                                <img src={IMAGES.ModimalFour} alt="" />
                            </div>
                            <div className="carousel-item w-[125px] h-[160px]">
                                <img src={IMAGES.ModimalFour} alt="" />
                            </div>
                            <div className="carousel-item w-[125px] h-[160px]">
                                <img src={IMAGES.ModimalFour} alt="" />
                            </div>
                            <div className="carousel-item w-[125px] h-[160px]">
                                <img src={IMAGES.ModimalFour} alt="" />
                            </div>
                        </div>
                    </div>


                    <div className="flex-1">
                        <img
                            src={IMAGES.EssentialdressImgeOne}
                            alt="Main product"
                            className="w-full object-cover h-[500px]"
                        />
                    </div>
                </div>
                <div className="right w-full sm:w-[50%]">

                    <div>
                        <h3 className='text-[32px] font-semibold mt-[32px]'>wrap top</h3>
                        <p>Versatile and universally flattering, our wrap boluse can be tied, draped, snapped and wrapped multiple ways.</p>
                    </div>

                    <div>
                        <p className='text-[16px] mt-[24px]'>color</p>
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
                        <div className='flex justify-end items-end my-2'>
                            <p>size guide</p>
                        </div>

                        <div className='relative'>
                            <select className='border border-gray-400 w-full py-3 px-2'>
                                <option selected disabled>Size</option>
                                <option>M</option>
                                <option>XL</option>
                                <option>XXL</option>
                                <option>LG</option>
                            </select>
                        </div>
                        <div>
                            <div className='mt-6'>
                                <button className='w-full bg-[#5A6D57] py-3 text-white cursor-pointer'>Add To Cart  +$160 </button>
                            </div>
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

            <div className="container mx-auto flex flex-col w-full gap-6 sm:flex-row sm:gap-8 md:gap-12 md:max-w-[1200px] p-4">
                <div className='left'>
                    {[
                        {
                            title: 'Fitting',
                            content: (
                                <div className="bg-gray-50 text-gray-800 text-sm px-4 pb-4 s">
                                    <p><strong className='text-[#748C70] font-bold'>Fabric & care  </strong></p>
                                    <p>  Fabric : </p>
                                    <p>cupro luxe, </p>
                                    <p>Made in turkey, 100% cupro, 38% Elastane, 100% vegan materials</p>
                                    <p>Care: </p>
                                    <p>Cold machine wash, line dry </p>
                                    <p>Do not tumble Dry or Dry clean, Do not use bleach or fabric softener</p>
                                </div>
                            )
                        },



                        {
                            title: 'Product Detail',
                            content: (
                                <div className="bg-gray-50 text-gray-800 text-sm px-4 pb-4 ">
                                    <p><strong>Shipping And Return</strong></p>
                                    <p>Shipping:</p>
                                    <p>Is free on US , Canada orders are $175</p>
                                    <p> Returns:</p>
                                    <p>Unwashed, unworn items are eligible for returns or exchanges within 30 days of purchase. Final Sale items are not eligible for returns or exchanges.</p>
                                </div>
                            )
                        }

                    ].map((section, index) => (
                        <div key={index} className="border border-gray-300 w-full sm:w-[565px] mb-4">
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

                <div className="right">
                    <div className='bg-[#F0F2EF] p-[16px]'>

                        <div>
                            <p>Cuproluxe</p>
                        </div>
                        <div className='h-[1px] bg-[#868686] my-[24px]'></div>

                        <div>
                            <p>Our CuproLuxe is a regenerated cellulose fabric made from cotton waste. This fabric is made in a zero-waste closed loop process, and is 100% biodegradable. Cupro is breathable, quick drying and durable. This OEKO-TEX®, FSC, and GRS certified material is made in Turkey.</p>
                        </div>

                        <div className='mt-[40px] '>
                            <div className='flex flex-wrap gap-4 sm:justify-center ' >
                                <button className='bg-white px-3 py-2'>Quick Dry</button>
                                <button className='bg-white px-3 py-2'>Breathable </button>
                                <button className='bg-white px-3 py-2'>Machine Washable</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className='container mx-auto  w-full flex justify-start px-4 items-start md:max-w-[1200px]'>
                <h3 className='font-semibold text-[32px]'>You May Also Like</h3>
            </div>

            <div className="container mx-auto flex flex-col w-full gap-6 sm:flex-row sm:gap-8 md:gap-12 md:max-w-[1200px] p-4">

                <div className='flex flex-col gap-[24px] sm:flex-row'>

                    {
                        productorderData.map((item, i) => {
                            return (
                                <div>
                                    <SellerCart key={i} id={item.id} img={item.img} title={item.title} content={item.content} price={item.price} color={item.color} />

                                </div>

                            )


                        })

                    }
                </div>
            </div>
        </>
    );
};

export default ProductOrder;