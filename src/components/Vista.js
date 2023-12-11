import React from "react";
import Filtro from "./Filtro";
import NessunRisultato from "./NessunRisultato";
import Risultati from "./Risultati";

function Vista() {
    return (
        <>
            <div className="p-4 space-y-4 bg-gray-200 dark:bg-gray-900 rounded-3xl shadow-lg flex flex-col h-full overflow-hidden">
                <Filtro></Filtro>

                {/* <NessunRisultato></NessunRisultato> */}
                <Risultati></Risultati>
            </div>
        </>
    );
}

export default Vista;
