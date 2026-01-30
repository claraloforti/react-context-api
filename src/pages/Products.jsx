import ProductsList from "./../components/ProductsList"
import { useBudgetMode } from "../contexts/BudgetContext";


function Products() {

    // Recupero dal contesto lo stato della modalità budget e la funzione per gestirla
    const { budgetMode, toggleBudgetMode } = useBudgetMode();


    return (
        <>
            <h2 className="products-list-title">I nostri prodotti</h2>
            {/* Bottone per la modalità budget */}
            <div className="budget-btn-container">
                <button
                    // Aggiunge classe active se budgetMode è true
                    className={`budget-btn ${budgetMode ? 'active' : ''}`}
                    onClick={toggleBudgetMode}>
                    {budgetMode ? "Modalità Budget attiva" : "Modalità Budget disattivata"}
                </button>
            </div>
            <ProductsList />
        </>
    )
}

export default Products