import React from 'react';
import * as propTypes from 'prop-types';
import TextBlock from "./TextBlock";
import * as Utilities from './Utilities';
import './../App.css';

Block.propTypes = {
    index: propTypes.number,
    image: propTypes.string,
    title: propTypes.string,
    caption: propTypes.string,
    time: propTypes.instanceOf(Date)
};

function Block(props) {
    return (
        <div className={`block ${Utilities.isEven(props.index) ? "even" : "odd"}`}>
            <img
                className={'block-image'}
                src={props.image}
                alt={props.title}/>
            <TextBlock
                index={props.index}
                title={props.title}
                caption={props.caption}
                time={props.time}/>
        </div>
    );
}

export default Block;