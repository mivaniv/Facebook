import React from 'react';
import "./ModalWindowChat.css";
const ModalWindowChat = ({active, setActive}) => {
    return (
        <div className="modalContainerChat">
            <div className="modalContainerChatContent">
                <div className="modalContainerChatContentTitle">
                </div>
                <div className="modalContainerChatContentChat"></div>
                <div className="modalContainerChatContentMessage"></div>
            </div>
        </div>
    );
};

export default ModalWindowChat;