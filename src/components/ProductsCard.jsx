import { Link } from "react-router-dom";


function ProductsCard({ product: { id, title, category, // Destrutturo le proprietà dell'oggetto product passato tramite props dal componente padre (ProductsList) 
    description, price, image }
}) {

    return (
        <div className="product-card">
            <img className="product-image" src={image} alt={title} />
            <p className="product-title">{title}</p>
            <p className="product-price">${price.toFixed(2)}</p>
            <p className="product-description">{description}</p>
            <p className="product-category">{category}</p>
            <Link to={`/prodotti/${id}`}
                className="btn-details">
                Dettagli prodotto
            </Link>
        </div>
    )
}

export default ProductsCard
