import * as React from "react";

export interface CardProps {
    image: any;
    title: string;
    placeholder?: string;
}

const Card: React.FC<CardProps> = ({ image, title, placeholder }): React.ReactElement => {
    return (
        <div className="max-w-xs p-8">
            <div className="h-50 bg-black">
                <div className="flex h-96 min-w-min justify-center align-center">
                    <img className="self-center bg-cover bg-no-repeat bg-center" src={image} />
                    {placeholder ? (
                        <div className="text-white absolute self-center">
                            <h3 className="text-4xl">{placeholder}</h3>
                        </div>
                    ) : null}
                </div>
            </div>
            <div>
                <span className="text-2xl text-black">{title}</span>
            </div>
        </div>
    );
};

export default Card;
