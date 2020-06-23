import React, {useState} from "react";
import "./style.css";

import { connect } from "react-redux";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { tagAdd } from "../../../redux/actions";
import Modal from './modal'

const createTag = (details, index) => {
  return (
    <div
      className="tag"
      onClick={() => console.log(`tag (${details.id}) ${details.name} clicked`)}
      key={index}
    >
      <span>{details.name}</span>
      <div style={{ backgroundColor: details.color, direction: "rtl" }}>.</div>
    </div>
  );
};

const Categories = ({ tags, addTag }) => {
  console.log("tags: ", tags);

  const [show, setShow] = useState(false);
  const [active, setActive] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="categories">
      <div className="categorie-header">
        <h2 className="categories-title">تگ‌ها</h2>
        <div onClick={handleShow} className="categories-btn">
          <span className="categories-btn-span">ساخت تگ جدید</span>
          <AddCircleIcon className="categories-btn-icon" />
        </div>
      </div>

      {/* <div className="main-carousel" className="tags-wrap"
        data-flickity='{"cellAlign": "right","rightToLeft": true, "prevNextButtons": false, "pageDots": false}'>
        {tags.map((tag, index) => (
          <div key={tag.id} className="carousel-cell">
            {createTag(tag, index)}
          </div>
        ))}
      </div> */}

      <div className="carousel-wrap">
        {tags.map((tag, index) => (
          <div key={tag.id} className="carousel-cell">
            {createTag(tag, index)}
          </div>
        ))}
      </div>

      <Modal show={show} close={handleClose} tags={tags} addTag={addTag} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  tags: state.tags,
});

const mapDispatchToProps = (dispatch) => ({
  addTag: (name, color) => dispatch(tagAdd(name, color)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
