import ProductsCard from "./ProductsCard";


function ProductsList({ products }) { // Array dei prodotti passati dal padre (Products)


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