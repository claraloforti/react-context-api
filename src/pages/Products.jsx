import ProductsList from "./../components/ProductsList"
import axios from "axios";
import { useState, useEffect } from "react";

const endpoint = "https://fakestoreapi.com//products/";


function Products() {

    // Variabile di stato per lista dei prodotti
    const [products, setProducts] = useState([]);

    // Funzione che esegue la chiamata Ajax verso endpoint API
    function fetchProducts() {
        axios.get(endpoint)
            .then(response => setProducts(response.data))
            .catch(error => console.log("Errore nella richiesta"));
    }

    // useEffect per eseguire la chiamata solo al montaggio del componente
    useEffect(fetchProducts, []);

    return (
        <>
            <h2 className="products-list-title">I nostri prodotti</h2>
            {/* Passo a ProductsList (figlio) l'array dei prodotti come props */}
            <ProductsList products={products} />
        </>
    )
}

export default Products