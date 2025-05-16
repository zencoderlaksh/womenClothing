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
            price: '$180'

        },

        {
            id: 2,
            img: IMAGES.imgTwo,
            title: 'Technical Silk',
            content: 'Make A Splash',
            price: '$120'

        },

        {
            id: 3,
            img: IMAGES.imgThree,
            title: 'Cool Weave',
            content: 'Anywhere Dress',
            price: '$220'

        }
    ]

    return (
        <>
            <div className="cart-data sm: mx-auto flex items-center justify-center flex-wrap gap-5 px-4">
                {
                    DataProduct.map((item, i) => {
                        return (
                            <div className="cart">
                                <SellerCart key={i} id={item.id} img={item.img} title={item.title} content={item.content} price={item.price} />
                            </div>



                        )
                    })
                }
            </div>

        </>
    )
}

export default SellerProductCart