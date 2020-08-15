import React from 'react';
import * as propTypes from 'prop-types';
import * as Utilities from './Utilities';
import './../App.css';

TextBlock.propTypes = {
    index: propTypes.number,
    title: propTypes.string,
    caption: propTypes.string,
    time: propTypes.instanceOf(Date)
};

function TextBlock(props) {
    const dayOf = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthOf = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    const formatDate = (time) => {
        const day = dayOf[time.getDay()];
        const date = time.getDate();
        const month = monthOf[time.getMonth()];
        const year = time.getFullYear();
        const hour = time.getHours();
        let minute = time.getMinutes();
        return `${day}, ${date} ${month} ${year}, ${hour}:${minute < 10 ? '0' :''}${minute} Local Time`
    };
    return (
        <div className={'textBlock'}>
            <div className={`textBlock-title ${Utilities.isEven(props.index) ? "even" : "odd"}`}>
                {props.title}
            </div>
            <div className={`textBlock-body ${Utilities.isEven(props.index) ? "even" : "odd"}`}>
                {props.caption}
            </div>
            <div className={`textBlock-body ${Utilities.isEven(props.index) ? "even" : "odd"}`}>
                {formatDate(props.time)}
            </div>

        </div>
    );
}

export default TextBlock;