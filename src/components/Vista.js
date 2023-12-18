import { React, useState, useEffect } from "react";
import Filtro from "./Filtro";
import axios from "axios";
import NessunRisultato from "./NessunRisultato";
import Risultati from "./Risultati";

function Vista() {
    const [results, setResults] = useState(null);
    const [loading, setLoading] = useState(false);
    const [selectTopic, setSelectedTopic] = useState("client");

    function handleTopicChange(type) {
        setSelectedTopic(type);
    }

    function fetchResults(object, id, n) {
        setLoading(true);
        axios
            .get(`http://localhost:5000/esegui_algoritmo/${object}/${id}/${n}`)
            .then((response) => {
                console.log("Risposta:", response.data);
                setResults(response.data);
            })
            .catch((error) => {
                console.error("Error fetching results:", error);
            })
            .finally(() => {
                setLoading(false);
            });
    }

    const [clients, setClients] = useState([]);
    useEffect(() => {
        getClients();
    }, []);

    function getClients() {
        axios.get("http://localhost/api/clients").then((response) => {
            setClients(response.data);
        });
    }

    const [products, setProducts] = useState([]);
    useEffect(() => {
        getProducts();
    }, []);

    function getProducts() {
        axios.get("http://localhost/api/products").then((response) => {
            setProducts(response.data);
        });
    }

    return (
        <>
            <div className="p-4 space-y-4 bg-gray-200 dark:bg-gray-900 rounded-3xl shadow-lg flex flex-col h-full overflow-hidden">
                <Filtro
                    onFetchResults={fetchResults}
                    clients={clients}
                    products={products}
                    onTopicChange={handleTopicChange}
                ></Filtro>
                {results === null && !loading ? (
                    <NessunRisultato></NessunRisultato>
                ) : null}
                {loading ? (
                    <p className="dark:text-white">Caricamento in corso...</p>
                ) : (
                    results !== null && (
                        <Risultati
                            data={results}
                            selectTopic={selectTopic}
                        ></Risultati>
                    )
                )}
            </div>
        </>
    );
}

export default Vista;