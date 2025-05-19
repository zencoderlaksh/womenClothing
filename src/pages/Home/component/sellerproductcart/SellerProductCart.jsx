import React from 'react'
import IMAGES from '../../../../assets/images/projectImage'
import SellerCart from '../../../../components/bestsellerscart/SellerCart'





const SellerProductCart = () => {
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

        }
    ]

    return (
        <>
            <div className="text-content sm: mx-auto  w-[74%] flex items-center justify-between mt-[88px]">
                <div className="left">
                    <h3 className=' text-3xl font-bold'>Best Sellers</h3>
                </div>

                <div className="right font-normal">
                    <button>view all</button>
                </div>

            </div>

            <div className="cart-data sm: mx-auto flex items-center justify-center flex-wrap gap-5 px-4">

                {
                    DataProduct.map((item, i) => {
                        return (
                            <div className="cart">
                                <SellerCart key={i} id={item.id} img={item.img} title={item.title} content={item.content} price={item.price} color={item.color} />

                            </div>

                        )

                        
                    })
                    
                }
                
            </div>



        </>
    )
}

export default SellerProductCart