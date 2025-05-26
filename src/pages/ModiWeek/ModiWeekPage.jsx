import React from 'react'
import IMAGES from '../../assets/images/projectImage'
import SellerCart from '../../components/bestsellerscart/SellerCart'
import ModiweekItem from '../../components/ModiweekDummy/ModiweekItem'

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
  ]

  return (
    <>

      <div className="container mx-auto flex items-center justify-around ">
        <div className="left">
          <h4 className='font-bold'>Saturday</h4>
          <img src={IMAGES.modiweek1} alt="" className='w-[500px]' />
        </div>

        <div className="right">
          <div>
            <h5 className='font-bold'>Shop the look</h5>
            <p>items</p>
          </div>
          <div className='flex gap-8'>
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

      <div className='cart-data  sm: mx-auto flex items-center justify-center flex-wrap gap-8'>
        {
          ModiweekData.map((item, i) => {
            return (
              <div className="cart">
                <ModiweekItem key={i} id={item.id} img={item.img} title={item.title} />
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default ModiWeekPage