// eslint-disable-next-line
import React from 'react';
import './YoutubeComp.css';
const YoutubeComp = (props) => {
    return (
        <div className="youtube-wrapper">

            <div className="img-thumb">
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.o-oiE5nwERcjmSXrnuRAdgHaE7%26pid%3DApi&f=1" alt=""/>
                <p className="time">{props.time}</p>
            </div>
        <p className="title">{props.title}</p>
        <p className="desc">{props.desc}</p>
        </div>
    )      
}

YoutubeComp.defaultProps = {
    time: '00.00',
    title: 'Title Here',
    desc: 'xx ditonton. x hari yang lalu'
}
export default YoutubeComp;