import React from 'react';
import "./ContactBlock.css";
export default function ContactBlock ({imgUrl,nickname}){
    return (
        <div className="ContactBlock">
            <img src={imgUrl} alt={""}/>
            <p>{nickname}</p>
        </div>
    );
};

