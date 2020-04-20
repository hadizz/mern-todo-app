import React from "react";
import "./todosHome.css";

import { tags } from "../data/dataArray"


function categories() {
  return (
    <div className="categories">
      {/* <div className="cat-title">
        <div style={{ flex: 1 }}></div>
        <h2 style={{ flex: 4 }}>تگ‌ها</h2>
        <div style={{ flex: 1 }}></div>
      </div> */}
      <h2>تگ‌ها</h2>

      <div className="tags">
        {tags.map((tag, index) => (
          <div className="tag" key={index}>
            <div style={{ backgroundColor: tag.color }}></div>
            <span>{tag.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default categories;
