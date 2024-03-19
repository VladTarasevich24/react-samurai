import React from 'react';
import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/store";


const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path} className={s.link} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}






const Dialogs = (props) => {
    let state = props.dialogsPage;
    let dialogsElement = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />)
    let messagesElement = state.messages.map(m => <Message message={m.message} key={m.id} />)
    let newMessageBody = state.messages.newMessageBody;
    let onSendMessageClick = () => {
        props.sendMessage();
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);

    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}

            </div>
            <div className={s.messages}>
                <div>{messagesElement}</div>
                <div>
                    <div><textarea placeholder="Enter your message"
                                   value = {newMessageBody}
                                   onChange = {onNewMessageChange}
                    ></textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>

            </div>
        </div>
    )
}

export default Dialogs;