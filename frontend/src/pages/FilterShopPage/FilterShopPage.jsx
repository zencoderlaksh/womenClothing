import React, { useState } from 'react';
import SearchCards from '../../components/SearchCart/SearchCards';
import IMAGES from '../../assets/images/projectImage';
import Filters from '../../components/Filters/Filters';

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
        },
        {
            id: 7,
            img: IMAGES.filterShopOne,
            title: 'Winter Cardigan',
            content: 'Turn It Up Knit',
            price: '$140',
            color: ['#403F3F', '#748C70']
        },
        {
            id: 8,
            img: IMAGES.filterShopTwo,
            title: 'Everyday Tee',
            content: 'Turn It Up Casual',
            price: '$85',
            color: ['#0C0C0C', '#D8BFD8']
        },
        {
            id: 9,
            img: IMAGES.filterShopThree,
            title: 'Flowy Maxi Dress',
            content: 'Turn It Up Maxi',
            price: '$210',
            color: ['#FFC0CB', '#748C70']
        },
        {
            id: 10,
            img: IMAGES.filterShopFour,
            title: 'Fitted Denim Jacket',
            content: 'Turn It Up Denim',
            price: '$195',
            color: ['#000080', '#708090']
        },
        {
            id: 11,
            img: IMAGES.filterShopFive,
            title: 'Linen Shorts',
            content: 'Turn It Up Shorts',
            price: '$120',
            color: ['#F5DEB3', '#0C0C0C']
        },
        {
            id: 12,
            img: IMAGES.filterShopSix,
            title: 'Boss Blazer',
            content: 'Turn It Up Formal',
            price: '$305',
            color: ['#0C0C0C', '#748C70']
        },
        {
            id: 13,
            img: IMAGES.filterShopFour,
            title: 'Fitted Denim Jacket',
            content: 'Turn It Up Denim',
            price: '$195',
            color: ['#000080', '#708090']
        },
        {
            id: 14,
            img: IMAGES.filterShopFive,
            title: 'Linen Shorts',
            content: 'Turn It Up Shorts',
            price: '$120',
            color: ['#F5DEB3', '#0C0C0C']
        },
    ];

    const [visibleCount, setVisibleCount] = useState(6);

    const handleLoadMore = () => {
        setVisibleCount(prev => prev + 6);
    };

    return (
        <>
            <div>
                <div>
                    <img className='mt-10 w-screen' src={IMAGES.filterBanner} alt="" />
                </div>
                <div className='lg:flex'>
                    <div className="card-left bg-white ml-4 sm:ml-6 md:ml-59 lg:ml-18 mt-5 lg:w-[30%]">
                        <Filters />
                    </div>
                    <div className='card-data lg:mx-auto flex items-center justify-center gap-5 flex-wrap px-3'>

                        {
                            DataProduct.slice(0, visibleCount).map((item, i) => {
                                return (
                                    <div className="card" key={item.id}>
                                        <div className="card-right">
                                            <SearchCards
                                                id={item.id}
                                                img={item.img}
                                                icon={item.i}
                                                title={item.title}
                                                content={item.content}
                                                price={item.price}
                                                color={item.color}
                                            />
                                        </div>
                                    </div>
                                )
                            })
                        }

                        {
                            visibleCount < DataProduct.length && (
                                <div className='flex items-center justify-center w-full'>
                                    <button
                                        onClick={handleLoadMore}
                                        className='w-[184px] py-2 mb-5 border border-[#5A6D57] text-[#5A6D57] cursor-pointer'
                                    >
                                        {button} Load More
                                    </button>
                                </div>
                            )
                        }

                    </div>
                </div>
            </div>
        </>
    );
};

export default FilterShopPage;