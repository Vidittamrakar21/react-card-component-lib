import React from 'react';

interface CardProps {
    imgsrc: string;
    label: string;
    tag: string;
}
declare function Card(props: CardProps): React.JSX.Element;

export { Card };
