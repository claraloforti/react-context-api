import ProductsCard from "./ProductsCard";
import { useBudget } from "../context/BudgetContext";


function ProductsList() {

    // Usiamo contesto e prendiamo il valore che ci serve
    const { products } = useFavortite();


    return (
        <div className="products-list container">
            {products.map(product => (
                <ProductsCard
                    key={product.id}
                    // Passo al componente figlio (ProductsCard) i dati del singolo prodotto tramite props
                    product={product}
                />
            ))}
        </div>
    )
}

export default ProductsList