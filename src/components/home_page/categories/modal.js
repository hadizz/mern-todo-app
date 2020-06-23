import React, { useState, useCallback } from "react";
import { Close } from "@material-ui/icons";
// import "./modal.css";
import DoneRoundedIcon from "@material-ui/icons/DoneRounded";
import DoneAllRoundedIcon from "@material-ui/icons/DoneAllRounded";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";
import { HuePicker } from "react-color";

export default function Modal({ show, close, tags, addTag }) {
  const [tag, setTag] = useState("");
  const [color, setColor] = useState("#fff");
  const [sctc, setSctc] = useState("black");

  const [stat, setStat] = useState(false);
  const [statMsg, setStatMsg] = useState([0, ""]);
  const [isBtnClicked, setIsBtnClicked] = useState(false);

  const onEditTagChange = useCallback((event) => {
    setTag(event.target.value);
  }, []);

  const handleSubmit = (event) => {
    console.log("hale clicked");

    if ( tag !== "" ) {
      addTag(tag, color);
      setStatMsg([0, "با موفقیت ادیت شد"]);
    }
    else{
      setStatMsg([2, "!تگ بی اسم نمی‌تونی ایجاد کنی"]);
    }

    setIsBtnClicked(true);
    setStat(true);

    setTag("");
    setColor("#fff");
    setSctc("black");
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

  return (
    <>
      {show && (
        <div className="dimmer2">
          <div id="modal-2" className="modal-container2">
            {/* header */}
            <div className="edit-modal-header">
              <div className="edit-modal-close">
                <Close
                  onClick={() => {
                    close();
                    setStat(false);
                    setStatMsg([0, ""]);
                    setIsBtnClicked(false);
                  }}
                  style={{ cursor: "pointer" }}
                />
              </div>
              <div className="edit-modal-arrow">
                <ArrowBackIosRoundedIcon
                  onClick={() => {
                    close();
                    setStat(false);
                    setStatMsg([0, ""]);
                    setIsBtnClicked(false);
                  }}
                  style={{ cursor: "pointer", fontSize: 35 }}
                />
              </div>
              <h3 style={{ cursor: "default" }}>تگ جدید</h3>
            </div>

            <div className="edit-modal-center">
              {/* form */}
              <form onSubmit={handleSubmit} className="edit-modal-form">
                <input
                  className="edit-modal-form-input"
                  placeholder="تگ جدیدتو بنویس"
                  value={tag}
                  onChange={onEditTagChange}
                ></input>

                <div style={{ marginTop: 20 }}>
                  <HuePicker
                    color={color}
                    onChange={(color) => {
                      setColor(color.hex);
                      setSctc("white");
                    }}
                  />
                </div>

                <center
                  style={{
                    color: sctc,
                    marginTop: 20,
                    height: 40,
                    background: color,
                    padding: 10,
                  }}
                >
                  رنگ انتخاب شده
                </center>

                <button
                  onClick={handleSubmit}
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

              {/* status */}
              <ShowStatus />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

HuePicker.defaultProps = {
  width: "100%",
  height: "16px",
};
