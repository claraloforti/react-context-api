// Importo NavLink per creare i link di navigazione interni
import { NavLink } from "react-router-dom";

function NavBar() {

    // Array di oggetti che definisce le voci di navigazione
    const links = [
        { path: '/', label: 'HOME PAGE' },
        { path: '/chisiamo', label: 'CHI SIAMO' },
        { path: '/prodotti', label: 'I NOSTRI PRODOTTI' }
    ]

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
                </ul>
            </div>
        </nav>
    )
}

export default NavBar