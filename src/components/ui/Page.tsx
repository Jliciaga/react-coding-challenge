import * as React from "react";

import { ErrorBoundary } from "../core";

export interface PageProps {
    label: string;
    children: React.ReactElement;
}

const Page: React.FC<PageProps> = ({ label, children }): React.ReactElement => {
    return (
        <div className="min-h-screen">
            <div className="flex justify-items-start items-center h-14 bg-black">
                <span className="pl-20">
                    <h2 className="text-white text-2xl">Popular {label}</h2>
                </span>
            </div>
            <div className="flex px-10 pt-10 pb-40">
                <ErrorBoundary>{children}</ErrorBoundary>
            </div>
        </div>
    );
};

export default Page;
