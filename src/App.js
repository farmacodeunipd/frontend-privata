import React from "react";
import Header from "./components/Header";
import Vista from "./components/Vista";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <div className="p-4 bg-white dark:bg-gray-950 h-screen space-y-4 flex flex-col">
                <Header></Header>
                <Vista></Vista>
                <Footer></Footer>
            </div>
        </>
    );
}

export default App;
