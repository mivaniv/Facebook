import React from 'react'
import './Contacts.css'
import PersonIcon from "@mui/icons-material/Person";

export default function Contacts() {
    // const NAME = "https://api.github.com/users/mojombo"
    // {
    //     fetch(NAME)
    //         .then(res => res.json())
    //         .then(e => {
    //             console.log(e.name)
    //         })
    // }
    return (
        <div className="Contacts">
            <PersonIcon width={50} height={50}/>
            <p>Name Surname</p>
            <div className="online"></div>
        </div>
    )
}
