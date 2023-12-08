import React from "react";
import Filtro from "./Filtro";
import NessunRisultato from "./NessunRisultato";

function Vista() {
    return (
        <>
            <div className="p-4 space-y-4 bg-gray-200 dark:bg-gray-900 rounded-3xl shadow-lg flex flex-col h-full">
                <Filtro></Filtro>
                {/* vista */}
                <div className="flex items-center justify-center h-full">
                    <NessunRisultato></NessunRisultato>
                </div>
            </div>
        </>
    );
}

export default Vista;
