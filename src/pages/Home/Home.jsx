import React from 'react'
import Collection from './component/collectionproduct/Collectionproduct'
import SellerProductCart from './component/sellerproductcart/SellerProductCart'
import LandingpageHeroBanner from './component/LandinPageHeroBanner/LandingpageHeroBanner'
import ModiweekCart from './component/ModiweekCart/ModiweekCart'
import LadingPageBanner from './component/SustainabilityBanner/LadingPageBanner'
import LandingModimal from './component/ModimalCart/LandingModimal'


const Home = () => {
    return (
        <>


          
          

            <LandingpageHeroBanner />
            <SellerProductCart />
            <Collection />
            <ModiweekCart />
            <LadingPageBanner />
            <LandingModimal />  


        </>
    )
}

export default Home