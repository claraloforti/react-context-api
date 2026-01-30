import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios"

const BudgetContext = createContext();

const endpoint = "https://fakestoreapi.com//products/";



function BudgetProvider({ children }) {

    // Variabile di stato per lista dei prodotti
    const [products, setProducts] = useState([]);
    // Variabile di stato per il filtro del budget
    const [budgetMode, setBudgetMode] = useState(false);


    // Funzione di gestione del budget
    // che inverte il valore attuale di budgetMode (tra true e false)

    const toggleBudgetMode = () => setBudgetMode(prev => !prev);


    // Funzione che esegue la chiamata Ajax verso endpoint API
    function fetchProducts() {
        axios.get(endpoint)
            .then(response => setProducts(response.data))
            .catch(error => console.log("Errore nella richiesta"));
    }

    // useEffect per eseguire la chiamata solo al montaggio del componente
    useEffect(fetchProducts, []);



    return ( // Fornisce ai figli l'accesso allo stato e alle funzioni del budget
        <BudgetContext.Provider
            value={{
                products,
                budgetMode,
                toggleBudgetMode
            }}
        >
            {children}
        </BudgetContext.Provider>
    );
}


// Hook per utilizzare il contesto del budget
function useBudgetMode() {
    return useContext(BudgetContext);
}

// Export del provider e dell’hook
export { BudgetProvider, useBudgetMode }