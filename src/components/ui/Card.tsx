import * as React from "react";

export interface CardProps {
    image: ImageData;
    title: string;
}

const Card: React.FC<CardProps> = ({ image, title }): React.ReactElement => {
    return (
        <div>
            <div>
                <img src={image} />
            </div>
            <div>
                <h3>{title}</h3>
            </div>
        </div>
    );
};

export default Card;
