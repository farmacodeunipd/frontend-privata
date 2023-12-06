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
                            className="text-black dark:text-white pr-1"
                        >
                            Choose a car:
                        </label>
                        <select name="cars" id="cars" className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                            <option value="0" selected disabled>
                                Selezionare...
                            </option>
                            {cars.map((cars) => (
                                <option value={cars.valore} className="text-gray-700 hover:bg-gray-100 hover:text-gray-900">{cars.nome}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label
                            for="dogs"
                            className="text-black dark:text-white pr-1"
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
                        <label for="top" className="text-black dark:text-white pr-1">
                            Choose a top:
                        </label>
                        <select name="top" id="cars" className="mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <option value="0" selected disabled>
                                Selezionare...
                            </option>
                            {tops.map((tops) => (
                                <option value={tops.valore} className="text-gray-700 hover:bg-gray-100 hover:text-gray-900">{tops.nome}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <button type="button" className="bg-green-500 hover:bg-green-800 text-white font-bold py-2 px-4 rounded">Ricerca</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Filtro;
