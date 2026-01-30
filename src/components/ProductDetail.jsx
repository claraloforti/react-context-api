import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DetailCard from "./DetailCard";
import axios from "axios";

const endpoint = "https://fakestoreapi.com//products/";

function ProductDetail() {

    const { id } = useParams(); // Prendo dalla URL l’id del prodotto da mostrare

    const [product, setProduct] = useState();

    // useNavigate per cambiare pagina in caso di errore
    const navigate = useNavigate();

    // Chiamata a singolo oggetto nell'endpoint
    useEffect(() => {
        axios.get(endpoint + id) // URL completo per il prodotto singolo
            .then(response =>
                (!response.data || Object.keys(response.data).length === 0)
                    ? navigate('/prodotti')  // se l'oggetto non esiste o è vuoto, reindirizzo alla lista prodotti
                    : setProduct(response.data) // aggiorna lo stato se l'oggetto è valido
            )
            .catch(error => {
                console.log("Errore nella chiamata", error)
                navigate('/prodotti'); // Reindirizzo alla lista prodotti se fallisce
            })
    }, [id, navigate]) // L'effetto si riesegue se cambia 'id' o 'navigate'


    return (
        <div className="container">
            <h2 className="product-detail-title">Dettagli prodotto</h2>
            {product ? (
                <DetailCard product={product} />
            ) : (
                <p className="loader">Loading...</p>
            )
            }
        </div>
    )
}

export default ProductDetail