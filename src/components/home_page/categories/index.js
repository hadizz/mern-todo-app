import React from "react";
import './style.css'

import { tags } from "../../../data/dataArray"

const createTag = (details, index) => {
  return (
    <div className="tag" onClick={() => console.log(`tag ${details.name} clicked`)} key={index}>
      <span>{details.name}</span>
      <div style={{ backgroundColor: details.color, direction: "rtl" }}>.</div>
    </div>
  );
}

function categories() {
  return (
    <div className="categories">
      <h2>تگ‌ها</h2>

      <div class="main-carousel" className="tags-wrap"
        data-flickity='{"cellAlign": "right","rightToLeft": true, "prevNextButtons": false, "pageDots": false}'>
        {tags.map((tag, index) => (
          <div class="carousel-cell">
            {createTag(tag, index)}
          </div>
        ))}
      </div>

    </div>
  );
}

export default categories;
