import React from "react";

export default function todo({ details }) {
  return (
    <div>
      <input type="checkbox"></input>
      <button className="del">حذف</button>
      <span>{details.description}</span>
    </div>
  );
}
