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
import SearchProduct from "../pages/Home/component/Search/SearchProduct";
import FilterShopPage from "../pages/FilterShopPage/FilterShopPage";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Routes outside layout */}

      {/* Routes inside layout */}
      <Route element={<Layout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/newin" element={<NewIn />} />
        <Route path="/modiweek" element={<ModiWeek />} />
        <Route path="/plussize" element={<PlusSize />} />
        <Route path="/sustainability" element={<Sustainliblity />} />
        <Route path='/searchproduct' element={<SearchProduct/>}/>
        <Route path="/filtershoppage" element={<FilterShopPage/>}/>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
