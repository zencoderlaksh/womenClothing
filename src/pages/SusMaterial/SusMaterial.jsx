import React from 'react'
import IMAGES from '../../assets/images/projectImage'

const SusMaterial = () => {
    return (
        <>
            <div className='w-[90%] mx-auto'>
                <div className='mt-8'>
                    <div>
                        <div>
                            <h3 className='text-[22px] text-center font-semibold sm:text-start sm:font-semibold sm:text-3xl text-[#0C0C0C]'>Sustainably Sourced Materials</h3>
                        </div>
                        <div className='capitalize text-center text-lg sm:text-start sm:text-xl/8 font-normal text-[#0C0C0C] mt-8'>
                            <p>
                                At Modimal, we believe in investing in the now to design for the future. That’s why we are committed to sourcing quality materials that will have less impact on the environment.
                            </p>
                            <p>
                                So far in 2022, 92% of the base fabrics in our collection are more sustainably sourced. Our goal is  To use only 100% sustainably sourced materials by 2025.
                            </p>
                            <p>
                                There are five kinds of fabrics in our collections that are Organic and responsible sourced, and we highlight these so you can make considered choices when you shop.
                            </p>
                        </div>
                    </div>
                    <div className='sm:flex mt-10 gap-10'>
                        <div className="left sm:w-[30%]">
                            <img className='w-screen' src={IMAGES.susmaterialOne} alt="" />
                        </div>
                        <div className="right w-full sm:w-[70%] mt-[40px]">
                            <div>
                                <h4 className=' text-2xl text-center sm:text-start font-bold sm:text-xl text-[#0C0C0C]'>Cotton</h4>
                            </div>
                            <div className='capitalize text-center sm:text-start font-normal text-lg/8 text-[#0C0C0C] mt-3'>
                                <p>
                                    We source certified organic cotton, which is grown without the use of pesticides or synthetic fertilizers and requires less irrigation as it relies mainly on rainwater.
                                </p>
                                <p>
                                    (1). Avoiding harmful pesticides preserves soil biodiversity and protects the health of surrounding communities.
                                </p>
                                <p>
                                    (2). Our organic cotton fabrics are made using organic cotton yarns that are certified by the Global Organic Textile Standard (GOTS)
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col-reverse sm:flex-row mt-10 gap-10'>
                        <div className="left w-full sm:w-[70%] mt-[40px]">
                            <div>
                                <h4 className=' text-2xl text-center sm:text-start font-bold sm:text-xl text-[#0C0C0C]'>Wool</h4>
                            </div>
                            <div className='capitalize text-center sm:text-start font-normal text-lg/8 text-[#0C0C0C] mt-3'>
                                <p>
                                    Wool is a natural fiber with added performance attributes such as temperature regulation, durability, and natural water repellency.
                                </p>
                                <p>
                                    Considered a circular product by nature, wool can be recycled or biodegraded easily. Animal welfare is extremely important to us, and therefore we only source mulesing-free wool from producers that follow humane and eco-friendly processes aligned with our animal welfare guidelines
                                </p>
                            </div>
                        </div>
                        <div className="right sm:w-[40%] sm:h-[330px]">
                            <img className='w-screen h-[330px]' src={IMAGES.susmaterialTwo} alt="" />
                        </div>
                    </div>
                    <div className='sm:flex mt-10 gap-10'>
                        <div className="left sm:w-[40%] sm:h-[408px]">
                            <img className='w-screen h-[408px]' src={IMAGES.susmaterialThree} alt="" />
                        </div>
                        <div className="right w-full sm:w-[70%] mt-[80px]">
                            <div>
                                <h4 className=' text-2xl text-center sm:text-start font-bold sm:text-xl text-[#0C0C0C]'>Linen</h4>
                            </div>
                            <div className='capitalize text-center sm:text-start font-normal text-lg/8 text-[#0C0C0C] mt-3'>
                                <p>
                                    Found throughout our collections, linen is a sustainable fiber made from the flax plant. Flax is naturally pest resistant that requires less pesticides, water and energy to produce compared to cotton and polyester. Flax aids in sequestering carbon into the soil, which removes carbon dioxide from the atmosphere and is beneficial for improving soil health.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col-reverse sm:flex-row mt-10 gap-10'>
                        <div className="left w-full sm:w-[60%] mt-[70px]">
                            <div>
                                <h4 className=' text-2xl text-center sm:text-start font-bold sm:text-xl text-[#0C0C0C]'>Silk</h4>
                            </div>
                            <div className='capitalize text-center sm:text-start font-normal text-lg/8 text-[#0C0C0C] mt-3'>
                                <p>
                                    Organic Silk Is A More Responsible Alternative To Making Conventional Silk Through Traditional Methods. The Silkworms Are Fed Mulberry Tree Leaves From Organic Agriculture That Uses No Pesticides Or Harmful Chemicals And Resulting In A Lustrous Fabric That Is Gentle On Both You And Environment. This Responsibly Sourced Material Epitomizes Our Dedication To Creating Exquisite Clothing With A Conscience.
                                </p>
                            </div>
                        </div>
                        <div className="right sm:w-[40%] sm:h-[408px]">
                            <img className='w-screen h-[408px]' src={IMAGES.susmaterialFour} alt="" />
                        </div>
                    </div>
                    <div className='sm:flex mt-10 gap-10'>
                        <div className="left sm:w-[30%] sm:h-[434px]">
                            <img className='w-screen h-[434px]' src={IMAGES.susmaterialFive} alt="" />
                        </div>
                        <div className="right w-full sm:w-[70%] mt-[80px]">
                            <div>
                                <h4 className=' text-2xl text-center sm:text-start font-bold sm:text-xl text-[#0C0C0C]'>Cashmere</h4>
                            </div>
                            <div className='capitalize text-center sm:text-start font-normal text-lg/8 text-[#0C0C0C] mt-3'>
                                <p>
                                    We’re Proud To Source Our Cashmere Through The Good Cashmere Standard By The Aid By Trade Foundation (AbTF). This independent standard works to source traceable, sustainably certified cashmere that cares for the wellbeing of cashmere goats, protects the environment and supports the herders that produce it.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='text-center sm:text-start font-normal text-xl/8 text-[#0C0C0C] mt-[20px]'>
                    <p>
                        We Are Continually Exploring More Sustainable Alternatives That Offer The Same Quality And Performance. We Will Soon Add New Fabrics In To Our Collections Which Are Recycling And Repurposing. By Giving A New Life To Leftover Fabrics Through Recycling And Repurposing, We Can Reduce Our Demand On The Planet’s Limited Natural Resources. Recycled Fabrics Are Made Using The Waste From Both The Pre- And Post-Consumer Stage Of A Product’s Life.
                    </p>
                </div>
                <div className='text-center sm:text-start font-normal text-xl/8 text-[#0C0C0C] mt-[40px] mb-[40px]'>
                    <p>
                        We Track Our Material Usage And Progress Annually As Part Of Textile Exchange’s Corporate Fibers and Materials Benchmark, View Our Latest Report <span className='text-[#748C70] cursor-pointer'>Here</span>.
                    </p>
                </div>
            </div>
        </>
    )
}

export default SusMaterial
