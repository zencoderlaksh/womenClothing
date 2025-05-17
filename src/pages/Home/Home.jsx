import React from "react";
import SearchProduct from "./component/Search/SearchProduct";
import Register from "../Auth/Register";
import Login from "../Auth/Login";
import Filters from "../../components/Filters/Filters";

const Home = () => {
  return (
    <div>
      <Register></Register>
      <Login></Login>
      {/* <Filters></Filters>  */}
      <SearchProduct></SearchProduct>
    </div>
  );
};

export default Home;
