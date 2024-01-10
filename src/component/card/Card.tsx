import React from 'react';
import './card.css'

interface CardProps {
    imgsrc: string,
    label: string,
    tag: string


}

function Card (props: CardProps){


   
    return (
                <div id="card" >
                    <div id="photo">
                        <img src={props.imgsrc} alt="" />
                    </div>
                    <div id="desc">
                        <h3>{props.label}</h3>
                        <div id="qu"><h5>{props.tag}</h5></div>
                    </div>
                </div>
    );
}

export default Card;