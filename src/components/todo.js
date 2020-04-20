import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTag, faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'

export default function todo({ details }) {
  return (
    <>
      <div className="todoBox">
        <span className="todobox-line1">{details.description}</span>
        <div className="todobox-line2">
          <div className="tag-info">
            {/* <FontAwesomeIcon icon={faTag} className="tag-icon" style={{ color: details.tag.color }} /> */}
            <span>{details.tag.name}</span>
          </div>
          <div className="functions">
            {/* <FontAwesomeIcon icon={faTrash} style={{ color: "rgba(200, 200, 200)", marginRight: 10 }} /> */}
            {/* <FontAwesomeIcon icon={faEdit} style={{ color: "rgba(200, 200, 200)" }} /> */}
          </div>
        </div>
      </div>
    </>
  );
}
