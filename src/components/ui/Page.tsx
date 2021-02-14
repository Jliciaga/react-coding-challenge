import * as React from "react";

export interface PageProps {
    children: React.ReactElement;
}

const Page: React.FC<PageProps> = ({ children }): React.ReactElement => {
    return (
        <div>
            <div>{children}</div>
        </div>
    );
};

export default Page;
