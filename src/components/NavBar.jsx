// Importo NavLink per creare i link di navigazione interni
import { NavLink } from "react-router-dom";
import { useBudgetMode } from "../contexts/BudgetContext";

function NavBar() {

    // Array di oggetti che definisce le voci di navigazione
    const links = [
        { path: '/', label: 'HOME PAGE' },
        { path: '/chisiamo', label: 'CHI SIAMO' },
        { path: '/prodotti', label: 'I NOSTRI PRODOTTI' }
    ]

    // Recupero dal contesto lo stato della modalità budget e la funzione per gestirla
    const { budgetMode, toggleBudgetMode } = useBudgetMode();

    return (
        <nav className="navbar">
            <div className="container">
                <ul>
                    {links.map((link, i) => (
                        <li key={i}>
                            <NavLink to={link.path} // Creo un link di navigazione verso il percorso specificato in link.path
                                // Aggiungo la classe active al link selezionato
                                className={({ isActive }) => isActive ? 'active' : ''}
                            >
                                {link.label}
                            </NavLink>
                        </li>
                    ))}
                    {/* Bottone per la modalità budget */}
                    <button
                        // Aggiungi classe active se budgetMode è true
                        className={`budget-btn ${budgetMode ? 'active' : ''}`}
                        onClick={toggleBudgetMode}>
                        {budgetMode ? "Modalità Budget attiva" : "Modalità Budget disattivata"}
                    </button>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar