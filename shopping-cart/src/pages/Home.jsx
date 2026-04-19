import { useState } from 'react'
import { Product } from '../components/Product'
import { Pagination } from '../components/Pagination'
import { db } from '../data/db'

const ITEMS_PER_PAGE = 6

export default function Home({ cart, setCart, addToCart }) {
    const [currentPage, setCurrentPage] = useState(1)

    // Calcular total de páginas
    const totalPages = Math.ceil(db.length / ITEMS_PER_PAGE)

    // Obtener productos de la página actual
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
    const endIndex = startIndex + ITEMS_PER_PAGE
    const currentProducts = db.slice(startIndex, endIndex)

    // Manejar cambio de página
    const handlePageChange = (page) => {
        setCurrentPage(page)
        // Scroll suave hacia arriba
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <main className="container-xl mt-5">
            <h2 className="text-center mb-5">Nuestra Colección</h2>

            <div className="row mt-5">
                {currentProducts.map((item) => (
                    <Product
                        key={item.id}
                        product={item}
                        setCart={setCart}
                        addToCart={addToCart}
                    />
                ))}
            </div>

            {/* Paginación */}
            <div className="mt-5 pt-4">
                <Pagination 
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            </div>

            {/* Información de paginación */}
            <div className="text-center mt-4 mb-5">
                <p className="text-muted">
                    Mostrando {currentProducts.length} de {db.length} productos 
                    (Página {currentPage} de {totalPages})
                </p>
            </div>
        </main>
    )
}
