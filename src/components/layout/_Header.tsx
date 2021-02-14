import * as React from "react";

export interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}): React.ReactElement => {
    return (
        <div className="w-full flex items-center justify-between h-16 bg-blue-600">
            <div className="pl-20">
                <span className="text-4xl text-white">
                    <strong>DEMO</strong> Streaming
                </span>
            </div>
            <div className="flex w-1/3 pr-20">
                <button className="pr-2 w-full text-white">Log in</button>
                <button className="h-12 w-full bg-black text-white">Start your free trial</button>
            </div>
        </div>
    );
};

export default Header;
