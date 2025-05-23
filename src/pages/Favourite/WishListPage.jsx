import React from 'react'
import IMAGES from '../../assets/images/projectImage'
import SellerCart from '../../components/bestsellerscart/SellerCart'

const WishListPage = () => {
    const WishListData = [
        {
            id: 1,
            img: IMAGES.searchFive,
            title: 'Casual Wild Leg',
            content: 'Turn It Up Pants',
            price: '$130',
            color: ['#0C0C0C', '#748C70']

        },

    ]
    return (
        <>

            <div className="wishlist-cart">
                <h5 className=' font-bold text-[20px] text-center'>WishList</h5>
                <p className='text-center'>item1</p>
            </div>

            <div className="wish-list-images mx-auto flex items-center justify-start px-4">
                {
                    WishListData.map((item, i) => {
                        return (
                            <div className="cart">
                                <SellerCart key={i} id={item.id} img={item.img} title={item.title} content={item.content} price={item.price} color={item.color} icon={item.icon} />

                            </div>
                        )

                    })
                }
            </div>

        </>
    )
}

export default WishListPage