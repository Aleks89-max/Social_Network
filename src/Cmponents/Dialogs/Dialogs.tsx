import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { DialogsPageType } from "../../Redux/State";
type dType = {
    data: DialogsPageType
}


const Dialogs = (props:dType) => {


    let dialogsElements = props.data.dialogs
        .map((d) => <DialogItem name={d.name} id={d.id}/>)


    let messagesElements = props.data.messages
        .map((m) => <Message message={m.message} id={m.id}/>)


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}

            </div>
            <div className={s.messages}>

                {messagesElements}

            </div>
        </div>
    )
}


export default Dialogs