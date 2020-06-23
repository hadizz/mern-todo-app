import React, { useState, useCallback } from "react";
import { HuePicker } from "react-color";
import "./addTodoModal.css";
import { Close } from "@material-ui/icons";
import DoneRoundedIcon from "@material-ui/icons/DoneRounded";
import DoneAllRoundedIcon from "@material-ui/icons/DoneAllRounded";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";

const AddTodoModal = ({ isOpen, onClose, addTodo, addTag, tags }) => {

  const [isBtnClicked, setIsBtnClicked] = useState(false);
  const [sctc, setSctc] = useState("black");

  const [newTaskText, setNewTaskText] = useState("");
  const [newTaskTag, setNewTaskTag] = useState("یه تگ انتخاب کن");

  const [isTagOpen, setIsTagOpen] = useState(false);
  const [newTagText, setNewTagText] = useState("");
  const [newTagColor, setNewTagColor] = useState("#fff");

  const [stat, setStat] = useState(false);
  const [statMsg, setStatMsg] = useState([0, ""]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      "data is ->\nnewTaskText:" +
        newTaskText +
        "\nnewTaskTag: " +
        newTaskTag +
        "\nisTagOpen: " +
        isTagOpen +
        "\nnewTagText: " +
        newTagText +
        "\nnewTagColor: " +
        newTagColor
    );
    // be aware of isbtnclicked value !!! ( maybe just visit this modal and don't wwant a new task )

    setStat(false);
    setIsBtnClicked(false);
    setSctc("black");
    setNewTaskText("");
    setNewTaskTag("یه تگ انتخاب کن");
    setIsTagOpen(false);
    setNewTagText("");
    setNewTagColor("#fff");

    onClose();
  };

  const onNewTaskText = useCallback((event) => {
    setNewTaskText(event.target.value);
  }, []);

  const onNewTaskTag = useCallback((event) => {
    setNewTaskTag(event.target.value);
  }, []);

  const onNewTagText = useCallback((event) => {
    setNewTagText(event.target.value);
  }, []);

  const tagFormDoor = useCallback(
    (event) => {
      event.preventDefault();
      setIsTagOpen(!isTagOpen);
      // console.log("tag toggled");
    },
    [isTagOpen]
  );

  const completeAddNewTask = (event) => {
    if (newTaskText !== "") {
      if (isTagOpen) {
        if (newTagText !== '') {
          addTag(newTagText, newTagColor);
          addTodo("1399/01/01", newTaskText, {
            id: tags.length,
            name: newTagText,
            color: newTagColor,
          });
          setStatMsg([0, "با موفقیت اضافه شد"]);
        }
        else {
          setStatMsg([2, "!تگ نمی‌تونه خالی باشه"]);
        }
      } else { 
        if( newTaskTag !== "یه تگ انتخاب کن") {
          const stag = tags.filter((t) => t.name === newTaskTag)[0];
          // console.log("stag: ", stag);
          addTodo("1399/01/01", newTaskText, stag);
          setStatMsg([0, "با موفقیت اضافه شد"]);
        }
        else {
          setStatMsg([2, "!باید یه تگ براش انتخاب کنی"]);
        }
      }
    }
    else{
      setStatMsg([2, "!تسک نمی‌تونه خالی باشه"]);
    }
    setStat(true);
    setIsBtnClicked(true);
  };

  
  const ShowStatus = () => {
    if (!stat) {
      return null;
    }
    switch (statMsg[0]) {
      case 0:
        return (
          <center style={{ color: "green", marginTop: 7, marginBottom: -10 }}>
            {statMsg[1]}
          </center>
        );
        break;
      case 1:
        return (
          <center style={{ color: "blue", marginTop: 7 }}>{statMsg[1]}</center>
        );
        break;
      case 2:
        return (
          <center style={{ color: "red", marginTop: 7 }}>{statMsg[1]}</center>
        );
        break;
      default:
        return (
          <center style={{ color: "purple", marginTop: 7 }}>
            !ارور ناشناخته
          </center>
        );
        break;
    }
  };


  if (!isOpen) {
    return null;
  }

  return (
    <div className="dimmer">
      <div className="modal-container">
        {/* header */}
        <div className="add-modal-header">
          <div className="add-modal-header-close">
            <Close onClick={handleSubmit} style={{ cursor: "pointer" }} />
          </div>
          <div className="add-modal-header-arrow">
            <ArrowBackIosRoundedIcon
              onClick={handleSubmit}
              style={{ cursor: "pointer", fontSize: 35 }}
            />
          </div>
          <h3 style={{ cursor: "default" }}>تسک جدید</h3>
        </div>

        <div className="add-modal-center">
          {/* from */}
          <form onSubmit={handleSubmit} className="add-modal-form">
            {/* input task */}
            <input
              className="add-modal-form-input"
              value={newTaskText}
              placeholder="تسک جدیدتو بنویس"
              onChange={onNewTaskText}
            ></input>

            {/* select tag */}
            <select
              value={newTaskTag}
              onChange={onNewTaskTag}
              className="add-modal-form-select"
              disabled={isTagOpen}
            >
              <option
                className="add-modal-form-option"
                value={"یه تگ انتخاب کن"}
              >یه تگ انتخاب کن</option>
              {tags.map((tag) => (
                <option
                  className="add-modal-form-option"
                  key={tag.id}
                  value={tag.name}
                >
                  {tag.name}
                </option>
              ))}
            </select>

            {/* create new tag */}
            {isTagOpen ? (
              <h4
                onClick={tagFormDoor}
                style={{
                  direction: "rtl",
                  marginTop: 15,
                  marginRight: 10,
                  cursor: "pointer",
                }}
              >
                {" "}
                - تگ جدید
              </h4>
            ) : (
              <span
                onClick={tagFormDoor}
                style={{ cursor: "pointer" }}
                className="add-modal-from-new-tag-title"
              >
                ایجاد تگ جدید؟
              </span>
            )}
            {isTagOpen && (
              <>
                <input
                  className="add-modal-form-new-tag-input"
                  placeholder="تگ جدیدتو بنویس"
                  value={newTagText}
                  onChange={onNewTagText}
                ></input>

                {/* select color */}

                <HuePicker
                  color={newTagColor}
                  onChange={(color) => {
                    setNewTagColor(color.hex);
                    setSctc("white");
                  }}
                />

                <center
                  style={{
                    color: sctc,
                    marginTop: 20,
                    height: 40,
                    background: newTagColor,
                    padding: 10,
                  }}
                >
                  رنگ انتخاب شده
                </center>
              </>
            )}

            {/* button */}
            <br />
            <button
              onClick={completeAddNewTask}
              style={{
                backgroundColor: isBtnClicked ? "#006aff7c" : "#006aff",

                cursor: isBtnClicked ? "not-allowed" : "pointer",
              }}
              disabled={isBtnClicked}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                {isBtnClicked ? (
                  <DoneAllRoundedIcon style={{ color: "white" }} />
                ) : (
                  <DoneRoundedIcon style={{ color: "white" }} />
                )}
                <span style={{ marginTop: 2, marginLeft: 5, fontSize: 18 }}>
                  حلـــه
                </span>
              </div>
            </button>
          </form>

          <ShowStatus />
        </div>
      </div>
    </div>
  );
};

HuePicker.defaultProps = {
  width: "100%",
  height: "16px",
};

export default AddTodoModal;
