import React, { useState } from 'react'
import './LeftColumn.css'



export default function LeftColumn() {

    const firstList = [
        { "url": "https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png", "text": "Name", "id": "1" },
        { "url": "https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png", "text": "Friends", "id": "2" },
        { "url": "https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png", "text": "Groups", "id": "3" },
        { "url": "https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/duk32h44Y31.png", "text": "Watch", "id": "4" },
        { "url": "https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/he-BkogidIc.png", "text": "Memories", "id": "5" },
        { "url": "https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/lVijPkTeN-r.png", "text": "Saved", "id": "6" },
        { "url": "https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/kyCAf2jbZvF.png", "text": "Pages", "id": "7" },
        { "url": "https://static.xx.fbcdn.net/rsrc.php/v3/yu/r/eXC82ZeepQ7.png", "text": "Events", "id": "8" }]

    const secondList = [
        { "url": "https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/CwKNCefmHON.png", "text": "Ad Centre", "id": "1" },
        { "url": "https://static.xx.fbcdn.net/rsrc.php/v3/y9/r/DHBHg9MEeSC.png", "text": "Ads Manager", "id": "2" },
        { "url": "https://static.xx.fbcdn.net/rsrc.php/v3/y3/r/Jr0q8qKF2-Y.png", "text": "Climate Science Centre", "id": "3" },
        { "url": "https://static.xx.fbcdn.net/rsrc.php/v3/yJ/r/LNmKcpeCunI.png", "text": "Community Help for Ukraine", "id:": "4" },
        { "url": "https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/5rR6LRpNc5u.png", "text": "COVID-19 Information Centre", "id": "5" },
        { "url": "https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/vxMUnHhu6Do.png", "text": "Emotional Health", "id": "6" },
        { "url": "https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/GJ4EaivDaSj.png", "text": "Facebook Pay", "id": "7" },
        { "url": "https://static.xx.fbcdn.net/rsrc.php/v3/yK/r/mAnT0r8GSOm.png", "text": "Favourites", "id": "8" },
        { "url": "https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/n2vd2VduYc1.png", "text": "Fundraisers", "id": "9" },
        { "url": "https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/n2vd2VduYc1.png", "text": "Gaming Video", "id": "10" },
        { "url": "https://static.xx.fbcdn.net/rsrc.php/v3/yu/r/AisrwUSvQf8.png", "text": "Live videos", "id": "11" },
        { "url": "https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/4Y9Xi2D3hJv.png", "text": "Messenger", "id": "12" },
        { "url": "https://static.xx.fbcdn.net/rsrc.php/v3/yc/r/hTN47HVa4oS.png", "text": "Most recent", "id": "13" },
        { "url": "https://static.xx.fbcdn.net/rsrc.php/v3/yt/r/PObY9OA5lvJ.png", "text": "Play games", "id": "14" },
        { "url": "https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/8OasGoQgQgF.png", "text": "Recent and activity", "id": "15" }]

    const [hidden, setHidden] = useState(false)


    const closedList = () => {
        hidden ? setHidden(false) : setHidden(true)
    }

    return (
        <div className='left_column_container'>
            <ul className='left_column_top_list'>
                {firstList.map((el) => (
                    <li key={el.id} className='list_element'><img src={el.url}></img><span className='list_title'>{el.text}</span></li>
                ))}

            </ul>
            <ul className={hidden ? "left_column_bot_list " : "left_column_bot_list hidden"}>
                {secondList.map((sec) => (
                    <li key={sec.id} className='list_element'><img src={sec.url}></img><span className='list_title'>{sec.text}</span></li>
                ))}
            </ul>
            <button className='see_more_button' onClick={() => closedList()}><p className='button_more_arrow'>{hidden ? "^" : ">"}</p><span>{hidden ? "See less" : "See more"}</span></button>

            <div className='left_column_shorcuts'>
                <h3>Your shortcuts</h3>
            </div>
            <footer>
                <ul className='left_column_footer_menu'>
                    <li><a className='left_column_footer_li' href=''>Privacy</a></li>
                    <li><a className='left_column_footer_li' href=''>Terms</a></li>
                    <li><a className='left_column_footer_li' href=''>Advertising</a></li>
                    <li><a className='left_column_footer_li' href=''>Ad choices</a></li>
                    <li><a className='left_column_footer_li' href=''>Cookies</a></li>
                    <li><a className='left_column_footer_li' href=''>More</a></li>
                    <li><a className='left_column_footer_li' href=''>Meta 2022</a></li>
                </ul>
            </footer>
        </div>
    )
}
