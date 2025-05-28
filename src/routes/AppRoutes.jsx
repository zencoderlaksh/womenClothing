import React from "react";
import { Routes, Route } from "react-router-dom";

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

import Essentialdress from "../pages/Home/component/PlusSizeProductOrder/Essentialdress";
import CartPage from "../pages/Home/component/Cart/CartPage";
import InfoPage from "../pages/Home/component/INformation/InfoPage";
import ShippingPage from "../pages/Home/component/Shipping/ShippingPage";
import PaymentPage from "../pages/Home/component/Payment/PaymentPage";
import CollectionMenuPage from "../pages/Home/component/CollectionMenu/CollectionMenuPage";
import NewInMenuPage from "../pages/Home/component/NewINMenu/NewInMenuPage";
import PlusSizeMenuPage from "../pages/Home/component/PlusSizeMenu/PlusSizeMenuPage";
import SustainbilityMenuPage from "../pages/Home/component/SustainabilityMenu/SustainbilityMenuPage";




const AppRoutes = () => {
  return (
    <Routes>

      <Route element={<Layout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/newin" element={<NewIn />} />
        <Route path="/modiweek" element={<ModiWeek />} />
        <Route path="/plussize" element={<PlusSize />} />
        <Route path="/sustainability" element={<Sustainliblity />} />
        <Route path='/searchproduct' element={<SearchProduct />} />
        <Route path="/filtershoppage" element={<FilterShopPage />} />
        <Route path='/modiweekpage' element={<ModiWeekPage />} />
        <Route path='/productOrder' element={<ProductOrder />} />
        <Route path='/essentialdress' element={<Essentialdress />} />
        <Route path='/cartpage' element={<CartPage />} />
        <Route path='/infopage' element={<InfoPage />} />
        <Route path='/shippingpage' element={<ShippingPage />} />
        <Route path='/paymentpage' element={<PaymentPage />} />
        <Route path='/collectionmenupage' element={<CollectionMenuPage />} />
        <Route path='/newinmenuepage' element={<NewInMenuPage />} />
        <Route path='/plussizemenupage' element={<PlusSizeMenuPage />} />
        <Route path='/sustainbilitymenupage' element={<SustainbilityMenuPage/>}/>
      </Route>
    </Routes>
  );
};

export default AppRoutes;