import React from 'react';
import IMAGES from '../../../../assets/images/projectImage';
import SellerCart from '../../../../components/bestsellerscart/SellerCart';
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { setSelectedItem } from '../../../../features/auth/productSlice';

const SellerProductCart = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const DataProduct = [
        {
            id: 1,
            img: IMAGES.imgOne,
            title: 'Tailored Stretch',
            content: 'Turn It Up Pants',
            price: '$180',
            color: ['#0C0C0C', '#7DC3EB', '#748C70']
        },
        {
            id: 2,
            img: IMAGES.imgTwo,
            title: 'Technical Silk',
            content: 'Make A Splash',
            price: '$120',
            color: ['#909225', '#19418E', '#0C0C0C']
        },
        {
            id: 3,
            img: IMAGES.imgThree,
            title: 'Cool Weave',
            content: 'Anywhere Dress',
            price: '$220',
            color: ['#D0A5EA', '#909225', '#748C70']
        },
        {
            id: 4,
            img: IMAGES.imgOne,
            title: 'Tailored Stretch',
            content: 'Turn It Up Pants',
            price: '$180',
            color: ['#0C0C0C', '#7DC3EB', '#748C70']
        },
        {
            id: 5,
            img: IMAGES.imgTwo,
            title: 'Technical Silk',
            content: 'Make A Splash',
            price: '$120',
            color: ['#909225', '#19418E', '#0C0C0C']
        },
        {
            id: 6,
            img: IMAGES.imgThree,
            title: 'Cool Weave',
            content: 'Anywhere Dress',
            price: '$220',
            color: ['#D0A5EA', '#909225', '#748C70']
        }
    ];

    const handleClick = (item) => {
        dispatch(setSelectedItem(item));
        navigate('/productorder'); // <-- replace with correct route
    };


    return (
        <>

            <div className="container mx-auto w-[95%] flex justify-between mt-12 px-4 md:px-6">
                <div className="left">
                    <h3 className="text-3xl font-bold text-gray-800">Best Sellers</h3>
                </div>
                <div className="right font-normal">
                    <button className="text-[#5A6D57] cursor-pointer">
                        View All
                    </button>
                </div>
            </div>


            <div className="container mx-auto px-3 w-full sm:px-4 md:max-w-[1200px]">
                <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                        el: '.swiper-pagination',
                        bulletClass: 'swiper-pagination-bullet bg-blue-600 w-3 h-3 rounded-full mx-1',
                        bulletActiveClass: 'swiper-pagination-bullet-active bg-blue-800',
                    }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }}
                    className="w-full h-auto py-6 "
                >
                    {DataProduct.map((item) => (
                        <SwiperSlide key={item.id} className="flex justify-center items-center p-2">
                            <div className="cart w-full max-w-sm" onClick={() => handleClick(item)}>
                                <SellerCart
                                    id={item.id}
                                    img={item.img}
                                    title={item.title}
                                    content={item.content}
                                    price={item.price}
                                    color={item.color}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                    <div className="swiper-pagination mt-4 flex justify-center gap-1"></div>

                </Swiper>
            </div>
        </>
    );
};

export default SellerProductCart;