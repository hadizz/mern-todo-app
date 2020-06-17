import React from "react";
import "./Home.css";

import Header from "../components/home_page/header";
import Categories from "../components/home_page/categories";
import Upcoming from "../components/home_page/upcoming";
import AddTodoBtn from "../components/home_page/addTodoButton/";

const Home = () => {
  return (
    <div>
      {/* <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/741773860&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true">
      </iframe>
      <div className="style1">
        <a href="https://soundcloud.com/elahe-ahmadipour"
          title="elahe ahmadipour" target="_blank" className="style2"
        >
          elahe ahmadipour
        </a>
           ·
        <a
          href="https://soundcloud.com/elahe-ahmadipour/az-khone-javanan-parastoo-ahmadi"
          title="Az khone javanan _ Parastoo Ahmadi" target="_blank" className="style3">
          Az khone javanan _ Parastoo Ahmadi
        </a>
      </div> */}
      <Header />
      <Categories />
      <Upcoming />
      <AddTodoBtn />
    </div >
  );
}

export default Home;
