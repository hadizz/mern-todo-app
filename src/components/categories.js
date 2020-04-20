import React from "react";
import "./todosHome.css";

const tags = [
  { name: "کار", color: "#001" },
  { name: "دانشگاه", color: "#002" },
  { name: "خرید", color: "#012" },
  { name: "پروژه", color: "#101" },
  { name: "ددلاین", color: "#456" },
  { name: "ورزش", color: "#091" },
  { name: "بهداشت", color: "#999" },
  { name: "قرار", color: "#386" },
];

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
