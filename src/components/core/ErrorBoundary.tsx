import * as React from "react";

export interface ErrorBoundaryState {
    hasError:       boolean;
    error:          null | Record<string, any> | Error;
    message:        null | string;
}

export interface ErrorBoundaryProps {
    children:       React.ReactElement;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props) {
        super(props);

        this.state = {
            hasError: false,
            error: null,
            message: null,
        };
    };

    static getDerivedStateFromError(error) {
        return {
            hasError: true,
            error,
            message: error.message
        };
    };

    render() {
        return this.state.hasError ? (<h1>Oops something went wrong...</h1>) : this.props.children;
    }
}

export default ErrorBoundary;
