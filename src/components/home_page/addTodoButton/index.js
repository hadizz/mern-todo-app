import React, { useState, useCallback } from "react";
import './style.css'

import AddTodoModal from './addTodoModal'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import AddIcon from '@material-ui/icons/Add';

import { connect } from "react-redux";
import { todoAdd, tagAdd } from "../../../redux/actions";

const AddTodoBtn = ({todos, tags, addTodo, addTag}) => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    console.log("closeModal");

    setIsModalOpen(false);
  };

  const openModal = useCallback(event => {
    event.preventDefault();
    console.log(isModalOpen);
    setIsModalOpen(true);
  }, [isModalOpen]);

  return (
    <div>
      <div className="addTodoBtn">
        <button className="btnWrap" onClick={openModal}>
          <div className="addIcon-pc">
            <AddIcon style={{ marginRight: 5, marginLeft: 5 }} />
          </div>
          <div className="addIcon-mob">
            <AddCircleIcon className="addCircleIcon" />
            <span>تسک جدید</span>
          </div>
        </button>
      </div>
      <AddTodoModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        addTodo={addTodo}
        addTag={addTag}
        tags={tags}
      />
    </div>
  );
}

const mapStateToProps = (state) => ({
  todos: state.todos,
  tags: state.tags
});

const mapDispatchToProps = (dispatch) => ({
  addTodo: (date, description, tag) => dispatch(todoAdd(date, description, tag)),
  addTag: (name, color) => dispatch(tagAdd(name, color)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTodoBtn);
