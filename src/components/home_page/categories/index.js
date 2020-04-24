import React from "react";
import '../../../screens/Home.css'
import './style.css'

import { tags } from "../../../data/dataArray"


function categories() {
  return (
    <div className="categories">
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
