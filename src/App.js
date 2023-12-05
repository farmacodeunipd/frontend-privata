import React from "react";
import Header from "./components/Header";
import CookiesModal from "./components/CookiesModal";

function App() {
    return (
        <>
            <div className="p-4 background">
                <Header></Header>
                {/* vista */}
                <CookiesModal></CookiesModal>
            </div>
        </>
    );
}

export default App;
