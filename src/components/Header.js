import React from "react";
import MenuPopover from "./MenuPopover";
import logo from "../assets/images/logo.png";

function Header() {
    return (
        <>
            <header className="bg-gray-200 dark:bg-gray-900 rounded-3xl flex justify-between sticky top-4 left-4">
                <div>
                    <MenuPopover></MenuPopover>
                </div>
                <div>
                    <img src={logo} alt="logo"></img>
                </div>
                <div></div>
            </header>
        </>
    );
}

export default Header;
