import React from "react";

// poi sostituire con dati dal backend
const cars = [
    { nome: "Clienti", valore: "1" },
    { nome: "Prodotti", valore: "2" },
];

const tops = [
    { nome: "Top 5", valore: "1" },
    { nome: "Top 10", valore: "2" },
];

function Filtro() {
    return (
        <>
            <div className="p-4 bg-gray-200 dark:bg-gray-900 rounded-3xl">
                <form className="flex justify-around">
                    <div>
                        <label
                            for="cars"
                            className="text-black dark:text-white"
                        >
                            Choose a car:
                        </label>
                        <select name="cars" id="cars">
                            <option value="0" selected disabled>
                                Selezionare...
                            </option>
                            {cars.map((cars) => (
                                <option value={cars.valore}>{cars.nome}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label
                            for="dogs"
                            className="text-black dark:text-white"
                        >
                            Choose a car:
                        </label>
                        <input type="text" list="dogs" />
                        <datalist id="dogs">
                            <option>Volvo</option>
                            <option>Saab</option>
                            <option>Mercedes</option>
                            <option>Audi</option>
                        </datalist>
                    </div>
                    <div>
                        <label for="top" className="text-black dark:text-white">
                            Choose a top:
                        </label>
                        <select name="top" id="cars">
                            <option value="0" selected disabled>
                                Selezionare...
                            </option>
                            {tops.map((tops) => (
                                <option value={tops.valore}>{tops.nome}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <button type="button">Ricerca</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Filtro;
