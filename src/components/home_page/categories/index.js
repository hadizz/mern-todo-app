import React from "react";
import './style.css'

import { tags } from "../../../data/dataArray"

function categories() {
  return (
    <div className="categories">
      <h2>تگ‌ها</h2>

      <div class="main-carousel" className="tags-wrap"
        data-flickity='{"cellAlign": "right","rightToLeft": true, "prevNextButtons": false, "pageDots": false}'>
        {tags.map((tag, index) => (
          <div class="carousel-cell">
            <div className="tag" onClick={() => console.log(`tag ${tag.name} clicked`)} key={index}>
              <div style={{ backgroundColor: tag.color }}></div>
              <span>{tag.name}</span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default categories;
