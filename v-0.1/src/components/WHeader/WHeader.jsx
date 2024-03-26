import React from "react";
import "./wheader.css"

function WHeader(props) {
    return (
    <div className="w-header">
        <div className="w-header-el">
            {props.timeZone}
        </div>
        <div className="w-header-el">
            {props.curTime}
        </div>
    </div>
    );
}

export default WHeader;
