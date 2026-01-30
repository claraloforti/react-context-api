import { Link } from "react-router-dom"

function DetailCard({ product }) {


    const { title, price, description, image, category } = product;


    return (
        <div className="product-detail-section">
            <div className="detail-img">
                <img src={image} alt={title} />
            </div>
            <div className="detail-info">
                <h2>{title}</h2>
                <p>${price.toFixed(2)}</p>
                <p>{description}</p>
                <p>{category}</p>
            </div>

            <Link to="/prodotti" className="btn-return">
                Torna alla lista dei prodotti
            </Link>
        </div>
    )
}

export default DetailCard