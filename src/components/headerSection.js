import React from "react";

function headerSection() {
  return (
    <div>
      <header>
        <div className="more">
          <img src={require("../assets/img/open-menu.svg")}></img>
        </div>
        <div className="title">
          <h2>تسک‌ها</h2>
          <h4>چه برنامه‌ای دارید؟</h4>
        </div>
        <div className="notifications">
          <img src={require("../assets/img/bell.svg")}></img>
        </div>
      </header>
    </div>
  );
}

export default headerSection;
