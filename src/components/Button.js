import React from "react";
import "../styles/Button.css";

const Button = ({ label, children, active, fill }) => (
    <div
        className={`Button ${
            active
                ? fill
                    ? `active fill`
                    : `active no-fill`
                : `disabled`
            }`}
    >
        {children || label}
    </div>
);

export default Button;