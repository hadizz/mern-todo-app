import React, { useState, useCallback, setTimeout } from 'react'
import { Close } from '@material-ui/icons'
import './modal.css'
import { tags } from "../data/dataArray"

// import CircularProgress from '@material-ui/core/CircularProgress';

export default function Modal(props) {

    const [height, setHeight] = useState(240);

    const [task, setTask] = useState(props.preTask);
    const [stat, setStat] = useState(false);
    const [statMsg, setStatMsg] = useState([0, ""]);
    const [isBtnClicked, setIsBtnClicked] = useState(false);
    const [onmover, setOnmover] = useState(false);

    const [selectedTag, setSelectedTag] = useState(props.tag.name);

    const onEditTaskChange = useCallback((event) => {
        setTask(event.target.value);
    }, []);

    const editTask = (event) => {
        console.log("clicked");
        setIsBtnClicked(true);
        setStat(true);
        setStatMsg([0, "با موفقیت ادیت شد"]);
        setHeight(260);
        // const m = document.getElementById("modal-2").offsetHeight;
        // event.target.style.height = `${m + 10}px`;
    }

    const ShowStatus = () => {
        if (!stat) {
            return null;
        }
        switch (statMsg[0]) {
            case 0:
                return <center style={{ fontWeight: "bolder", color: "green", marginTop: 7 }}>{statMsg[1]}</center>
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

    const ShowTags = () => {
        return (
            <div onMouseOver={() => setOnmover(true)} onMouseOut={() => setOnmover(false)} style={{ display: "flex", flexDirection: "row", overflow: "auto", marginTop: 7 }}>
                {tags.map((tag, index) => (
                    <div
                        style={{
                            backgroundColor: (tag.name === selectedTag) ? tag.color : "white",
                            color: (tag.name === selectedTag) ? "white" : "black",
                            borderRadius: 100,
                            padding: "7px 15px 7px 15px",
                            marginRight: "5px",
                            marginLeft: "5px",
                            fontSize: 10,
                            cursor: onmover ? "pointer" : "default"
                        }}
                        key={index}
                        onClick={() => setSelectedTag(tag.name)}
                    >
                        <div style={{ backgroundColor: tag.color }}></div>
                        <span>{tag.name}</span>
                    </div>
                ))}
            </div>
        );
    }

    return (
        <>
            {props.show &&
                <div className="dimmer2">
                    <div id="modal-2" className="modal-container2" style={{ height: height }}>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between" }}>
                            <h3>{props.header}</h3>
                            <Close
                                onClick={() => {
                                    props.close();
                                    setHeight(240);
                                    setStat(false);
                                    setStatMsg([0, ""]);
                                    setIsBtnClicked(false);
                                }}
                                style={{ color: "rgba(85, 85, 85)", cursor: "pointer" }}
                            />
                        </div>
                        {/* <div>{props.children}</div> */}
                        <div style={{ display: 'flex', flexDirection: 'column', margin: "20px 0 auto 0" }}>
                            <input
                                style={{
                                    direction: "rtl",
                                    padding: "10px 10px 10px 10px",
                                    margin: "5px 0 5px 0",
                                    border: "0px",
                                    borderRadius: "10px",
                                    outline: "none"
                                }}
                                value={task}
                                onChange={onEditTaskChange}
                            ></input>
                            <ShowTags />
                            <button
                                onClick={editTask}
                                style={{
                                    backgroundColor: isBtnClicked ? "lightblue" : "blue",
                                    color: "white",
                                    fontWeight: "bolder",
                                    padding: "5px 10px 5px 10px",
                                    margin: "5px 0 5px 0",
                                    border: "0px",
                                    borderRadius: "10px",
                                    outline: "none",
                                    cursor: "pointer"
                                }}
                                disabled={isBtnClicked}
                            >حله</button>
                            <ShowStatus />
                            {/* <center>
                                <CircularProgress />
                            </center> */}
                        </div>
                    </div>
                </div >
            }
        </>
    )
}
