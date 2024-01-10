import React from 'react';
import './card.css';
interface CardProps {
    imgsrc: string;
    label: string;
    tag: string;
}
declare function Card(props: CardProps): React.JSX.Element;
export default Card;
