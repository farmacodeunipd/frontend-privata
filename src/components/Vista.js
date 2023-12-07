import React from "react";
import Filtro from "./Filtro";

function Vista() {
    return (
        <>
            <div className="p-4 space-y-4 bg-gray-200 dark:bg-gray-900 rounded-3xl h-full">
                <Filtro></Filtro>
                {/* vista */}
            </div>
        </>
    );
}

export default Vista;
