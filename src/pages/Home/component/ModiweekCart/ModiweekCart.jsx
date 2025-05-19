import React from 'react'
import IMAGES from '../../../../assets/images/projectImage'
import ModiweekItem from '../../../../components/ModiweekDummy/ModiweekItem'

const ModiweekCart = () => {

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

            <div className="text-content sm: mx-auto  w-[74%] flex items-center justify-between mt-[88px]">
                <div className="left">
                    <h3 className=' text-3xl font-bold'>Modiweek</h3>
                </div>

            </div>
            <div className='cart-data sm: mx-auto flex items-center justify-center flex-wrap gap-8'>
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

export default ModiweekCart