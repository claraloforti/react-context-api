import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios"

const BudgetContext = createContext();

const endpoint = "https://fakestoreapi.com//products/";


function BudgetProvider({ children }) {

    // Variabile di stato per lista dei prodotti
    const [products, setProducts] = useState([]);
    // Variabile di stato per gli ID dei preferiti
    const [budget, setBudget] = useState([]);

    // Funzioni di gestione del budget
    const addBudget = (productId) => {
        setBudget(prev => [...prev, productId]);
    };

    const removeBudget = (productId) => {
        setBudget(prev => prev.filter(id => id !== productId));
    };

    const isBudget = (productId) => {
        return budget.includes(productId);
    };

    // Funzione che esegue la chiamata Ajax verso endpoint API
    function fetchProducts() {
        axios.get(endpoint)
            .then(response => setProducts(response.data))
            .catch(error => console.log("Errore nella richiesta"));
    }

    // useEffect per eseguire la chiamata solo al montaggio del componente
    useEffect(fetchProducts, []);

    return (
        <BudgetContext.Provider
            value={{
                products,
                budget,
                addBudget,
                removeBudget,
                isBudget
            }}
        >
            {children}
        </BudgetContext.Provider>
    );
}


// Definiamo un hook per consumare il contesto
function useBudget() {
    const context = useContext(FavortiteContext);
    return context;
}

// Esportiamo il nostro provider ed il nostro hook
export { BudgetProvider, useBudget }