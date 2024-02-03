import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    return (
        <div className="error-container">
            <h1 className="error-status">{error?.status}</h1>
            <p className="error-text">{error?.statusText}</p>
            <p className="error-message">{error?.error?.message}</p>
        </div>
    );
};
export default Error;
