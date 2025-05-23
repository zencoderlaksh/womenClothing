import React from 'react'
import Collection from './component/collectionproduct/Collection'
import SellerProductCart from './component/sellerproductcart/SellerProductCart'
import LandingpageHeroBanner from './component/LandinPageHeroBanner/LandingpageHeroBanner'
import ModiweekCart from './component/ModiweekCart/ModiweekCart'
import LadingPageBanner from './component/SustainabilityBanner/LadingPageBanner'
import LandingModimal from './component/ModimalCart/LandingModimal'
import FilterShopPage from '../FilterShopPage/FilterShopPage'
import PlusSize from '../PlusSize/PlusSize'


const Home = () => {
    return (
        <>

            <LandingpageHeroBanner />
            <SellerProductCart />
            <Collection />
            <ModiweekCart />
            <LadingPageBanner />
            <LandingModimal /> 
             <FilterShopPage/> 
             <PlusSize/>


        </>
    )
}

export default Home