import React from "react";
export default function index() {
    return (
        <span className="loading">
            {Array(4)
                .fill(0)
                .map((item, index) => (
                    <span key={index} />
                ))}
        </span>
    );
}
