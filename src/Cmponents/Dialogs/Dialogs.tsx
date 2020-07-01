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


    let newMessageElement = React.createRef<HTMLTextAreaElement>()
    let addMessage = () => {
     let text =  newMessageElement.current?.value;
     alert(text)
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}

            </div>
            <div className={s.messages}>

                {messagesElements}

            </div>
            <div>
                <textarea ref={newMessageElement}>Привет</textarea>
                <button onClick={addMessage}>Add</button>
            </div>
        </div>
    )
}


export default Dialogs