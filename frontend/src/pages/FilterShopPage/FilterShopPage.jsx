import React, { useState } from 'react'
import SearchCards from '../../components/SearchCart/SearchCards'
import IMAGES from '../../assets/images/projectImage'
import Filters from '../../components/Filters/Filters'

const FilterShopPage = ({ button }) => {
    const DataProduct = [
        {
            id: 1,
            img: IMAGES.filterShopOne,
            title: 'Chill Wrap Top',
            content: 'Turn It Up Top',
            price: '$160',
            color: ['#909225'],
        },

        {
            id: 2,
            img: IMAGES.filterShopTwo,
            title: 'Essential T-Shirt',
            content: 'Turn It Up T-Shirt',
            price: '$95',
            color: ['#0C0C0C', '#7DC3EB', '#748C70'],
        },

        {
            id: 3,
            img: IMAGES.filterShopThree,
            title: 'Shirt Dress',
            content: 'Turn It Up Dress',
            price: '$245',
            color: ['#0C0C0C', '#7DC3EB', '#748C70']
        },

        {
            id: 4,
            img: IMAGES.filterShopFour,
            title: 'Rule Zip Jacket',
            content: 'Turn It Up Jacket',
            price: '$199',
            color: ['#909225', '#CA6D29']
        },

        {
            id: 5,
            img: IMAGES.filterShopFive,
            title: 'New Age Linen',
            content: 'Turn It Up Pants',
            price: '$180',
            color: ['#0C0C0C', '#19418E', '#748C70']
        },

        {
            id: 6,
            img: IMAGES.filterShopSix,
            title: 'Boss Pullover',
            content: 'Turn It Up Pullover',
            price: '$280',
            color: ['#0C0C0C', '#748C70']
        }
    ]
    return (
        <>
            <div>
                <div>
                    <img className='mt-10 w-screen' src={IMAGES.filterBanner} alt="" />
                </div>
                <div className='lg:flex'>
                    <div className="card-left bg-white ml-4 sm:ml-6 md:ml-59 lg:ml-18 mt-5 lg:w-[30%]">
                        <Filters></Filters>
                    </div>
                    <div className='card-data lg:mx-auto flex items-center justify-center gap-5 flex-wrap px-3'>

                        {
                            DataProduct.map((item, i) => {
                                return (

                                    <div className="card">
                                        <div className="card-right">
                                            <SearchCards key={i} id={item.id} img={item.img} icon={item.i} title={item.title} content={item.content} price={item.price} color={item.color} />
                                        </div>
                                    </div>
                                )
                            })
                        }
                        <div className='flex items-center justify-center'>
                            <button className='w-[184px] py-2 mb-5 border-1 border-[#5A6D57] text-[#5A6D57] cursor-pointer'>{button}Load More</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FilterShopPage
