import React from "react";

function Risultati({ data }) {
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
                                Nome
                            </th>
                            <th
                                scope="col"
                                className="hidden px-3 py-3.5 text-left text-base font-semibold text-gray-900 dark:text-white lg:table-cell"
                            >
                                Valore
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-900 bg-white dark:bg-gray-600">
                        {data.map((data) => (
                            <tr key={data.id}>
                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 dark:text-white sm:pl-6">
                                    {data.id}
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500  dark:text-gray-200">
                                    {/* {nome} */}
                                </td>
                                <td className="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500  dark:text-gray-200 lg:table-cell">
                                    {data.value}
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
