import React from "react";
import s from './../Dialogs.module.css'
import {MessagesType} from "../../../Redux/State";

const Message = (props:MessagesType) => {
    return (
        <div>
            <div className={s.message}>{props.message}
            </div>

        </div>
    )
}








export default Message