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
// import WishListPage from "../pages/Favourite/WishListPage";
import FilterShopPage from "../pages/FilterShopPage/FilterShopPage";
import ModiWeekPage from "../pages/ModiWeek/ModiWeekPage";



const AppRoutes = () => {
  return (
    <Routes>

      <Route element={<Layout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path='/wishlist' element={<WishListPage />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/newin" element={<NewIn />} />
        <Route path="/modiweek" element={<ModiWeek />} />
        <Route path="/plussize" element={<PlusSize />} />
        <Route path="/sustainability" element={<Sustainliblity />} />
        <Route path='/searchproduct' element={<SearchProduct />} />
        <Route path="/filtershoppage" element={<FilterShopPage />} />
        <Route path='/modiweekpage' element={<ModiWeekPage/>}/>
      </Route>
    </Routes>
  );
};

export default AppRoutes;