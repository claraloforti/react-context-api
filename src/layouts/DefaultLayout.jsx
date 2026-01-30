import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import MainFooter from "../components/MainFooter";

function DefaultLayout() {
    return (
        <div>
            <NavBar /> {/* Componente sempre visibile*/}
            <Outlet /> {/* Segnaposto per il contenuto della pagina corrente (route attiva).*/}
            <MainFooter /> {/* Componente sempre visibile*/}
        </div>
    );
}

export default DefaultLayout