import React from "react";

const NavElement = ({ label }) => {
    return (
        <div className="NavElement">
            <p className="NavElementLabel">{label}</p>
        </div>
    );
}

export default NavElement;