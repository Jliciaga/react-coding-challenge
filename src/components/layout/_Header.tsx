import * as React from "react";

export interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}): React.ReactElement => {
    return (
        <div className="flex items-center justify-between">
            <div>
                <h1>Demo Streaming</h1>
            </div>
            <div>
                <button>Login</button>
                <button>Start your free trial</button>
            </div>
        </div>
    );
};

export default Header;
