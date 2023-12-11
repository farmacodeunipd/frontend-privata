import React from "react";

const people = [
    {
        id: 1,
        name: "Water",
        more: "",
    },
    {
        id: 2,
        name: "Milk",
        more: "",
    },
    {
        id: 3,
        name: "Beer",
        more: "",
    },
    {
        id: 4,
        name: "Coca Cola",
        more: "",
    },
    {
        id: 5,
        name: "Sprite",
        more: "",
    },
    {
        id: 6,
        name: "Prosecco",
        more: "",
    },
    {
        id: 7,
        name: "Champagne",
        more: "",
    },
    {
        id: 8,
        name: "Fanta",
        more: "",
    },
    {
        id: 9,
        name: "Aperol",
        more: "",
    },
    {
        id: 10,
        name: "Lemon",
        more: "",
    },
];

function Risultati() {
    return (
        <>
            <div className="overflow-y-auto custom-scrollbar shadow-lg ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 rounded-3xl">
                <table className="min-w-full divide-y divide-gray-300 dark:divide-gray-950">
                    <thead className="bg-gray-50 dark:bg-gray-700">
                        <tr>
                            <th
                                scope="col"
                                className="py-3.5 pl-4 pr-3 text-left text-base font-semibold text-gray-900 dark:text-white sm:pl-6"
                            >
                                Id
                            </th>
                            <th
                                scope="col"
                                className="px-3 py-3.5 text-left text-base font-semibold text-gray-900 dark:text-white"
                            >
                                Name
                            </th>
                            <th
                                scope="col"
                                className="hidden px-3 py-3.5 text-left text-base font-semibold text-gray-900 dark:text-white lg:table-cell"
                            >
                                More
                            </th>
                            <th
                                scope="col"
                                className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                            >
                                <span className="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-900 bg-white dark:bg-gray-600">
                        {people.map((person) => (
                            <tr key={person.id}>
                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 dark:text-white sm:pl-6">
                                    {person.id}
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500  dark:text-gray-200">
                                    {person.name}
                                </td>
                                <td className="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500  dark:text-gray-200 lg:table-cell">
                                    {person.more}
                                </td>
                                <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                    <a
                                        href="#"
                                        className="text-indigo-600 dark:text-indigo-200 hover:text-indigo-900 dark:hover:text-indigo-500"
                                    >
                                        Edit
                                        <span className="sr-only">
                                            , {person.id}
                                        </span>
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Risultati;
