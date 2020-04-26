import React, { useState, useCallback } from 'react'
import { Close } from '@material-ui/icons'
import './modal.css'
import { tags } from "../../../data/dataArray"
import DoneRoundedIcon from '@material-ui/icons/DoneRounded';
import DoneAllRoundedIcon from '@material-ui/icons/DoneAllRounded';
export default function Modal(props) {

    const [task, setTask] = useState(props.preTask);
    const [stat, setStat] = useState(false);
    const [statMsg, setStatMsg] = useState([0, ""]);
    const [isBtnClicked, setIsBtnClicked] = useState(false);

    const onEditTaskChange = useCallback((event) => {
        setTask(event.target.value);
    }, []);

    const editTask = (event) => {
        console.log("hale clicked");
        setIsBtnClicked(true);
        setStat(true);
        setStatMsg([0, "با موفقیت ادیت شد"]);
    }

    const ShowStatus = () => {
        if (!stat) {
            return null;
        }
        switch (statMsg[0]) {
            case 0:
                return <center style={{ color: "green", marginTop: 7, marginBottom: -10 }}>{statMsg[1]}</center>
                break;
            case 1:
                return <span style={{ color: "blue", marginTop: 7 }}>{statMsg[1]}</span>
                break;
            case 2:
                return <span style={{ color: "red", marginTop: 7 }}>{statMsg[1]}</span>
                break;
            default:
                return <span style={{ color: "purple", marginTop: 7 }}>!ارور ناشناخته</span>
                break;
        }
    }

    return (
        <>
            {props.show &&
                <div className="dimmer2">
                    <div id="modal-2" className="modal-container2">

                        {/* header */}
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between" }}>
                            <Close
                                onClick={() => {
                                    props.close();
                                    setStat(false);
                                    setStatMsg([0, ""]);
                                    setIsBtnClicked(false);
                                }}
                                style={{ color: "rgba(85, 85, 85)", cursor: "pointer" }}
                            />
                            <h3 style={{ cursor: "default" }}>ادیت تسک</h3>
                        </div>

                        {/* form */}
                        <form style={{ display: 'flex', flexDirection: 'column', margin: "10px 0 auto 0" }}>
                            <input
                                style={{
                                    direction: "rtl",
                                    padding: "10px 10px 10px 10px",
                                    margin: "5px 0 5px 0",
                                    border: "0px",
                                    borderRadius: "10px",
                                    outline: "none",
                                    fontSize: 16
                                }}
                                value={task}
                                onChange={onEditTaskChange}
                            ></input>
                            <select style={{ direction: "rtl", outline: "none", borderRadius: 5, marginTop: 5, padding: "1px", fontSize: 16 }}>
                                {tags.map((tag, index) => (
                                    <option key={index} value={tag.name} selected={(tag.name === props.tag.name)}>{tag.name}</option>
                                ))}
                            </select>
                            <button
                                onClick={editTask}
                                style={{
                                    width: "auto",
                                    backgroundColor: isBtnClicked ? "#006aff7c" : "#006aff",
                                    color: "white",
                                    fontWeight: 400,
                                    fontSize: 16,
                                    padding: "5px 7px 5px 7px",
                                    margin: "12px 0 5px 0",
                                    border: "0px",
                                    borderRadius: "8px",
                                    outline: "none",
                                    cursor: isBtnClicked ? "not-allowed" : "pointer"
                                }}
                                disabled={isBtnClicked}
                            >
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: "center" }}>
                                    {isBtnClicked ? <DoneAllRoundedIcon style={{ color: "white" }} /> : <DoneRoundedIcon style={{ color: "white" }} />}
                                    <span style={{ marginTop: 3, marginLeft: 5 }}>حلـــه</span>
                                </div>
                            </button>
                        </form>

                        {/* status */}
                        <ShowStatus />

                    </div>
                </div >
            }
        </>
    )
}
