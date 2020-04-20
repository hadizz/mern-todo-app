import React from "react";
import "./mobile.css";

function mobile() {
  return (
    <div>
      <div className="header-wrap">
        <header>
          <div className="logo-container">
            <img src={require("./assets/img/heh.svg")}></img>
            <h4 className="logo-h4">تودو</h4>
          </div>
          <nav>
            <ul className="nav-links">
              <li>
                <a className="nav-link" href="#">
                  خانه
                </a>
              </li>
              <li>
                <a className="nav-link" href="#">
                  ورود
                </a>
              </li>
              <li>
                <a className="nav-link" href="#">
                  تماس
                </a>
              </li>
            </ul>
          </nav>
          <div className="cart">
            <img src={require("./assets/img/supermarket.svg")} alt="cart"></img>
          </div>
        </header>
        {/* <hr /> */}
      </div>
      <footer>home</footer>
    </div>
  );
}

export default mobile;
