import React from "react";
import "./Home.css";

import Header from "../components/home_page/header";
import Categories from "../components/home_page/categories";
import Upcoming from "../components/home_page/upcoming";
import AddTodoBtn from "../components/home_page/addTodoButton/";

const Home = () => {
  return (
    <div>
      <Header />
      <Categories />
      <Upcoming />
      <AddTodoBtn />
    </div>
  );
}

export default Home;
