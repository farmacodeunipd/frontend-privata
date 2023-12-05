import React from "react";
import logo from "../assets/images/logo.png";

function Header() {
    return (
        <>
            <header className="bg-gray-200 dark:bg-gray-900 rounded-3xl flex justify-center sticky top-4 left-4">
                <div>
                    <img src={logo} alt="logo"></img>
                </div>
            </header>
        </>
    );
}

export default Header;
