
import React from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "../layout/Layout";
import Home from "../pages/Home/Home";
import Collection from "../pages/Collections/Collection";
import NewIn from "../pages/NewIn/NewIn";
import ModiWeek from "../pages/ModiWeek/ModiWeek";
import PlusSize from "../pages/PlusSize/PlusSize";
import Sustainliblity from "../pages/Sustainiblity/Sustainliblity";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import SearchProduct from "../pages/Search/SearchProduct";

import FilterShopPage from "../pages/FilterShopPage/FilterShopPage";

import ModiWeekPage from "../pages/ModiWeek/ModiWeekPage";
import ProductOrder from "../pages/Home/component/OrderProduct/ProductOrder";
import Collectionproduct from "../pages/Home/component/collectionproduct/Collectionproduct";
import Essentialdress from "../pages/Home/component/PlusSizeProductOrder/Essentialdress";
import CartPage from "../pages/Home/component/Cart/CartPage";
import InfoPage from "../pages/Home/component/INformation/InfoPage";
import ShippingPage from "../pages/Home/component/Shipping/ShippingPage";
import PaymentPage from "../pages/Home/component/Payment/PaymentPage";


import SusMaterial from "../pages/SusMaterial/SusMaterial";
import Contact from "../pages/Contact/Contact";
import Faqs from "../pages/Faqs/Faqs";
import Success from "../pages/PaymentSuccess/Success";
import Failed from "../pages/PaymentFailed/Failed";





const AppRoutes = () => {
  return (
    <>

      <Routes>

        <Route element={<Layout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path='/wishlist' element={<WishListPage />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />

          <Route path='/collectionproduct' element={<Collectionproduct />} />


          <Route path="/newin" element={<NewIn />} />
          <Route path="/modiweek" element={<ModiWeek />} />
          <Route path="/plussize" element={<PlusSize />} />
          <Route path="/sustainability" element={<Sustainliblity />} />
          <Route path='/searchproduct' element={<SearchProduct />} />
          <Route path="/filtershoppage" element={<FilterShopPage />} />

          <Route path='/modiweekpage' element={<ModiWeekPage />} />
          <Route path='/productorder' element={<ProductOrder />} />
          <Route path='/essentialdress' element={<Essentialdress />} />
          <Route path='/cartpage' element={<CartPage />} />
          <Route path='/infopage' element={<InfoPage />} />
          <Route path='/shippingpage' element={<ShippingPage />} />
          <Route path='/paymentpage' element={<PaymentPage />} />

          <Route path="/susmaterial" element={<SusMaterial />} />
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/faqs" element={<Faqs />}></Route>
          <Route path="/paymentsuccess" element={<Success />}></Route>
          <Route path="/paymentfailed" element={<Failed />}></Route>


        </Route>

      </Routes>



    </>
  );
}

export default AppRoutes;