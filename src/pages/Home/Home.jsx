import React from 'react'

import SellerProductCart from './component/sellerproductcart/SellerProductCart'
import Collection from './component/collectionproduct/Collection'
import ModiweekCart from './component/Modiweek/ModiweekCart'
import Login from '../Login'
import Register from '../Register'

// import SustainabilityBanner from './component/Sustainabilitybanner/SustainabilityBanner'



const Home = () => {

    return (
        <>
            <SellerProductCart />
            <Collection />
            <ModiweekCart />
            {/* <SustainabilityBanner /> */}
            <Login />
            <Register />


        </>
    )
}

export default Home