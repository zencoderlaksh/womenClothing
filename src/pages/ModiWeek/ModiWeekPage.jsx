import React from 'react'
import IMAGES from '../../assets/images/projectImage'
import SellerCart from '../../components/bestsellerscart/SellerCart'

const ModiWeekPage = () => {
  const productData = [
    {
      id: 2,
      img: IMAGES.modiweek2,
      title: 'Technical Silk',
      content: 'Make A Splash',
      price: '$120',
      color: ['#909225', '#19418E', '#0C0C0C']

    },

    {
      id: 2,
      img: IMAGES.modiweek3,
      title: 'Technical Silk',
      content: 'Make A Splash',
      price: '$120',
      color: ['#909225', '#19418E', '#0C0C0C']

    },
  ]


  return (
    <>

      <div className="container flex items-center justify-between mx-auto  ">
        <div className="left">
          <img src={IMAGES.modiweek1} alt="" className='w-[500px]' />
        </div>

        <div className="right">
          <div>
            <h5 className='font-bold'>Shop the look</h5>
            <p>items</p>
          </div>
          <div className='flex gap-10'>
            {
              productData.map((item, i) => {
                return (
                  <div>
                    <SellerCart key={i} id={item.id} img={item.img} title={item.title} content={item.content} price={item.price} color={item.color} />
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default ModiWeekPage