import React, { useState, useCallback } from 'react'
import { Close } from '@material-ui/icons'
import './modal.css'
import { tags } from "../../../data/dataArray"
import DoneRoundedIcon from '@material-ui/icons/DoneRounded';
import DoneAllRoundedIcon from '@material-ui/icons/DoneAllRounded';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';

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
                return <center style={{ color: "blue", marginTop: 7 }}>{statMsg[1]}</center>
                break;
            case 2:
                return <center style={{ color: "red", marginTop: 7 }}>{statMsg[1]}</center>
                break;
            default:
                return <center style={{ color: "purple", marginTop: 7 }}>!ارور ناشناخته</center>
                break;
        }
    }

    return (
        <>
            {props.show &&
                <div className="dimmer2">
                    <div id="modal-2" className="modal-container2">

                        {/* header */}
                        <div className="edit-modal-header">
                            <div className="edit-modal-close">
                                <Close
                                    onClick={() => {
                                        props.close();
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
                                        props.close();
                                        setStat(false);
                                        setStatMsg([0, ""]);
                                        setIsBtnClicked(false);
                                    }}
                                    style={{ cursor: "pointer", fontSize: 35 }}
                                />
                            </div>
                            <h3 style={{ cursor: "default" }}>ویرایش تسک</h3>
                        </div>

                        <div className="edit-modal-center">

                            {/* form */}
                            <form className="edit-modal-form">
                                <input className="edit-modal-form-input" value={task} onChange={onEditTaskChange}></input>
                                <select className="edit-modal-form-select">
                                    {tags.map((tag, index) => (
                                        <option key={index} value={tag.name} selected={(tag.name === props.tag.name)}>{tag.name}</option>
                                    ))}
                                </select>
                                <button
                                    onClick={editTask}
                                    style={{
                                        backgroundColor: isBtnClicked ? "#006aff7c" : "#006aff",

                                        cursor: isBtnClicked ? "not-allowed" : "pointer"
                                    }}
                                    disabled={isBtnClicked}
                                >
                                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: "center" }}>
                                        {isBtnClicked ? <DoneAllRoundedIcon style={{ color: "white" }} /> : <DoneRoundedIcon style={{ color: "white" }} />}
                                        <span style={{ marginTop: 2, marginLeft: 5, fontSize: 18 }}>حلـــه</span>
                                    </div>
                                </button>
                            </form>

                            {/* status */}
                            <ShowStatus />

                        </div>
                    </div>
                </div >
            }
        </>
    )
}
