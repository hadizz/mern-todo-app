import React, { useState, useCallback } from 'react'

import { CirclePicker } from 'react-color';

import './addTodoModal.css';

import { tags } from '../data/dataArray'

const AddTodoModal = ({ isOpen, onClose }) => {

    const [isTagOpen, setIsTagOpen] = useState(false);

    const tagFormDoor = useCallback(event => {
        event.preventDefault();
        setIsTagOpen(!isTagOpen);
    }, [isTagOpen]);

    if (!isOpen) {
        return null;
    }

    return (
        <div className="dimmer">
            <div className="modal-container">
                <h3>تسک جدید</h3>
                <form >
                    <input placeholder="چه‌کاری‌می‌خواهیدانجام‌دهید؟"></input>
                    <select>
                        {tags.map((tag, index) => (
                            <option key={index} value={tag.name}>{tag.name}</option>
                        ))}
                    </select>
                </form>
                <span onClick={tagFormDoor} style={{ cursor: "pointer" }} className="addNewTagTitleModal">ایجاد تگ جدید؟</span>

                {isTagOpen &&
                    <form className="tagForm" >
                        <input placeholder="تگ تگ جدید خود را وارد کنید"></input>
                        <CirclePicker />
                        <button>اضافه</button>
                    </form>
                }
                <br />
                <button className="addNewTaskButtonModal" onClick={onClose}>ایجاد تسک جدید</button>
            </div>
        </div>
    );
}

export default AddTodoModal;