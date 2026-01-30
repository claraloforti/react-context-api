import ProductsCard from "./ProductsCard";
import { useBudgetMode } from "../contexts/BudgetContext";


function ProductsList() {

    // Recupero dal contesto lo stato dei prodotti per filtrarli in base al budget
    const { products, budgetMode } = useBudgetMode();

    // Filtro prodotti se la modalità budget è attiva
    const budgetProducts = budgetMode ? // budgetMode è true? (modalità budget è attiva?)
        products.filter(product => // allora mostra solo prodotti con prezzo <= 30
            product.price <= 30)
        : products; // altrimenti mostra tutti i prodotti


    return (
        <div className="products-list container">
            {budgetProducts.map(product => (
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