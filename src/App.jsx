import { BrowserRouter, Routes, Route } from "react-router-dom"; // Componenti di React Router per gestire la navigazione
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Products from "./pages/Products";
import DefaultLayout from "./layouts/DefaultLayout";
import ProductDetail from "./components/ProductDetail";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}> {/* Wrapper comune per tutte le route figlie che contiene Navbar e Footer fissi e Outlet dinamico */}
          {/* index è la route di default */}
          <Route index element={<HomePage />} />
          {/* Quando l’URL è "/chisiamo", React Router renderizza <AboutUs /> dentro <Outlet /> del DefaultLayout */}
          <Route path="/chisiamo" element={<AboutUs />} />
          {/* Quando l’URL è "/prodotti", React Router renderizza <Products /> dentro <Outlet /> del DefaultLayout */}
          <Route path="/prodotti" >
            <Route index element={<Products />} />
            <Route path=":id" element={<ProductDetail />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
