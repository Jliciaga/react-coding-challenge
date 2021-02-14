import * as React from "react";

export interface PageProps {
    label: string;
    children: React.ReactElement;
}

const Page: React.FC<PageProps> = ({ label, children }): React.ReactElement => {
    return (
        <div>
            <div>
                <span>
                    <h2>Popular {label}</h2>
                </span>
            </div>
            <div>{children}</div>
        </div>
    );
};

export default Page;
