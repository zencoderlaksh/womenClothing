import React from 'react';
import IMAGES from '../../assets/images/projectImage';
import SellerCart from '../../components/bestsellerscart/SellerCart';
import ModiweekItem from '../../components/ModiweekDummy/ModiweekItem';

const ModiWeekPage = () => {
  const productData = [
    {
      id: 2,
      img: IMAGES.modiweek2,
      title: 'FABRIC TRENCH',
      content: 'Jacket',
      price: '$140',
      color: ['#0C0C0C'],
    },
    {
      id: 2,
      img: IMAGES.modiweek3,
      title: 'STRUCTURED CORSET',
      content: 'Dress',
      price: '$80',
      color: ['#0C0C0C', '#748C70'],
    },
  ];

  const ModiweekData = [
    {
      id: 1,
      img: IMAGES.ModiweekOne,
      title: 'Sunday',
    },
    {
      id: 2,
      img: IMAGES.ModiweekTwo,
      title: 'Monday',
    },
    {
      id: 3,
      img: IMAGES.ModiweekThree,
      title: 'Tuesday',
    },
    {
      id: 4,
      img: IMAGES.ModiweekFour,
      title: 'Wednesday',
    },
  ];

  return (
    <>
      <div className="container mx-auto px-4 py-6 sm:py-8 max-w-[90%] md:max-w-[1200px] flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
       
        <div className="w-full lg:w-1/2 flex flex-col items-center">
          <h4 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">Saturday</h4>
          <img
            src={IMAGES.modiweek1}
            alt="Saturday Look"
            className="w-full max-w-[400px] sm:max-w-[500px] h-auto"
          />
        </div>

        
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <div>
            <h5 className="text-lg sm:text-xl md:text-2xl font-bold">Shop the Look</h5>
            <p className="text-sm sm:text-base text-gray-600">Items</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            {productData.map((item, i) => (
              <SellerCart
                key={i}
                id={item.id}
                img={item.img}
                title={item.title}
                content={item.content}
                price={item.price}
                color={item.color}
                className="w-full sm:w-1/2"
              />
            ))}
          </div>
        </div>
      </div>

    
      <div className="container mx-auto px-4 py-6 sm:py-8 max-w-[90%] md:max-w-[1200px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {ModiweekData.map((item, i) => (
            <ModiweekItem
              key={i}
              id={item.id}
              img={item.img}
              title={item.title}
              className="w-full"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ModiWeekPage;