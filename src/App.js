import React from "react";
import Header from "./components/Header";
import Vista from "./components/Vista";

function App() {
    return (
        <>
            <div className="p-4 background space-y-4">
                <Header></Header>
                <Vista></Vista>
            </div>
        </>
    );
}

export default App;
