import React from 'react'
import './RightColumn.css'
import Contacts from "./Contacts/Contacts";
import VideoCallIcon from '@mui/icons-material/VideoCall';
import SearchIcon from '@mui/icons-material/Search';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export default function RightColumn() {

    return (
        <div className="rightColumnContainer">
            <div className="rightColumnContainerTop">
                <a className="rightColumnContainerTopText">Контакти</a>
                <div  className="rightColumnContainerTopImg">
                    <a href="#"><VideoCallIcon/></a>
                    <a href="#"><SearchIcon/></a>
                    <a href="#"><MoreHorizIcon/></a>
                </div>

            </div>
            <div className="rightColumnContainerContacts">
                <Contacts/>
            </div>
            <hr/>
            <div className="rightColumnContainerGroup">
                <p>Групові розмови</p>
            </div>


        </div>
    )
}
