import { React, useState } from "react";
import { Listbox, Combobox } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

const searchTopics = [
    { id: 1, name: "Seleziona topic...", unavailable: true },
    { id: 2, name: "Clienti", unavailable: false },
    { id: 3, name: "Prodotti", unavailable: false },
];

// poi sostituire con dati dal backend
const clients = [
    { id: 1, name: "Wade Cooper" },
    { id: 2, name: "Arlene Mccoy" },
    { id: 3, name: "Devon Webb" },
    { id: 4, name: "Tom Cook" },
    { id: 5, name: "Tanya Fox" },
    { id: 6, name: "Hellen Schmidt" },
];

// poi sostituire con dati dal backend
const products = [
    { id: 1, name: "Water" },
    { id: 2, name: "Milk" },
    { id: 3, name: "Beer" },
    { id: 4, name: "Coca Cola" },
    { id: 5, name: "Sprite" },
    { id: 6, name: "Prosecco" },
];

const tops = [
    { id: 1, name: "Seleziona N...", unavailable: true },
    { id: 2, name: "Top 5", unavailable: false },
    { id: 3, name: "Top 10", unavailable: false },
];

function Filtro() {
    const [selectedSearchTopic, setSelectedSearchTopic] = useState(
        searchTopics[0]
    );
    const [selectedClient, setSelectedClient] = useState(clients[0]);
    const [selectedProduct, setSelectedProduct] = useState(products[0]);
    const [query, setQuery] = useState("");
    const [selectedTop, setSelectedTop] = useState(tops[0]);

    const filteredClients =
        query === ""
            ? clients
            : clients.filter((client) =>
                  client.name
                      .toLowerCase()
                      .replace(/\s+/g, "")
                      .includes(query.toLowerCase().replace(/\s+/g, ""))
              );

    const filteredProducts =
        query === ""
            ? products
            : products.filter((product) =>
                  product.name
                      .toLowerCase()
                      .replace(/\s+/g, "")
                      .includes(query.toLowerCase().replace(/\s+/g, ""))
              );

    return (
        <>
            <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-3xl">
                <form
                    className="flex flex-col justify-center md:flex-row md:justify-around md:items-center space-y-2 md:space-y-0"
                    action=""
                    method="post"
                >
                    <div className="w-48 mx-auto">
                        <Listbox
                            value={selectedSearchTopic}
                            onChange={setSelectedSearchTopic}
                            name="searchTopic"
                        >
                            <div className="relative">
                                <Listbox.Button className="relative w-full cursor-pointer rounded-lg bg-gray-100 dark:bg-gray-900 dark:text-white py-2 pl-3 pr-10 text-left shadow-lg ring-1 ring-black/5 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-700 sm:text-sm">
                                    <span className="block truncate">
                                        {selectedSearchTopic.name}
                                    </span>
                                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                        <ChevronUpDownIcon
                                            className="h-5 w-5 text-gray-400 dark-text-gray-300"
                                            aria-hidden="true"
                                        />
                                    </span>
                                </Listbox.Button>
                                <Listbox.Options className="z-30 absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-gray-100 dark:bg-gray-900 py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                    {searchTopics.map((searchTopic) => (
                                        <Listbox.Option
                                            key={searchTopic.id}
                                            className={({ active }) =>
                                                `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                                                    active
                                                        ? "bg-green-100 dark:bg-green-900 text-green-900 dark:text-green-100"
                                                        : "text-gray-900 dark:text-white"
                                                } ${
                                                    searchTopic.unavailable
                                                        ? "opacity-50"
                                                        : ""
                                                }`
                                            }
                                            value={searchTopic}
                                            disabled={searchTopic.unavailable}
                                        >
                                            {({ selected }) => (
                                                <>
                                                    <span
                                                        className={`block truncate ${
                                                            selected
                                                                ? "font-medium"
                                                                : "font-normal"
                                                        }`}
                                                    >
                                                        {searchTopic.name}
                                                    </span>
                                                    {selected ? (
                                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-green-600 dark:text-green-300">
                                                            <CheckIcon
                                                                className="h-5 w-5"
                                                                aria-hidden="true"
                                                            />
                                                        </span>
                                                    ) : null}
                                                </>
                                            )}
                                        </Listbox.Option>
                                    ))}
                                </Listbox.Options>
                            </div>
                        </Listbox>
                    </div>
                    {selectedSearchTopic.id === 1 ? null : (
                        <div className="w-48 mx-auto">
                            {selectedSearchTopic.id === 2 ? (
                                <Combobox
                                    value={selectedClient}
                                    onChange={setSelectedClient}
                                    name="client"
                                    disabled={
                                        selectedSearchTopic.id === 1
                                            ? true
                                            : false
                                    }
                                    className={
                                        selectedSearchTopic.id === 1
                                            ? "opacity-50"
                                            : ""
                                    }
                                >
                                    <div className="relative">
                                        <div className="relative w-full cursor-pointer overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-900 dark:text-white text-left shadow-lg ring-1 ring-black/5 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-700 sm:text-sm">
                                            <Combobox.Input
                                                className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-0 focus:outline-none"
                                                displayValue={(client) =>
                                                    client.name
                                                }
                                                onChange={(event) =>
                                                    setQuery(event.target.value)
                                                }
                                            />
                                            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                                                <ChevronUpDownIcon
                                                    className="h-5 w-5 text-gray-400"
                                                    aria-hidden="true"
                                                />
                                            </Combobox.Button>
                                        </div>
                                        <Combobox.Options className="z-30 absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-gray-100 dark:bg-gray-900 py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                            {filteredClients.length === 0 &&
                                            query !== "" ? (
                                                <div className="relative cursor-pointer select-none px-4 py-2 text-gray-700">
                                                    Nessuna corrispondenza.
                                                </div>
                                            ) : (
                                                filteredClients.map(
                                                    (client) => (
                                                        <Combobox.Option
                                                            key={client.id}
                                                            className={({
                                                                active,
                                                            }) =>
                                                                `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                                                                    active
                                                                        ? "bg-green-100 dark:bg-green-900 text-green-900 dark:text-green-100"
                                                                        : "text-gray-900 dark:text-white"
                                                                }`
                                                            }
                                                            value={client}
                                                        >
                                                            {({
                                                                selected,
                                                                active,
                                                            }) => (
                                                                <>
                                                                    <span
                                                                        className={`block truncate ${
                                                                            selected
                                                                                ? "font-medium"
                                                                                : "font-normal"
                                                                        }`}
                                                                    >
                                                                        {
                                                                            client.name
                                                                        }
                                                                    </span>
                                                                    {selected ? (
                                                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-green-600 dark:text-green-300">
                                                                            <CheckIcon
                                                                                className="h-5 w-5"
                                                                                aria-hidden="true"
                                                                            />
                                                                        </span>
                                                                    ) : null}
                                                                </>
                                                            )}
                                                        </Combobox.Option>
                                                    )
                                                )
                                            )}
                                        </Combobox.Options>
                                    </div>
                                </Combobox>
                            ) : null}
                            {selectedSearchTopic.id === 3 ? (
                                <Combobox
                                    value={selectedProduct}
                                    onChange={setSelectedProduct}
                                    name="product"
                                    disabled={
                                        selectedSearchTopic.id === 1
                                            ? true
                                            : false
                                    }
                                    className={
                                        selectedSearchTopic.id === 1
                                            ? "opacity-50"
                                            : ""
                                    }
                                >
                                    <div className="relative">
                                        <div className="relative w-full cursor-pointer overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-900 dark:text-white text-left shadow-lg ring-1 ring-black/5 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-700 sm:text-sm">
                                            <Combobox.Input
                                                className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-0 focus:outline-none"
                                                displayValue={(product) =>
                                                    product.name
                                                }
                                                onChange={(event) =>
                                                    setQuery(event.target.value)
                                                }
                                            />
                                            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                                                <ChevronUpDownIcon
                                                    className="h-5 w-5 text-gray-400"
                                                    aria-hidden="true"
                                                />
                                            </Combobox.Button>
                                        </div>
                                        <Combobox.Options className="z-30 absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-gray-100 dark:bg-gray-900 py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                            {filteredProducts.length === 0 &&
                                            query !== "" ? (
                                                <div className="relative cursor-pointer select-none px-4 py-2 text-gray-700">
                                                    Nessuna corrispondenza.
                                                </div>
                                            ) : (
                                                filteredProducts.map(
                                                    (product) => (
                                                        <Combobox.Option
                                                            key={product.id}
                                                            className={({
                                                                active,
                                                            }) =>
                                                                `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                                                                    active
                                                                        ? "bg-green-100 dark:bg-green-900 text-green-900 dark:text-green-100"
                                                                        : "text-gray-900 dark:text-white"
                                                                }`
                                                            }
                                                            value={product}
                                                        >
                                                            {({
                                                                selected,
                                                                active,
                                                            }) => (
                                                                <>
                                                                    <span
                                                                        className={`block truncate ${
                                                                            selected
                                                                                ? "font-medium"
                                                                                : "font-normal"
                                                                        }`}
                                                                    >
                                                                        {
                                                                            product.name
                                                                        }
                                                                    </span>
                                                                    {selected ? (
                                                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-green-600 dark:text-green-300">
                                                                            <CheckIcon
                                                                                className="h-5 w-5"
                                                                                aria-hidden="true"
                                                                            />
                                                                        </span>
                                                                    ) : null}
                                                                </>
                                                            )}
                                                        </Combobox.Option>
                                                    )
                                                )
                                            )}
                                        </Combobox.Options>
                                    </div>
                                </Combobox>
                            ) : null}
                        </div>
                    )}
                    <div className="w-48 mx-auto">
                        <Listbox
                            value={selectedTop}
                            onChange={setSelectedTop}
                            name="top"
                        >
                            <div className="relative">
                                <Listbox.Button className="relative w-full cursor-pointer rounded-lg bg-gray-100 dark:bg-gray-900 dark:text-white py-2 pl-3 pr-10 text-left shadow-lg ring-1 ring-black/5 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-700 sm:text-sm">
                                    <span className="block truncate">
                                        {selectedTop.name}
                                    </span>
                                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                        <ChevronUpDownIcon
                                            className="h-5 w-5 text-gray-400"
                                            aria-hidden="true"
                                        />
                                    </span>
                                </Listbox.Button>
                                <Listbox.Options className="z-30 absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-gray-100 dark:bg-gray-900 py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                    {tops.map((top) => (
                                        <Listbox.Option
                                            key={top.id}
                                            className={({ active }) =>
                                                `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                                                    active
                                                        ? "bg-green-100 dark:bg-green-900 text-green-900 dark:text-green-100"
                                                        : "text-gray-900 dark:text-white"
                                                } ${
                                                    top.unavailable
                                                        ? "opacity-50"
                                                        : ""
                                                }`
                                            }
                                            value={top}
                                            disabled={top.unavailable}
                                        >
                                            {({ selected }) => (
                                                <>
                                                    <span
                                                        className={`block truncate ${
                                                            selected
                                                                ? "font-medium"
                                                                : "font-normal"
                                                        }`}
                                                    >
                                                        {top.name}
                                                    </span>
                                                    {selected ? (
                                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-green-600 dark:text-green-300">
                                                            <CheckIcon
                                                                className="h-5 w-5"
                                                                aria-hidden="true"
                                                            />
                                                        </span>
                                                    ) : null}
                                                </>
                                            )}
                                        </Listbox.Option>
                                    ))}
                                </Listbox.Options>
                            </div>
                        </Listbox>
                    </div>

                    <div className="mx-auto">
                        <button
                            type="button"
                            className="bg-green-600 dark:bg-green-800 hover:bg-green-800 dark:hover:bg-green-900 text-white font-bold cursor-pointer rounded-lg py-2 px-6 text-center shadow-lg ring-1 ring-black/5 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-700 sm:text-sm"
                            onClick={() => {
                                console.log(
                                    "SearchTopic: " +
                                        selectedSearchTopic.name +
                                        "\nTop: " +
                                        selectedTop.name
                                );
                            }}
                        >
                            Ricerca
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Filtro;
